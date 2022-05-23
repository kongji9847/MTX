const HOST = 'http://127.0.0.1:8000/api/v1/'

const ACCOUNTS = 'accounts/'
const MOVIES = 'movies/'
const REVIEWS = 'reviews/'
const COMMENTS = 'comments/'
const RATE = 'rate/'
const SEARCH = 'search/'

export default {
  accounts: {
    signup: () => HOST + ACCOUNTS + 'signup/',
    login: () => HOST + ACCOUNTS + 'login/',
    logout: () => HOST + ACCOUNTS + 'logout/',
    currentUserInfo: () => HOST + ACCOUNTS + 'user/',
    profile: username => HOST + ACCOUNTS + 'profile/' + `${username}/`,
  },
  movies: {
    wordChain: () => HOST + MOVIES + 'word-chain/',
    movie: moviePk => HOST + MOVIES + `${moviePk}/`,

    reviews: () => HOST + MOVIES + REVIEWS,
    newReview: moviePk => HOST + MOVIES + `${moviePk}/` + REVIEWS,
    // 단일 리뷰 조회/수정/삭제
    review: reviewPk => HOST + MOVIES + REVIEWS + `${reviewPk}/`,

    comments: reviewPk => HOST + MOVIES + REVIEWS + `${reviewPk}/` + COMMENTS,
    comment: (reviewPk, commentPk) => HOST + MOVIES + REVIEWS + `${reviewPk}/` + COMMENTS + `${commentPk}/`,

    rate: moviePk => HOST + MOVIES + `${moviePk}/` + RATE,
    search: () => HOST + MOVIES + SEARCH
  }
}