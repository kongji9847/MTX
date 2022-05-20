<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'signup' }">Signup</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'NavBar',
    computed: {
      ...mapGetters(['currentUser']),
      username() {
        return this.currentUser.username ? this.currentUser.username : 'guest'
      },
    }
  }
</script>

<style>

</style>