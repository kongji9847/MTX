<template>
  <div class="searchContent row g-3 justify-content-center">
    <div class="col-10 d-flex justify-content-between">
      <input class="form-control" type="text" v-model="keyword" @keyup.enter="[movieSearch(keyword), setNewSearch()]" placeholder="영화 제목을 검색하세요!">
      <button type="submit" class="btn mx-3" @click="[movieSearch(keyword), setNewSearch()]">Search</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'GeneralSearchBar',
  data () {
    return {
      keyword : this.moviTitleToReview
    }
  },
  computed: {
    ...mapGetters(['movieTitleToReview'])
  },
  methods: {
    ...mapActions(['movieSearch']),
    setNewSearch: function () {
      this.$store.dispatch('newSearch', false)
    }
  },
  // mounted() {
  //   console.log(this.movieTitleToReview)
  // }
}
</script>

<style scoped>

  input {
    padding: 0.8rem;
    font-weight: bold;
    /* box-shadow: 0.5px 0.5px 10px 0px black; */
  }

  .btn {
    width: auto;
    color: white;
    background-color: #F8A111;
    font-weight: bold;
    /* box-shadow: 0.5px 0.5px 10px 0px gray; */
  }



</style>