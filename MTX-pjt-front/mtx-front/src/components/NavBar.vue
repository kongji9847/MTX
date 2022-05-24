<template>
  <nav class="navContainer">
    <h5 class="items" style="width: 13%">
      <router-link :to="{ name: 'wordChainStart' }">Movie Train  </router-link>
    </h5>
    <h5 class="items" style="width: 13%">
      <router-link :to="{ name: 'reviews' }">Community   </router-link>
    </h5>
    <h5 v-if="isLoggedIn" class="items" style="width: 13%">
      <router-link :to="{ name: 'profile', params: { username } }">My Page</router-link>
    </h5>
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
    display: flex;
    position: sticky;
    top: 60px;
    flex-direction: row;
    padding: 15px 10%;
    margin: 0px;
    white-space: nowrap;
    overflow: hidden;
  }

.items {
  text-align: left;
}
</style>