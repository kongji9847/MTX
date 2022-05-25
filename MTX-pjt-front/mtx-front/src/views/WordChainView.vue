<template>
  <div>
    <div class="btn-position">
        <span class="material-symbols-outlined btn-left" @click="prevMovie">arrow_back_ios</span>
      </div>
    <div class="container">
      <div class="row">
        <div class="col-3 title-position">
          <span class="movie-title">{{ movie.title }}</span>
          <div class="redBox mb-2"></div>
          <div class="star-ratings">
            <div 
              class="star-ratings-fill space-x-2 text-lg"
              :style="{ width: ratingToPercent + '%' }">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <div class="star-ratings-base space-x-2 text-lg">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
        </div>
        <div class="col-4 poster">
          <img :src="movie.poster_path" alt="movie.title" @click="goDetail" class="mt-4">
          <div class="whiteCircle"></div>
        </div>
        <div class="col-5">
          <div class="content-position" style="margin-top:6rem; margin-left:3rem;">
            <p><span class="titleFont">개봉일 </span> <span class="contextFont">{{ movie.release_date}}</span></p>
            <p><span class="titleFont">평점 </span> <span class="contextFont">{{movie.vote_average}}</span></p>
            <p><span class="titleFont">장르 </span> 
              <span v-for="(genre, idx) in movie.genre_ids" :key="idx" class="contextFont">{{genre.name}} </span>
            </p>
            <div>
              <span class="titleFont">줄거리 </span>
              <div class="overviewBox">
                <p class="overview contextFont">{{ movie.overview }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-position">
      <span class="material-symbols-outlined btn-right" @click="nextMovie(info)">
        arrow_forward_ios
      </span>
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
      },
      ratingToPercent() {
        return this.movie.vote_average*10 + 1.5
      }
    },
    methods: {
      ...mapActions(['fetchMovie', 'nextMovie', 'prevMovie']),
      goDetail : function () {
        this.$router.push({
          name: 'movie',
          params: { movieId: this.movie.id},
        })
      },
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
  font-size: 2.3vw;
  /* font-weight: 700; */
}

.star-ratings {
  font-size: 2.5vw;
  color: #878787; 
  position: relative;
  unicode-bidi: bidi-override;
  width: max-content;
  /* -webkit-text-fill-color: transparent; Will override color (regardless of order) */
}

.star-ratings-fill {
  padding: 0;
  position: absolute;
  z-index: 1;
  display: flex;
  top: 0;
  left: 0;
  overflow: hidden;
  -webkit-text-fill-color: #F7d489;
}

.star-ratings-base {
  z-index: 0;
  padding: 0;
}

.btn-left{
  position: fixed;
  top: 45%;
  left: 3%
}
.btn-right{
  position: fixed;
  top: 45%;
  right: 3%
}

.poster > img {
  position: relative;
  width: 90%;
  z-index: 3;
}

.poster > img:hover {
  cursor: pointer;
  width: 100%;
}

.titleFont {
  font-size: 0.9vw;
  font-weight: bold;
}


.overviewBox .overview {
  width: 100%;
  height: 14vw;
  overflow: scroll;
  /* text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-line-clamp:8;
  -webkit-box-orient:vertical; */
}


.overviewBox {
  position: relative;
  z-index: 4;
  /* font-family: 'NanumSquareLight'; */
}

.material-symbols-outlined {
  font-size: 2rem;
  color: #878787;
}

.material-symbols-outlined:hover {
  font-weight: bold;
  cursor: pointer;
}

.contextFont {
  font-size: 0.9vw;
}

::-webkit-scrollbar {
  display: none;
  }

</style>