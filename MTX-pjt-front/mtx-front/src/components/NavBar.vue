<template>
  <nav class="container">
    <h4 class="items">
      <router-link :to="{ name: 'wordChainStart' }">Home  </router-link>
    </h4>
    <h4 class="items">
      <router-link :to="{ name: 'reviews' }">Review  </router-link>
    </h4>
    <h4 v-if="isLoggedIn" class="items">
      <router-link :to="{ name: 'profile', params: { username } }">My Page</router-link>
    </h4>
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

<style scoped>
.container {
    display: flex;
    position: sticky;
    top: 70px;
    flex-direction: row;
  }

.items {
  width: 10%;
  text-align: left;
}
</style>