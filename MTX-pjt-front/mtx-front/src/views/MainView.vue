<template>
  <div>
    <h1>home</h1>
    <general-search-bar></general-search-bar>
    <search-results v-if="searchResults" class="my-5"></search-results>
  </div>
</template>

<script>
import GeneralSearchBar from '@/components/GeneralSearchBar.vue'
import SearchResults from '@/components/SearchResults.vue'

export default {
  name: 'MainView',
  components: {GeneralSearchBar, SearchResults},
  created() {
    console.log('main')
    this.$store.dispatch('setUrl', 'main')
  }
}
</script>

<style>

</style>