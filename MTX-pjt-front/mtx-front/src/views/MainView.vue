<template>
  <div>
    <h1>home</h1>
    <general-search-bar></general-search-bar>
    <search-results v-if="searchResults" class="my-5"></search-results>
    <movie-list :movies="topRatedMovies"></movie-list>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import GeneralSearchBar from '@/components/GeneralSearchBar.vue'
import SearchResults from '@/components/SearchResults.vue'
import MovieList from  '@/components/MovieList.vue'

export default {
  name: 'MainView',
  components: {GeneralSearchBar, SearchResults, MovieList},
  computed: {
      ...mapGetters(['searchResults', 'topRatedMovies'])
    },
  methods: {
      ...mapActions(['removeSearchHistory'])
    },
  created() {
      this.$store.dispatch('setUrl', 'main')
      this.$store.dispatch('removeSearchHistory')
      this.$store.dispatch('topRatedMoviesAPI')
    }
}
</script>

<style>

</style>