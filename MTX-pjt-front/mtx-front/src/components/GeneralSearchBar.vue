<template>
  <div>
    <input type="text" v-model="keyword" @keyup.enter="movieSearch(keyword)" placeholder="리뷰할 영화 제목을 검색하세요!">
    <button class="btn btn-warning" @click="movieSearch(keyword)">검색</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'GeneralSearchBar',
  data () {
    return {
      keyword : ''
    }
  },
  methods: {
    ...mapActions(['movieSearch'])
  }
}
</script>

<style scoped>
  input {
    width: 80%;
  }

</style>