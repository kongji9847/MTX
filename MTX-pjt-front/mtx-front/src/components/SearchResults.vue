<template>
  <div>
    <div>
      <p class="movie-choice" v-for="(result, idx) in searchResults" :key="idx" @click="movieChoice(result.id)">
        {{result.title}}
      </p>
    </div>
    <div v-if="moviePk">moviePk: {{moviePk}}</div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'SearchResults',
  computed: {
    ...mapGetters(['searchResults', 'moviePk'])
  },
  methods: {
    ...mapActions(['movieChoice'])
  }
}
</script>

<style>
  .movie-choice:hover{
    color: orange;
    cursor: pointer;
  }

  .movie-choice:active{
    color: orange;
  }

</style>