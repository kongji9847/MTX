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
      const movie_pick = this.searchResults.find((movie) => {
        return movie.id === this.moviePk
      })
      selectDiv.innerText = movie_pick.title
    },
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

  .orange{
    background-color: orange;
  }

</style>