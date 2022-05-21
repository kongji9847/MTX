<template>
  <div>
    <h1>{{ movie.title }}</h1>

    <!-- <img src="movie.poster_path" alt="movie.title"> -->
    <p>줄거리: {{ movie.overview }}</p>
    <p>개봉 일자: {{ movie.release_date}}</p>
    <p>평점: {{ movie.vote_average }}</p>
    <p>장르: {{ movie.genre_ids }}</p>
    <button @click="prevMovie">Back</button>
    <button @click="nextMovie(movie.last_word)">Next</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'MovieDetailView',
    data() {
      return {
        moviePk: this.$route.params.moviePk,
      }
    },
    computed: {
      ...mapGetters(['isAuthor', 'movie']),
    },
    methods: {
      ...mapActions(['fetchMovie', 'nextMovie', 'prevMovie']),
    },
  }
</script>

<style>

</style>