<template>
  <div>
    <h1>Review List</h1>
    <router-link :to="{ name: 'reviewNew' }">
      <button>Create</button>
    </router-link>
    <ul>
      <li v-for="review in reviews" :key="review.id">
        <router-link :to="{ name: 'profile', params: {username: review.user } }">
          {{ review.user }}
        </router-link>
        <br>
        <router-link :to="{ name: 'review', params: {reviewPk: review.id } }">
          {{ review.title }}
        </router-link>

        <p>
          댓글 수: {{ review.comment_count }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'ReviewList',
    computed: {
      ...mapGetters(['reviews'])
    },
    methods: {
      ...mapActions(['fetchReviews'])
    },
    created() {
      this.fetchReviews()
    },
  }
</script>

<style>

</style>