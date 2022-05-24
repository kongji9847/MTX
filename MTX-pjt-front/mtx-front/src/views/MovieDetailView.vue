<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-3 title-position">
          <span class="movie-title">{{ movieDetail.title }}</span>
          <div class="redBox mb-2"></div>
          
          <div class="star-rating space-x-2">
            <input type="radio" id="5-stars" name="rating" value=5 v-model="ratings"/>
            <label for="5-stars" class="star pr-4">★</label>
            <input type="radio" id="4-stars" name="rating" value=4 v-model="ratings"/>
            <label for="4-stars" class="star">★</label>
            <input type="radio" id="3-stars" name="rating" value=3 v-model="ratings"/>
            <label for="3-stars" class="star">★</label>
            <input type="radio" id="2-stars" name="rating" value=2 v-model="ratings"/>
            <label for="2-stars" class="star">★</label>
            <input type="radio" id="1-star" name="rating" value=1 v-model="ratings" />
            <label for="1-star" class="star">★</label>
          </div>
          <button class="mt-3 btn ratebtn" @click="movieRate(total_score)">Submit</button>
        </div>
        <div class="col-4 poster">
          <img :src="movieDetail.poster_path" :alt="movieDetail.title" class="mt-4">
          <div class="whiteCircle"></div>
        </div>
        <div class="col-5">
          <div class="content-position" style="margin-top:6rem; margin-left:3rem;">
            <p><span class="titleFont">개봉일:</span> <span class="contextFont">{{ movieDetail.release_date}}</span></p>
            <p><span class="titleFont">평점:</span> <span class="contextFont">{{movieDetail.vote_average}}</span></p>
            <p><span class="titleFont">장르: </span> 
              <span v-for="(genre, idx) in movieDetail.genre_ids" :key="idx" class="contextFont">{{genre.name}} </span>
            </p>
            <div>
              <span class="titleFont">줄거리: </span>
              <div class="overviewBox">
                <p class="overview contextFont">{{ movieDetail.overview }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <h2>리뷰</h2>
        <div v-for="(review, idx) in movieDetail.review_set" :key="idx">
          <h3>제목: {{review.title}}</h3>
          <p>내용: {{review.content}}</p>
          <p>작성일: {{review.created_at}}, 수정일: {{review.updated_at}}</p>
          <hr>
        </div>
      </div>
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
        ratings: 3
      }
    },
    computed: {
      ...mapGetters(['isAuthor', 'movieDetail']),
      total_score: function() {
        return this.ratings * 2
      }
    },
    methods: {
      ...mapActions(['nextMovie', 'prevMovie', 'movieRate',]),
    },
    created() {
      this.$store.dispatch('movieDetail', this.movieId)
      this.$store.dispatch('setUrl', 'detail')
    }
  }
</script>

<style scoped>

.redBox {
  background-color: #9B2A2B;
  width: 9vw;
  height: 0.9vh;
}

.poster > .whiteCircle {
  background-color: white;
  width: 33vw;
  height: 10vh;
  border-radius: 80%;
  position: relative;
  top: -5vh;
  left: -5.5vw;
  z-index: 2;
}

.movie-title {
  white-space: normal;
  font-family: 'NanumSquareBold';
  word-break: keep-all;
  font-size: 2.5vw;
  /* font-weight: 700; */
}

.star-rating {
  font-size: 2.5vw;
  color: #878787;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  padding: 0 0.2em;
  width: max-content;
  position: relative;
  padding-left: 0px;
}
 
.star-rating input {
  display: none;
}
 
.star-rating label {
  cursor: pointer;
}
 
.star-rating :checked ~ label {
  -webkit-text-fill-color: #F7d489;
}
 
.star-rating label:hover,
.star-rating label:hover ~ label {
  -webkit-text-fill-color: gold;
}

.ratebtn {
  position: relative;
  left: 55%;
  font-size: 0.9vw;
  background-color: #9B2A2B;
  color: white;
  font-weight: bold;
  z-index: 3;
}


.poster > img {
  position: relative;
  width: 90%;
  z-index: 3;
}


.titleFont {
  font-size: 0.9vw;
  font-weight: bold;
}


.overviewBox .overview {
  width: 100%;
  height: 14vw;
  overflow-y: scroll;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
}


.overviewBox {
  position: relative;
  z-index: 4;
  /* font-family: 'NanumSquareLight'; */
}


.contextFont {
  font-size: 0.9vw;
}


</style>