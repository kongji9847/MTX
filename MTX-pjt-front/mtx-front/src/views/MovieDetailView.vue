<template>
  <div>
    <h1>{{ movieDetail.title }}</h1>

    <img :src="movieDetail.poster_path" alt="movie.title" height="300px">
    <p>줄거리: {{ movieDetail.overview }}</p>
    <p>개봉 일자: {{ movieDetail.release_date}}</p>
    <p>평점: {{ movieDetail.vote_average }}</p>
    <p>장르: 
      <span v-for="(genre, idx) in movieDetail.genre_ids" :key="idx">
        {{genre.name}} </span>
    </p>
    <hr>
    <form @submit.prevent="movieRate(score)">
      <input v-model="score" type="number" min="0" max="10">
      <button>평점 입력</button>
    </form>
    <hr>
    <h2>리뷰</h2>
    <div v-for="(review, idx) in movieDetail.review_set" :key="idx">
      <h3>제목: {{review.title}}</h3>
      <p>내용: {{review.content}}</p>
      <p>작성일: {{review.created_at}}, 수정일: {{review.updated_at}}</p>
      <hr>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'MovieDetailView',
    data() {
      return {
        movieId: this.$route.params.movieId,
        score: 10,
      }
    },
    computed: {
      ...mapGetters(['isAuthor', 'movieDetail']),
    },
    methods: {
      ...mapActions(['fetchMovie', 'nextMovie', 'prevMovie', 'movieRate',]),
    },
    created() {
      this.$store.dispatch('movieDetail', this.movieId)
    }
  }
</script>

<style>

</style>