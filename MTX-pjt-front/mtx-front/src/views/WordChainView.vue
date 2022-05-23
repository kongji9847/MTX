<template>
  <div class="container">
    <div class="row">
      <div class="col-1">
        <button @click="prevMovie">Back</button>
      </div>
      <div class="col-3">
        <h1>{{ movie.title }}</h1>
        <div class="redBox mb-2"></div>
        <p>평점: {{ movie.vote_average }}</p>
      </div>
      <div class="col-3">
        <img :src="movie.poster_path" alt="movie.title" height="300px" @click="goDetail">
      </div>
      <div class="col-4">
        <p>개봉일 {{ movie.release_date}}</p>
        <p>평점: {{ movie.vote_average }}</p>
        <p>장르: 
          <span v-for="(genre, idx) in movie.genre_ids" :key="idx">{{genre.name}} </span>
        </p>
        <div>
          줄거리
          <p>{{ movie.overview }}</p>
        </div>
      </div>
      <div class="col-1">
        <button @click="nextMovie(info)">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'WordChainView',
    computed: {
      ...mapGetters(['isAuthor', 'movie']),
      info: function () {
        return {"start_word": this.movie.last_word, "now_id": this.movie.id}
      }
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
      } else {
        this.$store.dispatch('setUrl', 'chain')
      }
    }
  }
</script>

<style>
.redBox {
  background-color: darkred;
  width: 8rem;
  height: 0.8rem;
}
</style>