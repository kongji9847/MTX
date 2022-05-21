import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import SignupView from '@/views/SignupView.vue'
import LoginView from '@/views/LoginView.vue'
import LogoutView from '@/views/LogoutView.vue'
import ProfileView from '@/views/ProfileView.vue'
import NotFound404 from '@/views/NotFound404.vue'

import WordChainView from '@/views/WordChainView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue'

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
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/movies',
    name: 'wordChain',
    component: WordChainView,
  },
  {
    path: '/movies/:moviePk',
    name: 'movie',
    component: MovieDetailView,
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404,
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

  const noAuthPages = ['login', 'signup']
  
  const isAuthRequired = !noAuthPages.includes(to.name)

  if (isAuthRequired && !isLoggedIn) {
    alert('로그인 필요합니다. 로그인 페이지로 이동중..')
    next({ name: 'login' })
  } else {
    next()
  }

  if (!isAuthRequired && isLoggedIn) {
    next({ name: 'movies' })
  }
})

export default router
