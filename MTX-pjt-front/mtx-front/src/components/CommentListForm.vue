<template>
  <form @submit.prevent="onSubmit" class="comment-list-form">
    <label for="comment">comment: </label>
    <input type="text" id="comment" v-model="content" required>
    <button>Comment</button>
  </form>
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
      ...mapGetters(['review']),
    },
    methods: {
      ...mapActions(['createComment']),
      onSubmit() {
        this.createComment({ reviewPk: this.review.id, content: this.content, })
        this.content = ''
      }
    }
  }
</script>

<style>

</style>