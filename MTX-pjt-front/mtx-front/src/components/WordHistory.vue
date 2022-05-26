<template>
  <div class="history-container d-flex">
    <div>
      <span v-for="(movie) in movieList" :key="movie.id">
      <button class="btn chained-movie mt-2">{{movie.title}}</button><span class="material-symbols-outlined mx-1">
arrow_right_alt</span>
    </span>
    <button class="btn next mt-2" @click="comment">What's Next?</button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'WordHistory',
  computed: {
    ...mapGetters(['movieList', 'movie']),
  },
  methods: {
    comment: function () {
      alert(`혹시 '${this.movie.last_word}'(으)로 시작하는 영화 제목을 알고 계신다면 https://github.com/kongji9847/MTX으로 알려주세요!  감사합니다😄`)
    }
  }
}
</script>

<style scoped>
.history-container {
  /* background-color: rgba(3, 26, 42, 0.6); */
  border-radius: 10px;
  width: 80vw;
  height: 20vh;
  justify-content: center;
  /* align-items: center; */
  flex-wrap: wrap;
  overflow-y: scroll;
}

.chained-movie {
  border: none;
  background-color: #041C2D;
  color:white;
  font-weight: bold;
  margin: 0.5rem;
}

.yellow:hover{
  /* border: none; */
  cursor: default;
}

.next {
  border: none;
  background-color: white;
  font-weight: bold;
  color: rgb(3, 26, 42);
  margin: 0.5rem;
}

.material-symbols-outlined {
  position: relative;
  top: 1vh;
  font-weight: bold;
  color: grey;
}

</style>