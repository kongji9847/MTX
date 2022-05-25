<template>
  <div class="search-bar">
    <div class="searchContent">
      <div class="guide mb-3">&emsp;아무것도 입력하지 않으면 랜덤 영화로 출발해요!</div>
      <input v-model="word" @keyup.enter="inputSearch(last_word)" type="text" placeholder=" Search">
      <button @click="inputSearch(last_word)" class="mx-3">start</button>
      <div class="recommend">
      &nbsp;<span v-for="(word) in recommendWords" :key="word" @click="recommendClick(word)">{{word}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import _ from 'lodash'


  export default {
    name: 'SearchBar',
    data() {
      return {
        word: '',
        recommendWords: []
      }
    },
    computed: {
      last_word: function() {
        return this.word.slice(-1)
      },
    },
    methods: {
      ...mapActions(['inputSearch']),
      recommendClick(word) {
        this.word = word
      }
    },
    created() {
      const exList = [
        '해리 포터', '닥터 스트레인지', '범죄도시', '범죄도시2', '리틀포레스트',
      '업그레이드', '기생충', '타임 패러독스', '레미제라블', '메이즈 러너']
      // console.log(_.sampleSize(exList, 3))
      this.recommendWords =  _.sampleSize(exList, 3)
    },
  }
</script>

<style scoped>
  .search-bar {
    background-color: rgba(3, 26, 42, 0.6);
    position: relative;
    height: 290px;
  }

  .searchContent {
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
  }

  button {
    width: 15%;
    padding: 0.6rem;
    border: none;
    border-radius: 8px;
    background-color: #F8D488;
    color: black;
    font-size: 2rem;
    font-weight: 600;
    font-family: 'SUIT';
    padding-left: 1rem;
    padding-right: 1rem;
  }

  input {
    border-radius: 7px;
    border: none;
    margin: 0px;
    padding: 0.5rem;
    width: 80%;
    font-size: 2rem;
    font-weight: 500;
    font-family: 'Open Sans', sans-serif;
  }

  .recommend {
    margin-top: 2.3vh;
    text-align: left;
    color: white;
  }

  .guide {
    text-align: left;
    color: #F8D488;
    font-family: 'SUIT';
    font-size: 1.05rem;
  }

  .recommend > span {
    margin-left: 1.5vh
  }

  .recommend > span:hover {
    font-weight: bolder;
    cursor: pointer;
  }
</style>