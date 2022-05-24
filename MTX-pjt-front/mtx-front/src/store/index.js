import Vue from 'vue'
import Vuex from 'vuex'

import accounts from './modules/accounts'
import movies from './modules/movies'
import reviews from './modules/reviews'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 현재 url 상태
    nowUrl : null,
  },
  getters: {
    homeUrl : (state) => {return (state.nowUrl === 'home') ? 0 : 1},
    mainUrl : (state) => {return (state.nowUrl === 'main') ? 1 : 0},
    chainStartUrl : state => {return (state.nowUrl === 'chainStart') ? 1 : 0},
    chainUrl: state => {return (state.nowUrl === 'chain' || state.nowUrl === 'detail') ? 1 : 0 }
  },
  mutations: {
    SET_URL : (state, nowUrl) => {
      state.nowUrl = nowUrl
    }
  },
  actions: {
    setUrl ({commit}, nowUrl) {
      commit('SET_URL', nowUrl)
    }
  },
  modules: { accounts, movies, reviews },
})
