<template>
  <div>
    <h1>Movie List</h1>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <!-- <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div> -->
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(movie, idx) in movies" :key="idx" :class="{ active: idx==0 }">
          <img :src="'https://image.tmdb.org/t/p/w500/'+`${movie.poster_path}`" height=300px width=auto class="d-inline" alt="...">
          <img :src="'https://image.tmdb.org/t/p/w500/'+`${movie.poster_path}`" height=300px width=auto class="d-inline" alt="...">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  props: {
    movies: Array
  },
  computed: {
    // posterUrl: function () {
    //   "https://image.tmdb.org/t/p/w500/"+
    // }
  },
  methods: {
    // ...mapActions('topRatedMoviesAPI')
  },
  created() {
  }
}
</script>

<style scoped>
#carouselExampleIndicators {
  width: 500px;
}

.carousel-inner{
  text-align: center;
  width:auto;
  height:300px; /* 이미지 높이 변경 */
}
.carousel-item{
  width: auto;
  height:100%;
}
/* .d-block {
  display:block;
  width: auto;
  height: 100%;
} */
</style>