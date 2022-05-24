// import router from '@/router'
import axios from 'axios'
// import drf from '@/api/drf'

const base_url = 'https://api.themoviedb.org/3/'
const API_KEY = process.env.VUE_APP_TMDB_API_KEY

export default {
  state: {
    topRatedMovies : [],
    nowPlayingMovies : [],
    upComingMovies: [],
    similarMovies: [],
    modalMovie: {},
  },

  getters: {
    topRatedMovies: (state) => { return state.topRatedMovies },
    nowPlayingMovies: (state) => { return state.nowPlayingMovies },
    upComingMovies: (state) => { return state.upComingMovies },
    similarMovies: (state) => { return state.similarMovies },
    modalMovie: (state) => {return state.modalMovie}
  },

  mutations: {
    TOP_RATED_MOVIES : function (state, movies) {
      state.topRatedMovies = movies
    },
    NOW_PLAYING_MOVIES : function (state, movies) {
      state.nowPlayingMovies = movies
    },
    UP_COMING_MOVIES : function (state, movies) {
      state.upComingMovies = movies
    },
    SIMILAR_MOVIES : function (state, movies) {
      state.similarMovies = movies
    },
    MODAL_MOVIE: function (state, movie) {
      state.modalMovie = movie
    }
  },

  actions: {
    topRatedMoviesAPI: function ({commit}) {
      axios({
        url: base_url+'movie/top_rated',
        method: "get",
        params: {
          api_key: API_KEY,
          language: "ko",
          page: 1,
          region: 'KR'
        }
      })
      .then((res) => {
        commit('TOP_RATED_MOVIES', res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    nowPlayingMoviesAPI: function ({commit}) {
      axios({
        url: base_url+'movie/now_playing',
        method: "get",
        params: {
          api_key: API_KEY,
          language: "ko",
          page: 1,
          region: 'KR'
        }
      })
      .then((res) => {
        commit('NOW_PLAYING_MOVIES', res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    upComingMoviesAPI: function ({commit}) {
      axios({
        url: base_url+'movie/upcoming',
        method: "get",
        params: {
          api_key: API_KEY,
          language: "ko",
          page: 1,
        }
      })
      .then((res) => {
        commit('UP_COMING_MOVIES', res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    similarMoviesAPI: function ({commit}, movieId) {
      axios({
        url: base_url+`movie/${movieId}/similar`,
        method: "get",
        params: {
          api_key: API_KEY,
          language: "ko",
          page: 1,
        }
      })
      .then((res) => {
        commit('SIMILAR_MOVIES', res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    nowModalMovie: function({commit}, movie) {
      commit('MODAL_MOVIE', movie)
    }
  



  },
  }