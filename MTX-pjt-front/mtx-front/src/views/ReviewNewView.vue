<template>
  <div>
    <h1>New Review</h1>
    <general-search-bar></general-search-bar>
    <search-results v-if="searchResults" class="my-5"></search-results>
    <review-form :review="review" action="create"></review-form>
  </div>
</template>

<script>
import ReviewForm from '@/components/ReviewForm.vue'
import GeneralSearchBar from '@/components/GeneralSearchBar.vue'
import SearchResults from '@/components/SearchResults.vue'

import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'ReviewNewView',
    components: { ReviewForm, GeneralSearchBar, SearchResults },
    data() {
      return {
        review: {
          pk: null,
          title: '',
          content: '',
        }
      }
    },
    computed: {
      ...mapGetters(['searchResults'])
    },
    methods: {
      ...mapActions(['removeSearchHistory'])
    },
    created() {
      this.$store.dispatch('removeSearchHistory')
    }
  }
</script>

<style>

</style>