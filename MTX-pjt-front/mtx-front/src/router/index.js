import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import SignupView from '@/views/SignupView.vue'
import LoginView from '@/views/LoginView.vue'
import LogoutView from '@/views/LogoutView.vue'
import ProfileView from '@/views/ProfileView.vue'
import NotFound404 from '@/views/NotFound404.vue'

import HomeView from '@/views/HomeView.vue'
import WordChainStartView from '@/views/WordChainStartView.vue'
import WordChainView from '@/views/WordChainView'
import MovieDetailView from '@/views/MovieDetailView.vue'

import ReviewListView from '@/views/ReviewListView.vue'
import ReviewNewView from '@/views/ReviewNewView.vue'
import ReviewDetailView from '@/views/ReviewDetailView.vue'
import ReviewEditView from '@/views/ReviewEditView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView,
  },
  {
    path: '/profile/:username',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movies',
    name: 'wordChainStart',
    component: WordChainStartView,
  },
  {
    path: '/movies/word-chain',
    name: 'wordChain',
    component: WordChainView,
  },
  {
    path: '/movies/:movieId',
    name: 'movie',
    component: MovieDetailView,
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404,
  },
  {
    path: '/movies/reviews',
    name: 'reviews',
    component: ReviewListView,
  },
  {
    path: '/movies/reviews/new',
    name: 'reviewNew',
    component: ReviewNewView,
  },
  {
    path: '/movies/reviews/:reviewPk',
    name: 'review',
    component: ReviewDetailView,
  },
  {
    path: '/movies/reviews/:reviewPk/edit',
    name: 'reviewEdit',
    component: ReviewEditView,
  },
  // 위에 모든 주소 작성한 뒤 마지막에 배치할 것
  {
    path: '*',
    redirect: '/404'
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 페이지 이동할 때마다 검사함
router.beforeEach((to, from, next) => {
  store.commit('SET_AUTH_ERROR', null)

  const { isLoggedIn } = store.getters

  const noAuthPages = ['login', 'signup', 'home', 'wordChainStart', 'wordChain', 'movie']
  
  const isAuthRequired = !noAuthPages.includes(to.name)
  // console.log(from.name)

  if (isAuthRequired && !isLoggedIn) {
    alert('로그인 필요합니다. 로그인 페이지로 이동중..')
    next({ name: 'login' })
  } else {
    next()
  }

  if (!isAuthRequired && isLoggedIn) {
    // next({ name: 'wordChainStart' })
    next()
  }
})

export default router
