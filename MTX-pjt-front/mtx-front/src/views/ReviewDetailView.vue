<template>
  <div>
    <span class="review-title">{{ review.title }}</span>
    <span class="review-movie">{{ review.movie_title }}</span>
    <p class="review-author">
      <span class="material-symbols-outlined">account_circle</span>&nbsp;
      <router-link :to="{ name: 'profile', params: { username: review.username } }" v-if="review.username">
        {{ review.username }}
      </router-link>
    <hr>
    <p class="review-content">{{ review.content }}</p>
    <!-- Edit/Delete -->
    <div v-if="isAuthor" class="author-btn">
      <router-link :to="{ name: 'reviewEdit', params: { reviewPk } }">
        <button class="mx-3 btn edit-btn btn-outline-secondary">Edit</button>
      </router-link>
      <button @click="deleteReview(reviewPk)" class="btn delete-btn btn-outline-dark">Delete</button>
    </div>
    <hr>
    <comment-list :comments="review.comment_set"></comment-list>
    <router-link :to="{ name: 'reviews' }">
      <button class="btn my-3 btn-outline-secondary">목록으로</button>
    </router-link>
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
      this.$store.dispatch('setUrl', 'chain')
      this.fetchReview(this.reviewPk)
    },
    updated() {
      // this.fetchReview(this.reviewPk)
    }
  }
</script>

<style scoped>

  .review-title {
    font-family: 'NanumSquareAcb';
    font-size: 3rem;
    margin: 1rem 1rem 0 0;
  }

  .review-movie {
    font-family: 'NanumSquareAcr';
    color: #F8A111;
  }

  .review-author {
    display: flex;
  }

  .review-author a {
    font-family: 'Open Sans', sans-serif;
    color: black;
    text-decoration-line: none;
  }

  .review-author a:hover {
    font-family: 'NanumSquareAcb';
  }

  .author-btn {
    display: flex;
    justify-content: flex-end;
  }

</style>