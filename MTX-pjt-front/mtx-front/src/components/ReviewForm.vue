<template>
  <form @submit.prevent="onSubmit">
    <!-- <div>
      <label for="title">title: </label>
      <input v-model="newReview.title" type="text" id="title" />
    </div>
    <div>
      <label for="content">content: </label>
      <input v-model="newReview.content" type="text" id="content">
    </div>
    <div>
      <button>{{ action }}</button>
    </div> -->
    <div class="mb-3 row">
      <label for="reviewTitle" class="col-sm-2 col-form-label">제목</label>
      <div class="col-sm-10">
        <input v-model="newReview.title" type="text" class="form-control" id="reviewTitle">
      </div>
    </div>
    <div class="mb-3 row">
      <label for="reviewContent" class="col-sm-2 col-form-label">내용</label>
      <div class="col-sm-10">
        <textarea v-model="newReview.content" class="form-control" id="reviewContent" rows="10"></textarea>
      </div>
    </div>
    <div class="review-create-submit">
      <button class="btn review-create-btn">Create</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'ReviewForm',
    props: {
      review: Object,
      action: String
    },
    data() {
      return {
        newReview: {
          title: this.review.title,
          content: this.review.content,
        }
      }
    },
    methods: {
      ...mapActions(['createReview', 'updateReview']),
      onSubmit() {
        if (this.action === 'create') {
          this.createReview(this.newReview)
        } else if (this.action === 'update') {
          const payload = {
            pk: this.review.id,
            ...this.newReview,
          }
          this.updateReview(payload)
        }
      },
    },
  }
</script>

<style scoped>

  .review-create-submit {
    display: flex;
    justify-content: end;
  }

  .review-create-btn {
    color: white;
    background-color: #F8A111;
    display: flex;
    justify-content: end;
  }

</style>