<template>
  <div class="search-bar">
    <input v-model="word" @keyup.enter="inputSearch(last_word)" type="text" placeholder="Search">
    <button @click="inputSearch(last_word)" class="mx-3">출발</button>
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
  button {
    padding: 0.6rem;
    border: none;
    border-radius: 10%;
    background-color: darkorange;
    color: white;
    font-weight: bold;
    font-size: 2rem;
  }

  input {
    border: none;
    padding: 0.5rem;
    width: 80%;
    font-size: 2rem;
  }
</style>