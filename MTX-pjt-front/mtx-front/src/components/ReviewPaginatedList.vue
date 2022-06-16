<template>
  <div>
    <div class="container-fluid">
      <div class="card shadow mb-4">
          <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold">영화 잡담 게시판</h6>
          </div>
          <div class="card-body">
              <div class="table-responsive">
                  <table class="table" id="dataTable" width="100%" cellspacing="0">
                      <thead class="table-bordered">
                          <tr>
                              <th scope="col">&nbsp;</th>
                              <th scope="col">영화</th>
                              <th scope="col">제목</th>
                              <th scope="col">작성자</th>
                              <th scope="col">날짜</th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(review, idx) in paginatedData" :key="idx" class="review-tr">
                          <td>
                            {{ review.id }}
                          </td>
                          <td class="td-movie-title">
                            <span class="review-movie-title">
                              <router-link :to="{ name: 'movie', params: { movieId: review.movie } }">
                                {{ review.movie_title }}
                              </router-link>
                            </span>
                          </td>
                          <td width="40%">
                            <span class="review-title">
                              <router-link :to="{ name: 'review', params: { reviewPk: review.id } }">
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

  .td-movie-title {
    width: 230px;
  }

  .review-tr:hover {
    background-color: #efefef;
  }

  .review-movie-title a {
    color: rgb(112, 112, 112);
    text-decoration-line: none;
  }

  .review-movie-title a:hover {
    color: #F8A111;
  }

  .review-title a {
    color: #041C2D ;
    text-decoration-line: none;
  }

  .review-title:hover {
  font-weight: bold;
  text-decoration-line: underline;
  }

  .comment-count {
    font-size: 0.8rem;
    color: #F8A111;
  }

  .review-create {
    display: flex;
    justify-content: flex-end;
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