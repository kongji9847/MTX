<template>
  <div class="ReviewList">
    <!-- <h1>Review List</h1>
    <router-link :to="{ name: 'reviewNew' }">
      <button>Create</button>
    </router-link>
    <ul>
      <li v-for="review in reviews" :key="review.id">
        <router-link :to="{ name: 'profile', params: {username: review.user.username } }">
          {{ review.user.username }}
        </router-link>
        <br>
        <router-link :to="{ name: 'review', params: {reviewPk: review.id } }">
          {{ review.title }}
        </router-link>

        <p>
          댓글 수: {{ review.comment_count }}
        </p>
      </li>
    </ul> -->
    <!-- ------------------------------------------------------ -->
        <div class="container-fluid">

        <!-- Page Heading -->
        <h1 class="h3 mb-3 text-gray-800 community-title">Community</h1>
        <!-- DataTales Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold">영화 잡담 게시판</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">영화</th>
                                <th scope="col">제목</th>
                                <th scope="col">작성자</th>
                                <th scope="col">날짜</th>
                            </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(review, idx) in reviews" :key="idx">
                            <td>
                              {{ idx + 1 }}
                            </td>
                            <td>
                              {{ review.movie_title }}
                            </td>
                            <td width="40%">
                              <span class="review-title">
                                <router-link :to="{ name: 'review', params: {reviewPk: review.id } }">
                                  {{ review.title }}
                                </router-link>
                              </span>
                              <span class="comment-count">
                                &nbsp;{{ review.comment_count }}
                              </span>
                            </td>
                            <td>
                              <span class="review-author">
                                {{ review.user.username }}
                                <!-- <router-link :to="{ name: 'profile', params: {username: review.user.username } }">
                                </router-link> -->
                              </span>
                            </td>
                            <td>
                              {{ review.updated_at }}
                            </td>
                          </tr>
                        </tbody>
                    </table>
                  <router-link :to="{ name: 'reviewNew' }">
                    <button class="btn review-create-btn">Create</button>
                  </router-link>
                </div>
            </div>
        </div>
      </div>
      <!-- ------------------------------------------------------ -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'ReviewList',
    computed: {
      ...mapGetters(['reviews'])
    },
    methods: {
      ...mapActions(['fetchReviews'])
    },
    created() {
      this.fetchReviews()
    },
  }
</script>

<style scoped>

  .ReviewList {
    background-color: #EFEFEF;
  }

  .community-title {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
  }

  .table-bordered {
    font-family: 'NanumSquareAcr';
  }

  .review-title a {
    color: #041C2D ;
    text-decoration-line: none;
  }

  .review-title:hover {
  font-weight: bold;
  }

  .comment-count {
    font-size: 0.8rem;
    color: #F8A111;
  }

  .review-create-btn {
    color: white;
    background-color: #F8A111;
  }
</style>