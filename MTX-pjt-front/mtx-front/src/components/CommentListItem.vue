<template>
  <li class="comment-list-item">
    <div class="comment-author">
      <span class="material-symbols-outlined">account_circle</span>&nbsp;
      <router-link :to="{ name: 'profile', params: { username: comment.username } }" v-if="comment.username">
        {{ comment.username }}
      </router-link>
    </div>

    <div class="d-flex justify-content-between">
      <span v-if="!isEditing">{{ payload.content }}</span>

      <span v-if="isEditing" class="d-flex justify-content-between">
        <form class="col-md-12 d-flex justify-content-between">
          <input type="text" v-model="payload.content" class="form-control">
          <button @click="onUpdate" class="mx-3 btn update-btn btn-sm">Update</button>
          <button @click="switchIsEditing" class="btn btn-outline-dark btn-sm">Cancel</button>
        </form>
      </span>

      <span v-if="currentUser.username === comment.username && !isEditing">
        <button @click="switchIsEditing" class="mx-3 btn btn-outline-secondary btn-sm">Edit</button>
        <button @click="deleteComment(payload)" class="btn btn-outline-dark btn-sm">Delete</button>
      </span>
    </div>
    <hr>
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
          commentPk: this.comment.pk,
          content: this.comment.content
        },
      }
    },
    computed: {
      ...mapGetters(['currentUser'])
    },
    methods: {
      ...mapActions(['updateComment', 'deleteComment', 'fetchReview']),
      switchIsEditing() {
        this.isEditing = !this.isEditing
      },
      onUpdate() {
        if (this.comment.pk) {
          this.updateComment(this.payload)
          this.isEditing = false
        }
      },
    },
    created() {
      this.fetchReview(this.payload.reviewPk)
    }
  }
</script>

<style scoped>

  .comment-list-item {
    list-style: none;
  }

  .comment-author {
    display: flex;
    align-content: center;
    margin: 1rem auto;
  }

  .comment-author a {
    font-family: 'Open Sans', sans-serif;
    color: black;
    text-decoration-line: none;
  }

  .comment-author:hover {
    font-weight: bold;
  }
  
  .update-btn {
    color: white;
    background-color: #F8A111;
  }

</style>