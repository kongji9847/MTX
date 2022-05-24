// import router from '@/router'
import axios from 'axios'
// import drf from '@/api/drf'

const base_url = 'https://api.themoviedb.org/3/'
const API_KEY = process.env.VUE_APP_TMDB_API_KEY

export default {
  state: {
    topRatedMovies : []
  },

  getters: {
    topRatedMovies: (state) => { return state.topRatedMovies }
  },

  mutations: {
    TOP_RATED_MOVIES : function (state, movies) {
      state.topRatedMovies = movies
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
        console.log(res.data.results)
        commit('TOP_RATED_MOVIES', res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
    }



  },
  }