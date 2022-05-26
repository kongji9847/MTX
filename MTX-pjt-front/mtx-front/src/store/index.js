import Vue from 'vue'
import Vuex from 'vuex'

import accounts from './modules/accounts'
import movies from './modules/movies'
import reviews from './modules/reviews'
import main from './modules/main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 현재 url 상태
    nowUrl : null,
    isMovieChoicedToReview: false,
  },
  getters: {
    homeUrl : (state) => {return (state.nowUrl === 'home') ? 1 : 0},
    mainUrl : (state) => {return (state.nowUrl === 'main') ? 1 : 0},
    chainStartUrl : state => {return (state.nowUrl === 'chainStart') ? 1 : 0},
    chainUrl: state => {return (state.nowUrl === 'chain' || state.nowUrl === 'detail') ? 1 : 0 },
    notFoundUrl: state => {return (state.nowUrl === 'notFound') ? 1 : 0},
    isMovieChoicedToReview: state => state.isMovieChoicedToReview
  },
  mutations: {
    SET_URL : (state, nowUrl) => {
      state.nowUrl = nowUrl
    },
    SET_MOVIE_CHOICED_TO_REVIEW: (state, TF) => {
      state.isMovieChoicedToReview = TF
    }
  },
  actions: {
    setUrl ({commit}, nowUrl) {
      commit('SET_URL', nowUrl)
    },
    setMOVIECHOICEDTOREVIEW ({commit}, TF) {
      commit('SET_MOVIE_CHOICED_TO_REVIEW', TF)
    }
  },
  modules: { accounts, movies, reviews, main },
})
