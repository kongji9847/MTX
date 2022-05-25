<template>
  <div>
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
    <div class="body-404 col">
      <h1>404</h1>
      <button class="btn" @click="goToWordChain">돌아가기</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NotFound404',
    methods: {
      goToWordChain: function() {
        this.$router.push({
          name: 'wordChainStart'
        })
      },
    },
    created() {
    this.$store.dispatch('setUrl', 'chain')
    }
  }
</script>

<style scoped>
  @import "@/statics/home.css";

  .btn {
    background-color: #F8A111;
    color: white;
    font-weight: bold;
    margin: 1rem;
  }


  .body-404 {
    display: flex;
    justify-content:center;
    align-items: center;
    /* height: 100vh; */
  }

</style>