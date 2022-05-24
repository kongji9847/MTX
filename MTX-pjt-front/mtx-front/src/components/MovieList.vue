<template>
  <div>
    <carousel :autoplay="true" :nav="false" :dots="false" :items="5" :margin="30" :autoplayTimeout="3000">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[0]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(0)">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[1]}`" height=350px width=auto class="mx-4">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[2]}`" height=350px width=auto class="mx-4">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[4]}`" height=350px width=auto class="mx-4">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[3]}`" height=350px width=auto class="mx-4">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[5]}`" height=350px width=auto class="mx-4">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[6]}`" height=350px width=auto class="mx-4">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[7]}`" height=350px width=auto class="mx-4">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[8]}`" height=350px width=auto class="mx-4">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[9]}`" height=350px width=auto class="mx-4">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[10]}`" height=350px width=auto class="mx-4">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[11]}`" height=350px width=auto class="mx-4">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[12]}`" height=350px width=auto class="mx-4">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[13]}`" height=350px width=auto class="mx-4">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[14]}`" height=350px width=auto class="mx-4">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[15]}`" height=350px width=auto class="mx-4">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[16]}`" height=350px width=auto class="mx-4">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[17]}`" height=350px width=auto class="mx-4">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[18]}`" height=350px width=auto class="mx-4">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[19]}`" height=350px width=auto class="mx-4">
    </carousel>
    
  </div>
  <!-- <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item" v-for="(movie, idx) in movies" :key="idx" :class="{ active: idx==0 }">
        <img :src="'https://image.tmdb.org/t/p/w500/'+`${movie.poster_path}`" height=300px width=auto class="mx-4" alt="...">
        <img :src="'https://image.tmdb.org/t/p/w500/'+`${movie.poster_path}`" height=300px width=auto class="mx-4" alt="...">
        <img :src="'https://image.tmdb.org/t/p/w500/'+`${movie.poster_path}`" height=300px width=auto class="mx-4" alt="...">
        <img :src="'https://image.tmdb.org/t/p/w500/'+`${movie.poster_path}`" height=300px width=auto class="mx-4" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div> -->
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  name: 'MovieList',
  props: {
    movies: Array
  },
  data() {
    return {
      nowMovie: {},
    }
  },
  components: {
    carousel
  },
  computed: {
    poster_paths: function () {
      return this.movies.map((movie) => movie.poster_path)
    },
  },
  methods: {
    // ...mapActions('topRatedMoviesAPI')
    nowMovieListener: function(idx) {
      // console.log(idx)
      this.nowMovie = this.movies[idx]
    }
  },
}
</script>

<style scoped>
/* #carouselExampleIndicators {
  text-align:center;
  width: auto;
}

.carousel-inner{
  display: flex;
  flex-direction: row;
  /* flex-wrap: nowrap; */
  /* justify-content: center; */
  /* justify-content: space-evenly; */
  /* text-align: center; */
  /* width:auto; */
  /* height:300px; 이미지 높이 변경 */
/* } */
/* .carousel-item{
  transition: transform 1s ease;
  position: relative;
  left: -50%;
  width: auto;
  height:100%;
} */

img:hover {
  cursor: pointer;
  position: relative;
  left: 10%;
  margin-top: 25px;
  width: auto;
  height: 300px;
}
</style>