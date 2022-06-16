<template>
  <div class="ReviewList">
    <h1 class="h3 mb-3 text-gray-800 community-title">Community</h1>
    <review-paginated-list :reviews="reviews"></review-paginated-list>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ReviewPaginatedList from '@/components/ReviewPaginatedList.vue'

  export default {
    name: 'ReviewList',
    components: { ReviewPaginatedList },
    computed: {
      ...mapGetters(['reviews']),
      },
    methods: {
      ...mapActions(['fetchReviews']),
    },
    created() {
      this.$store.dispatch('setUrl', 'chain')
      this.fetchReviews()
      this.$store.dispatch('movieChoice', {moviePk:null, movieTitle:''})
      this.$store.dispatch('setMOVIECHOICEDTOREVIEW', false)
    },
  }
</script>

<style scoped>

.community-title {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
  }

</style>