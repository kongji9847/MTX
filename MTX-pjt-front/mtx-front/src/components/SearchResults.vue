<template>
  <div>
    <div>
      <p class="movie-choice" v-for="(result, idx) in searchResults" :key="idx" @click="[movieChoice(result.id), showMoviePk()]">
        {{result.title}}
      </p>
    </div>
    <div class="moviePk" v-show="moviePk"></div>
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
    ...mapActions(['movieChoice']),
    showMoviePk: function() {
      const selectDiv = document.querySelector('.moviePk')
      selectDiv.innerText = this.moviePk
    }
  }
}
</script>

<style>
  .movie-choice:hover{
    color: orange;
    cursor: pointer;
  }

  /* .movie-choice:visited {
    color:orange;
  } */

</style>