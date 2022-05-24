<template>
  <div>
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
                        <tr v-for="(review, idx) in paginatedData" :key="idx">
                          <td>
                            {{ review.id }}
                          </td>
                          <td width="20%">
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
                <div class="btn-cover">
                  <button :disabled="pageNum === 0" @click="prevPage" class="page-btn btn btn-light">
                    &lt;
                  </button>
                  <span class="page-count">&emsp;{{ pageNum + 1 }} / {{ pageCount }} 페이지&emsp;</span>
                  <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn btn btn-light">
                    &gt;
                  </button>
                </div>
                <div class="review-create">
                  <router-link :to="{ name: 'reviewNew' }">
                    <button class="btn review-create-btn">Create</button>
                  </router-link>
                </div>
              </div>
          </div>
      </div>
    </div>
    <!-- ------------------------------------------------------ -->
  </div>
</template>

<script>
  export default {
    name: 'ReviewPaginatedList',
    data () {
      return {
        pageNum: 0
      }
    },
    props: {
      reviews: {
        type: Array,
        required: true
      },
      pageSize: {
        type:Number,
        required: false,
        default: 10
      }
    },
    computed: {
      pageCount () {
        let listLeng = this.reviews.length,
          listSize = this.pageSize,
          page = Math.floor(listLeng / listSize);
        if (listLeng % listSize > 0) page += 1;
          return page;
      },
      paginatedData () {
        const start = this.pageNum * this.pageSize,
          end = start + this.pageSize;
        return this.reviews.slice(start, end);
      }
    },
    methods: {
      nextPage () {
        this.pageNum += 1;
      },
      prevPage () {
        this.pageNum -= 1;
      }
    },
  }
</script>

<style scoped>

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

  .review-create {
    display: flex;
    justify-content: end;
  }

  .review-create-btn {
    color: white;
    background-color: #F8A111;
  }

  .btn-cover {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem auto;
  }
</style>