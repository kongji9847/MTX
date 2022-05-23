<template>
  <li class="comment-list-item">
    <router-link :to="{ name: 'profile', params: { username: comment.username } }" v-if="comment.username">
      {{ comment.username }}
    </router-link>:

    <span v-if="!isEditing">{{ payload.content }}</span>

    <span v-if="isEditing">
      <input type="text" v-model="payload.content">
      <button @click="onUpdate">Update</button> | 
      <button @click="switchIsEditing">Cancel</button>
    </span>

    <span v-if="currentUser.username === comment.username && !isEditing">
      <button @click="switchIsEditing">Edit</button> |
      <button @click="deleteComment(payload)">Delete</button>
    </span>
  </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'CommentListItem',
    props: { comment: Object },
    data() {
      return {
        isEditing: false,
        payload: {
          reviewPk: this.$route.params.reviewPk,
          commentPk: this.comment.id,
          content: this.comment.content
        },
      }
    },
    computed: {
      ...mapGetters(['currentUser'])
    },
    methods: {
      ...mapActions(['updateComment', 'deleteComment']),
      switchIsEditing() {
        this.isEditing = !this.isEditing
      },
      onUpdate() {
        this.updateComment(this.payload)
        this.isEditing = false
      },
    }
  }
</script>

<style>

</style>