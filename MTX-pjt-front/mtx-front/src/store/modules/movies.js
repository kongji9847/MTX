import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'

// import _ from 'lodash'

export default {
  state: {
    // 끝말잇기 한 movie 담기
    movieList: [],
    // 현재 movie
    movie: {},
    // movie 디테일
    movieDetail: {},

    inputValue: '',
    ranked_movies: [],
    // reviews: [],
    // review: [],
  },

  getters: {
    movieList: state => state.movieList,
    movie: state => state.movie,
    movieDetail: state => state.movieDetail,


    ranked_movies: state => state.ranked_movies,
    // reviews: state => state.reviews,
    // review: state => state.review,
    isAuthor: (state, getters) => {
      return state.review.user?.username === getters.currentUser.username
    },
    // isReview: state => !_.isEmpty(state.article),
  },

  mutations: {
    SET_INPUTVALUE: (state, inputValue) => state.inputValue = inputValue,
    
    SET_MOVIE: (state, movie) => {
      state.movie = movie
      state.movieList.push(movie)
    },
    REMOVE_MOVIE: (state) => {
      state.movieList.pop()
      state.movie = state.movieList[state.movieList.length - 1]
    },
    SET_MOVIE_DETAIL: (state, movie) => {
      state.movieDetail = movie
    },
    SET_MOVIE_RATE: (state, rateData) => {
      state.movieDetail.vote_average = rateData.vote_average
      state.movie.vote_average = rateData.vote_average
    }
  },

  actions: {
    inputSearch({ commit, state }, word) {
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
          name: 'wordChain',
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

    // 영화 끝말잇기 next 로직
    nextMovie({commit}, start_word) {
      axios({
        url: drf.movies.wordChain(),
        method: 'get',
        params: {
          "start_word": start_word,
        }
      })
      .then((res) => {
        commit('SET_MOVIE', res.data)
      })
      .catch(error => {
        alert(`${start_word}(으)로 시작하는 영화가 없습니다!`)
        console.log(error)
      })
    },

    // 영화 끝말잇기 back 로직
    prevMovie({commit, state}) {
      if (state.movieList.length > 1) {
        commit('REMOVE_MOVIE')
      } else {
        alert('돌아갈 영화가 없습니다!')
        // router.push({
        //   name: 'wordChainStart'
        // })
      }
    },

    movieDetail({commit}, movieId) {
      axios({
        url: drf.movies.movie(movieId),
        method: 'get'
      })
      .then(res => {
        commit('SET_MOVIE_DETAIL', res.data)
      })
      .catch(error => {
        console.log(error)
      })
    },

    movieRate({state, commit, getters}, score) {
      console.log(score)
      console.log(getters.authHeader)
      axios({
        url: drf.movies.rate(state.movieDetail.id),
        method: 'post',
        headers: getters.authHeader,
        data: {
          "score": score
        }
      })
      .then(res => {
        commit('SET_MOVIE_RATE', res.data)
      })
      .catch(error => {
        console.log(error)
      })
    }
    
  },
  modules: {
  }
}
