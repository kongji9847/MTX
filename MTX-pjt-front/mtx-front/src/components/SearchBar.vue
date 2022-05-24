<template>
  <div class="search-bar">
    <div class="searchContent">
      <input v-model="word" @keyup.enter="inputSearch(last_word)" type="text" placeholder=" Search">
      <button @click="inputSearch(last_word)" class="mx-3">start</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'SearchBar',
    data() {
      return {
        word: '',
      }
    },
    computed: {
      last_word: function() {
        return this.word.slice(-1)
      }
    },
    methods: {
      ...mapActions(['inputSearch']),
    }
  }
</script>

<style scoped>
  .search-bar {
    background-color: rgba(3, 26, 42, 0.6);
    position: relative;
    height: 250px;
  }

  .searchContent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
  }

  button {
    width: 15%;
    padding: 0.6rem;
    border: none;
    border-radius: 10%;
    background-color: #F8D488;
    color: black;
    font-size: 2rem;
    font-weight: bold;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  input {
    border: none;
    margin: 0px;
    padding: 0.5rem;
    width: 80%;
    font-size: 2rem;
    font-weight: 500;
    font-family: 'Quicksand', sans-serif;
  }
</style>