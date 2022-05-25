<template>
  <div>
    <div class="results">
      <p class="movie-choice" v-for="(result, idx) in searchResults" :key="idx" 
      @click="goDetail(result.id)">
        {{result.title}}
      </p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'GeneralSearchResults',
  // data () {
  //   return {
  //     idxMovie: -1,
  //   }
  // },
  computed: {
    ...mapGetters(['searchResults']),
    // movieIdx: function () {
    //   if (this.newSearch === false) {
    //     console.log(this.newSearch)
    //     return -1
    //   } else {
    //     console.log(this.newSearch)
    //     return this.idxMovie
    //   }
    // }
  },
  methods: {
    goDetail: function(idx) {
      this.$router.push({
          name: 'movie',
          params: { movieId: idx},
        })
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