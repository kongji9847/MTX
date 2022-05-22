<template>
  <div>
    <h1>제목: {{ review.title }}</h1>
    <p>영화: {{ review.movie }}</p>
    <p>
      작성자: 
      <router-link :to="{ name: 'profile', params: {username: review.user.username } }">
        {{ review.user.username }}
      </router-link>
    </p>
    <p>내용: {{ review.content }}</p>
    <!-- Edit/Delete -->
    <div v-if="isAuthor">
      <router-link :to="{ name: 'reviewEdit', params: { reviewPk } }">
        <button>Edit</button>
      </router-link>
      <button @click="deleteReview(reviewPk)">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import CommentList from '@/components/CommentList.vue'

  export default {
    name: 'ReviewDetail',
    // components: { CommentList },
    data() {
      return {
        reviewPk: this.$route.params.reviewPk,
      }
    },
    computed: {
      ...mapGetters(['isAuthor', 'review']),
    },
    methods: {
      ...mapActions([
        'fetchReview',
        'deleteReview',
      ])
    },
    created() {
      this.fetchReview(this.reviewPk)
    },
  }
</script>

<style>

</style>