<template>
  <div class="search-bar">
    <input v-model="word" @keyup.enter="onSubmit" type="text" placeholder="Search">
    <button @click="onSubmit" class="btn">출발</button>
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
      onSubmit() {
        this.inputSearch(this.word)
      }
    }
  }
</script>

<style>

</style>