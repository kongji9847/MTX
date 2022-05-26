<template>
  <div class="ReviewList">
    <h1 class="h3 mb-3 text-gray-800 community-title">Community</h1>
    <review-paginated-list :reviews="reviews"></review-paginated-list>
    <!-- <h1>Review List</h1>
    <router-link :to="{ name: 'reviewNew' }">
      <button>Create</button>
    </router-link>
    <ul>
      <li v-for="review in reviews" :key="review.id">
        <router-link :to="{ name: 'profile', params: {username: review.user.username } }">
          {{ review.user.username }}
        </router-link>
        <br>
        <router-link :to="{ name: 'review', params: {reviewPk: review.id } }">
          {{ review.title }}
        </router-link>

        <p>
          댓글 수: {{ review.comment_count }}
        </p>
      </li>
    </ul> -->
    <!-- ------------------------------------------------------ -->

    <!-- ------------------------------------------------------ -->
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