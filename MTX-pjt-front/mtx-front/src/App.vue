<template>
  <div id="app" :class="{ homeView: homeUrl===0 , movieChainStart: chainStartUrl===1, movieChain: chainUrl===1}">
    <main-nav-bar></main-nav-bar>
    <nav-bar v-show="homeUrl"></nav-bar>
    <div class="componentView mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

import { mapActions, mapGetters } from 'vuex'
import MainNavBar from './components/MainNavBar.vue'

  export default {
    name: 'App',
    components: { MainNavBar, NavBar },
    computed: {
      ...mapGetters(['homeUrl', 'chainStartUrl', 'chainUrl']),
    },
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
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');


#app {
  width: 100%;
  height: 100%;
}

.componentView {
  width: 80%;
  margin: 10px auto;
}

nav {
  text-align: center;
}

nav a {
  color: white;
  /* font-family: 'Barlow Condensed', sans-serif; */
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-align: center;
  text-decoration-line: none;
}

nav a.router-link-exact-active {
  color: #F8D488;
  /* font-family: 'Barlow Condensed', sans-serif; */
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-align: center;
  text-decoration-line: none;
}


.homeView {
    background-color: #031A2A;
    color: white;
    background-size: cover;
  }

.movieChainStart {
  background-image: url('@/assets/blur_img.png');
  background-size: cover;
  background-size: no-repeat;
  background-position: center;
}

.movieChian {
  background-color: #EFEFEF;
}


</style>
