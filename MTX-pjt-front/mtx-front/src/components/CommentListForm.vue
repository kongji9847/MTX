<template>
  <div>
    <!-- <form @submit.prevent="onSubmit" class="comment-list-form">
      <label for="comment">comment</label>
      <input type="text" id="comment" v-model="content" required>
      <button>Comment</button>
    </form> -->
    <div class="row g-3 align-items-center">
      <div class="col-auto">
        <label for="inputComment" class="col-form-label">댓글</label>
      </div>
      <div class="col-auto">
        <input type="text" id="inputComment" class="form-control">
      </div>
    </div>
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