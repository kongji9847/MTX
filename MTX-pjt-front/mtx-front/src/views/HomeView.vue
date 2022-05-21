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
      <h2>Movie Train Express</h2>
      <p class="my-4">영화 제목으로 떠나는 기차 여행</p>
      <button class="btn" @click="goToWordChain">출발하기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    goToWordChain: function() {
      this.$router.push({
        name: 'wordChainStart'
      })
    }
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

  h2 {
    font-family: 'Permanent Marker', cursive;
  }

  .btn {
    background-color: darkorange;
    color: white;
    font-weight: bold;
  }


  body {
    display: flex;
    justify-content:center;
    align-items: center;
    height: 100vh;
  }
</style>