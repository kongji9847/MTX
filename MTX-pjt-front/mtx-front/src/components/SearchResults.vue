<template>
  <div>
    <div class="results">
      <p class="movie-choice" v-for="(result, idx) in searchResults" :key="idx" 
      @click="[movieChoice(result.id), colorChange(idx)]"
      :style="[movieIdx === idx ? {color: 'orange'} : {cursor: 'pointer'}]">
        {{result.title}}
      </p>
    </div>
    <!-- <div class="moviePk" v-show="moviePk"></div> -->
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'SearchResults',
  data () {
    return {
      idxMovie: -1,
    }
  },
  computed: {
    ...mapGetters(['searchResults', 'moviePk', 'newSearch']),
    movieIdx: function () {
      if (this.newSearch === false) {
        console.log(this.newSearch)
        return -1
      } else {
        console.log(this.newSearch)
        return this.idxMovie
      }
    },
  },
  methods: {
    ...mapActions(['movieChoice']),
    // showMoviePk: function() {
    //   const selectDiv = document.querySelector('.moviePk')
    //   const movie_pick = this.searchResults.find((movie) => {
    //     return movie.id === this.moviePk
    //   })
    //   selectDiv.innerText = movie_pick.title
    // },
    colorChange: function(idx) {
      this.$store.dispatch('newSearch', true)
      this.idxMovie = idx
    }

  }
}
</script>

<style scoped>
  .movie-choice:hover {
    color: orange;
    cursor: pointer;
  }

  /* .movie-choice:visited {
    color:orange;
  } */

  .orange{
    background-color: orange;
  }

  .results {
    height: 25vh;
    overflow-y: scroll;
    /* font-size: 1vw; */
  }

  ::-webkit-scrollbar {
  display: none;
  }

</style>