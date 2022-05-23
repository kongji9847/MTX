<template>
  <div>
    <h1>제목: {{ review.title }}</h1>
    <p>영화: {{ review.movie }}</p>
    <p>
      작성자: 
        {{ review.user.username }}</p>
      <!-- <router-link :to="{ name: 'profile', params: {username: review.user.username } }">
        {{ review.user.username }}
      </router-link> -->
    <p>내용: {{ review.content }}</p>
    <!-- Edit/Delete -->
    <div v-if="isAuthor">
      <router-link :to="{ name: 'reviewEdit', params: { reviewPk } }">
        <button>Edit</button>
      </router-link>
      <button @click="deleteReview(reviewPk)">Delete</button>
    </div>
    <hr>
    <comment-list :comments="review.comment_set"></comment-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CommentList from '@/components/CommentList.vue'

  export default {
    name: 'ReviewDetail',
    components: { CommentList },
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
      ]),
    },
    created() {
      this.fetchReview(this.reviewPk)
    },
  }
</script>

<style>

</style>