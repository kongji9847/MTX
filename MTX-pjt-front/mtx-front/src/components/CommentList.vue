<template>
  <div class="comment-list">
    <ul>
      <comment-list-item 
        v-for="(comment, idx) in comments"
        :comment="comment"
        :key="idx">
      </comment-list-item>
    </ul>

    <comment-list-form></comment-list-form>
  </div>
</template>

<script>
import CommentListItem from '@/components/CommentListItem.vue'
import CommentListForm from '@/components/CommentListForm.vue'

  export default {
    name: 'CommentList',
    components: { CommentListItem, CommentListForm },
    props: { comments: Array },
  }
</script>

<style>

</style>