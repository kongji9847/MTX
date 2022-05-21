<template>
  <div>
    <h1>{{ movie.title }}</h1>
    <img :src="movie.poster_path" alt="movie.title" height="300px" @click="goDetail">
    <p>줄거리: {{ movie.overview }}</p>
    <p>개봉 일자: {{ movie.release_date}}</p>
    <p>평점: {{ movie.vote_average }}</p>
    <p>장르: 
      <span v-for="(genre, idx) in movie.genre_ids" :key="idx">{{genre.name}} </span>
    </p>
    <button @click="prevMovie">Back</button>
    <button @click="nextMovie(movie.last_word)">Next</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'MovieDetailView',
    computed: {
      ...mapGetters(['isAuthor', 'movie']),
    },
    methods: {
      ...mapActions(['fetchMovie', 'nextMovie', 'prevMovie']),
      goDetail : function () {
        this.$router.push({
          name: 'movie',
          params: { movieId: this.movie.id},
        })
      }
    },
  }
</script>

<style>

</style>