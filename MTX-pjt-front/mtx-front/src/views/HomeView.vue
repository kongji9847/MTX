<template>
  <div class="home">
    <div class="trainAnimation">
      <div class="content">
        <div class="buildings"></div>
        <div class="windows"></div>
        <div class="bridge"></div>
        <div class="train">
          <div class="carOne"></div>
          <div class="carTwo"></div>
          <div class="carThree"></div>
        </div>
        <div class="moon"></div>
        <div class="stars"></div>
      </div>
    </div>
    <div class="home-body">
      <h1>Movie Train Express</h1>
      <p class="my-4 subtitle">영화 제목으로 떠나는 기차 여행</p>
      <button class="btn" @click="goToWordChain">출발하기</button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'HomeView',
  computed: {
    ...mapGetters(['homeUrl'])
  },
  methods: {
    goToWordChain: function() {
      this.$router.push({
        name: 'wordChainStart'
      })
    },
  },
  created() {
    this.$store.dispatch('setUrl', 'home')
  }
}
</script>

<style scoped>
  @import "@/statics/home.css";

  .home{
    text-align: center;
    margin: 10px auto;
  }

  .home-body {
    margin-top: 30px;
    padding-top: 10px;
  }

  h1 {
    /* font-family: 'Permanent Marker', cursive; */
    font-family: 'Masque', sans-serif;
    margin: 1rem auto;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .btn {
    background-color: #F8A111;
    color: white;
    font-weight: bold;
    margin: 1rem;
  }


  body {
    display: flex;
    justify-content:center;
    align-items: center;
    height: 100vh;
  }


</style>