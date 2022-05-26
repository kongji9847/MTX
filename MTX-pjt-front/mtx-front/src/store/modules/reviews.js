import axios from 'axios'
import drf from '@/api/drf'

import _ from 'lodash'
import router from '@/router'

export default {
  state: {
    reviews: [],
    review: {},
    moviePk: null,
    movieTitleToReview: null,
  },

  getters: {
    reviews: state => state.reviews,
    review: state => state.review,
    moviePk: state => state.moviePk,
    movieTitleToReview: state => state.movieTitleToReview,
    isReview: state => !_.isEmpty(state.review),
    isAuthor: (state, getters) => {
      return state.review.user?.username === getters.currentUser.username
      // return state.review.user === getters.currentUser.username
    },
  },

  mutations: {
    SET_REVIEWS: (state, reviews) => state.reviews = reviews,
    SET_REVIEW: (state, review) => state.review = review,
    SET_MOVIEPK: (state, moviePk) => state.moviePk = moviePk,
    SET_MOVIETITLE: (state, title) => state.movieTitleToReview = title,
    SET_REVIEW_COMMENTS: (state, comments) => (state.review.comment_set = comments),
    REMOVE_MOVIEPK: (state) => state.moviePk = null,
  },

  actions: {
    fetchReviews({ commit, getters }) {
      axios({
        url: drf.movies.reviews(),
        method: 'get',
        headers: getters.authHeader,
      })
      .then(res => commit('SET_REVIEWS', res.data))
      .catch(err => {
        console.log(getters.reviews)
        console.error(err.response)})
    },

    fetchReview({ commit, getters }, reviewPk) {
      axios({
        url: drf.movies.review(reviewPk),
        method: 'get',
        headers: getters.authHeader,
      })
      .then(res => commit('SET_REVIEW', res.data))
      .catch(err => {
        console.error(err.response)
        if (err.response.status === 404) {
          router.push({ name: 'NotFound404' })
        }
      })
    },

    createReview({ commit, getters }, review) {
      axios({
        url: drf.movies.newReview(getters.moviePk),
        method: 'post',
        data: review,
        headers: getters.authHeader,
      })
      .then(res => {
        commit('SET_REVIEW', res.data)
        router.push({
          name: 'review',
          params: { reviewPk: getters.review.id }
        })
        commit('REMOVE_MOVIEPK')
      })
      .catch(error => {
        console.log(error.response)
        if (error.response.status === 404) {
          alert('리뷰를 작성할 영화를 선택해주세요!')
        } else {
          alert('양식에 맞춰 다시 한 번 작성해주세요!')
        }
      })
    },

    deleteReview({ commit, getters }, reviewPk) {
      if (confirm('정말 삭제하시겠습니까?')) {
        axios({
          url: drf.movies.review(reviewPk),
          method: 'delete',
          headers: getters.authHeader,
        })
        .then(() => {
          commit('SET_REVIEW', {})
          router.push({ name: 'reviews'})
        })
        .catch(err => console.error(err.response))
      }
    },

    updateReview({ commit, getters }, {pk, title, content, movie}) {
      console.log(pk)
      axios({
        url: drf.movies.review(pk),
        method: 'put',
        data: { title, content, movie },
        headers: getters.authHeader,
      })
      .then(res => {
        commit('SET_REVIEW', res.data)
        router.push({
          name: 'review',
          params: { reviewPk: getters.review.id }
        })
      })
    },

    movieChoice({ commit }, {moviePk, movieTitle}) {
      // console.log(moviePk, movieTitle)
      commit('SET_MOVIEPK', moviePk)
      commit('SET_MOVIETITLE', movieTitle)
    },

    createComment({ commit, getters }, { reviewPk, content }) {
      const comment = { content }
      axios({
        url: drf.movies.comments(reviewPk),
        method: 'post',
        data: comment,
        headers: getters.authHeader,
      })
      .then(res => {
        commit('SET_REVIEW_COMMENTS', res.data)
      })
      .catch(err => console.error(err.response))
    },

    updateComment({ commit, getters }, { reviewPk, commentPk, content }) {
      console.log(commentPk, content)
      const comment = { content }
      axios({
        url: drf.movies.comment(reviewPk, commentPk),
        method: 'put',
        data: comment,
        headers: getters.authHeader,
      })
      .then(res => {
        console.log(res.data)
        commit('SET_REVIEW_COMMENTS', res.data)
      })
      .catch(err => console.error(err.response))
    },

    deleteComment({ commit, getters }, { reviewPk, commentPk }) {
      if (confirm('정말 댓글을 삭제하시겠습니까?')) {
        axios({
          url: drf.movies.comment(reviewPk, commentPk),
          method: 'delete',
          data: {},
          headers: getters.authHeader,
        })
        .then(res => {
          console.log(res.data)
          commit('SET_REVIEW_COMMENTS', res.data)
        })
        .catch(err => console.error(err.response))
      }
    }


  },
}