<template>
  <div class="history-container d-flex">
    <div>
      <span v-for="(movie) in movieList" :key="movie.id">
      <button class="btn yellow mt-2">{{movie.title}}</button><span class="material-symbols-outlined mx-1">
arrow_right_alt</span>
    </span>
    <button class="btn next mt-2">What's Next?</button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'WordHistory',
  computed: {
    ...mapGetters(['movieList'])
  }
}
</script>

<style scoped>
.history-container {
  background-color: rgba(3, 26, 42, 0.6);
  border-radius: 10px;
  width: 80vw;
  height: 20vh;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: scroll;
}

.yellow {
  border: none;
  background-color: rgb(3, 26, 42);
  color:white;
  font-weight: bold;
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
}

.material-symbols-outlined {
  position: relative;
  top: 1vh;
  font-weight: bold;
  color: white;
}

</style>