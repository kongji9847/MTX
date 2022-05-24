<template>
  <div class="search-bar">
    <h1 class="mb-5">MTX 출발</h1>
    <search-bar></search-bar>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'

  export default {
    name: 'WordChain',
    components: {
      SearchBar,
    },
    created() {
      this.$store.dispatch('setUrl', 'chainStart')
    }
  }
</script>
<style scoped>
.search-bar {
  text-align: center;
  margin: 8% auto;
}
h1 {
  font-weight: 700;
  font-size: 3.5rem;
  font-family: 'Noto Sans KR', sans-serif;
}

</style>