<template>
  <div id="app">
    <main-nav-bar></main-nav-bar>
    <nav-bar></nav-bar>
    <div class="component mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

import { mapActions } from 'vuex'
import MainNavBar from './components/MainNavBar.vue'

  export default {
    name: 'App',
    components: { MainNavBar, NavBar },
    methods: {
      ...mapActions(['fetchCurrentUser'])
    },
    created() {
      this.fetchCurrentUser()
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200&family=Permanent+Marker&display=swap');

html {
  background-color: #031A2A;
  color: white;
}

#app {
  background-color: #031A2A;
  color: white;
}

.component {
  width: 80%;
  margin: 10px auto;
}

nav {
  text-align: center;
  padding: 10px 0px;
}

nav a {
  color: white;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: bold;
  text-align: center;
  text-decoration-line: none;
}

nav a.router-link-exact-active {
  text-decoration-line: none;
  color: #42b983;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: bold;
  text-align: center;
  text-decoration-line: none;
}
</style>
