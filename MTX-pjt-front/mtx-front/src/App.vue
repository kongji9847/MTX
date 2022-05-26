<template>
  <div id="app" 
  :class="{ homeView: homeUrl===1, 
  mainView : mainUrl === 1, movieChainStart: chainStartUrl===1, 
  movieChain: chainUrl===1, notFoundView: notFoundUrl===1}">
  
    <main-nav-bar></main-nav-bar>
    <nav-bar v-if="homeUrl===0"></nav-bar>
    <div class="componentView mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

import { mapActions, mapGetters, mapState } from 'vuex'
import MainNavBar from './components/MainNavBar.vue'

  export default {
    name: 'App',
    components: { MainNavBar, NavBar },
    computed: {
      ...mapState(['nowUrl']),
      ...mapGetters(['homeUrl', 'chainStartUrl', 'chainUrl', 'mainUrl', 'notFoundUrl']),
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
/* @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&family=Open+Sans:wght@300;400&display=swap');
/* @import url('https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css'); */

#app {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
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
  font-family: 'SUIT';
  font-weight: 300;
  text-align: center;
  text-decoration-line: none;
}

nav a:hover {
  color: white;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #F8D488;
  /* font-family: 'Barlow Condensed', sans-serif; */
  font-family: 'SUIT';
  font-weight: 400;
  text-align: center;
  text-decoration-line: none;
}


.homeView {
    background-color: #031A2A;
    color: white;
    background-size: cover;
    background-attachment: fixed;
  }

  .notFoundView {
    background-color: #031A2A;
    color: white;
    background-size: cover;
    background-attachment: fixed;
  }

.mainView {
  background-color: black;
  color: white;
  background-size: cover;
  background-attachment: fixed;
  /* background-color: #EFEFEF;
  background-size: cover;
  background-attachment: fixed; */
}

.movieChainStart {
  background-image: url('@/assets/blur_img.png');
  background-size: cover;
  background-size: no-repeat;
  background-position: center;
  background-attachment: fixed;
}

.movieChain {
  background-color: #EFEFEF;
  background-size: cover;
  background-attachment: fixed;
}

body {
  font-family: 'SUIT';
}

</style>
