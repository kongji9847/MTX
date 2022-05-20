// import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'

import _ from 'lodash'

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
    inputSearch({ commit, state }, word) {
      state.inputValue = word.slice(-1)
      console.log(state.inputValue)

      const params = {
        "start_word": state.inputValue
      }

      axios({
        url: drf.movies.wordChain(),
        method: 'get',
        params: params,
      })
      .then(res => {
        // console.log(res.data)
        commit('SET_MOVIE', res.data)
      })
      .catch(err => {
        console.log(err)
        err;
      })
    },
  },
  modules: {
  }
}
