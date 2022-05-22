<template>
  <div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'CommentListForm',
    data() {
      return {
        content: ''
      }
    },
    computed: {
      ...mapGtters(['review']),
    },
    methods: {
      // ...mapActions(['createComment']),
    }
  }
</script>

<style>

</style>