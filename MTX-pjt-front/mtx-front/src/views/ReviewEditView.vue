<template>
  <div>
    <h1>Edit Review</h1>
    <!-- <general-search-bar></general-search-bar>
    <search-results v-if="searchResults" class="my-5"></search-results> -->
    <h3>{{review.movie_title}}</h3>
    <review-form v-if="isReview" :review="review" action="update"></review-form>
  </div>
</template>

<script>
import ReviewForm from '@/components/ReviewForm.vue'
// import GeneralSearchBar from '@/components/GeneralSearchBar.vue'
// import SearchResults from '@/components/SearchResults.vue'

import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'ReviewEdit',
    components: { ReviewForm },
    computed : {
      ...mapGetters(['review', 'isReview', 'searchResults',])
    },
    methods: {
      ...mapActions(['fetchReview'])
    },
    created() {
      this.fetchReview(this.$route.params.reviewPk)
    },
  }
</script>

<style>

</style>