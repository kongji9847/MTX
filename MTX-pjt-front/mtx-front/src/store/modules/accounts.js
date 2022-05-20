import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'


export default {
  state: {
    token: localStorage.getItem('token') || '' ,
    currentUser: {},
    authError: null,
  },

  getters: {
    isLoggedIn: state => !!state.token,
    currentUser: state => state.currentUser,
    authError: state => state.authError,
    authHeader: state => ({ Authorization: `Token ${state.token}`})
  },

  mutations: {
    SET_TOKEN: (state, token) => state.token = token,
    SET_CURRENT_USER: (state, user) => state.currentUser = user,
    SET_AUTH_ERROR: (state, error) => state.authError = error
  },

  actions: {
    saveToken({ commit }, token) {
      commit('SET_TOKEN', token)
      localStorage.setItem('token', token)
    },

    removeToken({ commit }) {
      commit('SET_TOKEN', '')
      localStorage.setItem('token', '')
    },

    signup({ commit, dispatch }, credentials) {
      axios({
        url: drf.accounts.signup(),
        method: 'post',
        data: credentials
      })
      .then(res => {
        const token = res.data.key
        dispatch('saveToken', token)
        dispatch('fetchCurrentUser')
        router.push({ name: 'wordChain' })
      })
      .catch(err => {
        commit('SET_AUTH_ERROR', err.response.data)
      })
    },

    login({ commit, dispatch }, credentials) {
      axios ({
        url: drf.accounts.login(),
        method: 'post',
        data: credentials
      })
      .then(res => {
        const token = res.data.key
        dispatch('saveToken', token)
        dispatch('fetchCurrentUser')
        router.push({ name: 'wordChain' })
      })
      .catch(err => {
        commit('SET_AUTH_ERROR', err.response.data)
      })
    },

    fetchCurrentUser({ commit, getters, dispatch }) {
      if (getters.isLoggedIn) {
        axios({
          url: drf.accounts.currentUserInfo(),
          method: 'get',
          headers: getters.authHeader,
        })
        .then(res => commit('SET_CURRENT_USER', res.data))
        .catch(err => {
          if (err.response.status === 401) {
            dispatch('removeToken')
            router.push({ name: 'login' })
          }
        })
      }
    }

  },
  modules: {
  },
}
