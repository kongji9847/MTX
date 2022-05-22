<template>
  <nav class="container">
    <h2 class="items MTX">MTX</h2>
    <div class="items">
      <h4 v-if="!isLoggedIn" >
      <router-link :to=" { name: 'login' }" >Login </router-link>
      </h4>
      <h4 v-if="isLoggedIn">
        <router-link :to="{ name: 'logout' }">Logout</router-link>
      </h4>
      <h4 v-if="!isLoggedIn" >
        <router-link :to=" { name: 'signup' }" >Signup </router-link>
      </h4>
    </div>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'MainNavBar',
  computed: {
    ...mapGetters(['isLoggedIn'])
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200&family=Permanent+Marker&display=swap');
  @import url('http://fonts.cdnfonts.com/css/masque');

  .container {
    display: flex;
    position: sticky;
    top: 20px;
    justify-content: space-between;
    padding-bottom: 20px;
  }

  .MTX {
    /* font-family: 'Permanent Marker', cursive; */
    font-family: 'Masque', sans-serif;
  }

  h4 {
    padding: 0 10px;
    display: inline-block;
    font-family: 'Barlow Condensed', sans-serif;
    text-decoration-line: none;
  }

</style>