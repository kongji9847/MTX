<template>
  <div>
    <carousel :autoplay="true" :nav="false" :dots="false" :items="6" :margin="30" :autoplayTimeout="3000">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[0]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(0)" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[1]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(1)" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[2]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(2)" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[3]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(3)" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[4]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(4)" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[5]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(5)" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[6]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(6)" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[7]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(7)" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[8]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(8)" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[9]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(9)" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[10]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(10)" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[11]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(11)" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[12]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(12)" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[13]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(13)" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[14]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(14)" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[15]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(15)" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[16]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(16)" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[17]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(17)" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[18]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(18)" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img :src="'https://image.tmdb.org/t/p/w500/'+`${poster_paths[19]}`" height=350px width=auto class="mx-4" @click="nowMovieListener(19)" data-bs-toggle="modal" data-bs-target="#exampleModal">
    </carousel>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{modalMovie.title}}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>평점: {{modalMovie.vote_average}}</p>
            <p>{{modalMovie.overview}}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import {mapGetters} from 'vuex'

export default {
  name: 'MovieList',
  props: {
    movies: Array
  },
  components: {
    carousel,
  },
  computed: {
    poster_paths: function () {
      return this.movies.map((movie) => movie.poster_path)
    },
    nowMovieTitle: function () {
      return this.nowMovie.title
    },
    ...mapGetters(['modalMovie'])
  },
  methods: {
    // ...mapActions('topRatedMoviesAPI')
    nowMovieListener: function(idx) {
      this.$store.dispatch('nowModalMovie', this.movies[idx])
    }
  },
}
</script>

<style scoped>

img:hover {
  cursor: pointer;
  position: relative;
  left: 10%;
  margin-top: 25px;
  width: auto;
  height: 300px;
}

/* img{
  box-shadow: 0.5px 0.5px 1px 0px gray
} */


.modal-title {
  color: black;
  font-weight: bold;
}

.modal-body {
  color: black;
}
</style>