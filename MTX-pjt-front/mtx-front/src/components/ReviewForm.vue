<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="title">title: </label>
      <input v-model="newReview.title" type="text" id="title" />
    </div>
    <div>
      <label for="content">content: </label>
      <input v-model="newReview.content" type="text" id="content">
    </div>
    <div>
      <!-- <label for="movie">content: </label> -->
      <!-- <select name="movie" id="movie">
        <option v-for="movie in movies" value="{{ movie.title }}" :key="movie.pk"></option>
      </select> -->
    </div>
    <div>
      <button>{{ action }}</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'ReviewForm',
    props: {
      review: Object,
      action: String
    },
    data() {
      return {
        newReview: {
          title: this.review.title,
          content: this.review.content,
        }
      }
    },
    methods: {
      ...mapActions(['createReview']),
      onSubmit() {
        if (this.action === 'create') {
          this.createReview(this.newReview)
        }
      }
    },
  }
</script>

<style>

</style>