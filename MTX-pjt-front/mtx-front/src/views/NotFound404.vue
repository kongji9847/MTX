<template>
  <div class="err-body">
    <div class="container">
      <div class="planet-content">
        <div class="clouds"></div>
        <div class="planet"></div>
        <div class="earth-moon"></div>
        <div class="up"></div>
      </div>
    </div>
    <div class="err-word">
      <h1 class="err-code">404</h1>
      <p class="my-4 sub-message">길을 잃은 것 같습니다..</p>
      <button class="btn back-btn" @click="goToWordChain">돌아가기</button>
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
    this.$store.dispatch('setUrl', 'home')
    }
  }
</script>

<style src="@/statics/earth.css" scoped>
  /* @import "@/statics/earth.css"; */

  /* .back-btn {
    background-color: #F8A111;
    color: white;
    margin: 0.5rem;
    font-family: 'NanumSquareAcb';
  }

  .err-word {
    text-align: center;
    margin: 10px auto;
    margin-top: 30px;
    padding-top: 10px;
  }

  .err-code {
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    font-size: 8rem;
    margin: 2rem 0 0.5rem;
  }

  .sub-message {
    font-family: 'NanumSquareAcr';
    font-size: 1.2rem;
  }

  body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background-color: #072137;
  } */

</style>