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
    name: 'WordChainView',
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
    // word-chain url 상태에서 새로고침하면 출발 페이지로 넘어간다.
    created() {
      if (!Object.keys(this.movie).length) {
        this.$router.push({
          name: 'wordChainStart'
        })
      }
    }
  }
</script>

<style>

</style>