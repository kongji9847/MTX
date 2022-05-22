<template>
  <div>
    <h1>제목: {{ review.title }}</h1>
    <p>영화: {{ review.movie }}</p>
    <router-link :to="{ name: 'profile', params: { username: review.user } }">
      작성자: {{ review.user }}
    </router-link>
    <p>내용: {{ review.content }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'ReviewDetail',
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
      ])
    },
    created() {
      this.fetchReview(this.reviewPk)
    },
  }
</script>

<style>

</style>