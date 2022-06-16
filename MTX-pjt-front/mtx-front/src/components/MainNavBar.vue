<template>
  <nav class="navContainer">
    <h2 class="items">
      <router-link :to="{name: 'home'}" class="MTX">MTX</router-link>
    </h2>
    <div class="accounts-menu">
      <div class="items accounts-items">
        <h5 v-if="!isLoggedIn" >
        <router-link :to=" { name: 'login' }" >Login </router-link>
        </h5>
        <h5 v-if="isLoggedIn">
          <router-link :to="{ name: 'logout' }">Logout</router-link>
        </h5>
        <h5 v-if="!isLoggedIn" >
          <router-link :to=" { name: 'signup' }" >Signup </router-link>
        </h5>
      </div>
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
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');


  .navContainer {
    width: 100%;
    background-color: #031A2A;
    color: white;
    display: flex;
    position: sticky;
    top: 0px;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10% 10px 10%;
    z-index: 6;
  }

  .MTX {
    font-family: 'Masque', sans-serif;
  }

  h5 {
    padding: 0 10px;
    display: inline-block;
    font-family: 'Open Sans', sans-serif;
    text-decoration-line: none;
  }

</style>