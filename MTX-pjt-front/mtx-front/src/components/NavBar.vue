<template>
  <nav class="navContainer row d-flex">
    <div class="col-xl-6 col-md-9 d-flex">
      <h5 class="items col-2">
        <router-link :to="{ name: 'main' }">Home</router-link>
      </h5>
      <h5 class="items col-3">
        <router-link :to="{ name: 'wordChainStart' }">Movie Train</router-link>
      </h5>
      <h5 class="items col-3">
        <router-link :to="{ name: 'reviews' }">Community</router-link>
      </h5>
      <h5 v-if="isLoggedIn" class="items col-4">
        <router-link :to="{ name: 'profile', params: { username } }">My Page</router-link>
      </h5>
    </div>
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
.navContainer {
    background-color: rgba(3, 26, 42, 0.6);
    /* display: flex; */
    position: sticky;
    top: 65px;
    /* flex-direction: row; */
    padding: 15px 10%;
    margin: 0px;
    white-space: nowrap;
    overflow: hidden;
    z-index: 5;
  }

.items {
  text-align: left;
}
</style>