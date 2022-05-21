// import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'

import _ from 'lodash'
import router from '@/router'

export default {
  state: {
    inputValue: '',
    movie: [],
    ranked_movies: [],
    reviews: [],
    review: [],
  },
  getters: {
    movie: state => state.movie,
    ranked_movies: state => state.ranked_movies,
    reviews: state => state.reviews,
    review: state => state.review,
    isAuthor: (state, getters) => {
      return state.review.user?.username === getters.currentUser.username
    },
    isReview: state => !_.isEmpty(state.article),
  },

  mutations: {
    SET_INPUTVALUE: (state, inputValue) => state.inputValue = inputValue,
    SET_MOVIE: (state, movie) => state.movie = movie,
  },

  actions: {
    inputSearch({ commit, state, getters }, word) {
      state.inputValue = word.slice(-1)

      const params = {
        "start_word": state.inputValue
      }
      
      axios({
        url: drf.movies.wordChain(),
        method: 'get',
        params: params,
      })
      .then(res => {
        commit('SET_MOVIE', res.data)
        router.push({
          name: 'movie',
          params: { moviePk: getters.movie.pk }
        })
      })
      .catch(err => {
        console.log(err)
      })
    },

    fetchMovie({ commit, getters }, moviePk) {
      axios({
        url: drf.movies.movie(moviePk),
        method: 'get',
        headers: getters.authHeader,
      })
      .then(res => commit('SET_MOVIE', res.data))
      .catch(err => {
        console.error(err.response)
        if (err.response.status === 404) {
          router.push({ name: 'NotFound404'})
        }
      })
    },
  },
  modules: {
  }
}
