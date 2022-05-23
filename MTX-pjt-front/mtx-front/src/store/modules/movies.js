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
    // 검색 결과
    searchResults: [],
  },

  getters: {
    movieList: state => state.movieList,
    movie: state => state.movie,
    movieDetail: state => state.movieDetail,
    searchResults: state => state.searchResults,
  },

  mutations: {
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
    },
    SET_SEARCH_RESULTS: (state, results) => {
      state.searchResults = results
    },
    REMOVE_MOVIELIST: (state) => {
      state.movieList = []
    }
  },

  actions: {
    // 검색해서 끝말잇기 시작
    inputSearch({ commit }, last_word) {
      commit('REMOVE_MOVIELIST')
      axios({
        url: drf.movies.wordChain(),
        method: 'get',
        params: {
          "start_word": last_word,
          "now_id": -1,
        },
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

    // 영화 끝말잇기 next 로직
    nextMovie({commit}, info) {
      const start_word = info.start_word
      const now_id = info.now_id
      axios({
        url: drf.movies.wordChain(),
        method: 'get',
        params: {
          "start_word": start_word,
          "now_id": now_id,
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
        router.push({
          name: 'wordChainStart'
        })
      }
    },

    // 영화 디테일 정보 가져오는 함수
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

    // 영화 랭킹 메기는 함수
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
        console.log(error.response.data)
        if (error.response.status === 403) {
          alert(error.response.data.error_message)
        } else {
          alert('로그인한 사용자만 평점을 남길 수 있습니다!')
        }
      })
    },

    // 영화 검색하는 함수
    movieSearch({commit}, keyword) {
      console.log(keyword)
      axios({
        url: drf.movies.search(),
        method: 'get',
        params: {
          "keyword": keyword,
        }
      })
      .then(res => {
        commit('SET_SEARCH_RESULTS', res.data)
      })
      .catch(err => {
        console.log(err.response)
        alert(err.response.data.error_message)
      })
    }
    
  },
}
