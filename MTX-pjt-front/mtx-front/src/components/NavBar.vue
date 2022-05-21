<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'wordChain' }">Home</router-link>
      </li>
      <li v-if="!isLoggedIn">
        <router-link :to=" { name: 'login' }">Login</router-link>
      </li>
      <li v-if="!isLoggedIn">
        <router-link :to="{ name: 'signup' }">Signup</router-link>
      </li>

      <li v-if="isLoggedIn">
        <router-link :to="{ name: 'profile', params: { username } }">
          <!-- {{ currentUser.username }}의 프로필 -->
          My Page
        </router-link>
      </li>
      <li v-if="isLoggedIn">
        <router-link :to="{ name: 'logout' }">Logout</router-link>

      </li>
    </ul>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'NavBar',
    computed: {
      ...mapGetters(['currentUser', 'isLoggedIn']),
      username() {
        return this.currentUser.username ? this.currentUser.username : 'guest'
      },
    }
  }
</script>

<style>

</style>