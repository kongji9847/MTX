<template>
  <div>
    <!-- <h1>{{ profile.username }}</h1>

    <h2>작성한 리뷰</h2>
    <ul>
      <li v-for="review in profile.review_set" :key="review.pk">
        <router-link :to="{ name: 'review', params: { reviewPk: review.id } }">
          {{ review.title }}
        </router-link>
      </li>
      리뷰 개수: {{ profile.review_count }}
      댓글 개수: {{ profile.comment_count }}
      평가한 영화 목록: {{ profile.rate_set }}
      평가한 영화 수: {{ profile.movie_count }}
    </ul> -->
    <!-- ---------------------------------------------------------- -->
    <section>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-12 col-lg-8 col-xl-6">

            <div class="profile-card card shadow">
              <div class="card-body text-center">
                <div class="mt-3 mb-4">
                  <img :src="imgUrl"
                    class="rounded-circle img-fluid" style="width: 120px;" />
                </div>
                <h4 class="mb-2">{{ profile.username }}</h4>
                <p class="text-muted mb-4">회원 등급  <span class="mx-2">|</span> 
                    <span>{{ userGrade }}등급</span></p>
                <div class="d-flex justify-content-between text-center mt-5 mb-2 mx-2">
                  <div>
                    <p class="mb-2 h5 user-review-count" @click="onClickReview">{{ profile.review_count }}</p>
                    <p class="text-muted mb-0">작성한 게시글</p>
                  </div>
                  <div class="px-3">
                    <p class="mb-2 h5 user-movie-count" @click="onClickMovie">{{ profile.movie_count }}</p>
                    <p class="text-muted mb-0">평가한 영화 수</p>
                  </div>
                  <div>
                    <p class="mb-2 h5">{{ profile.comment_count }}</p>
                    <p class="text-muted mb-0">작성한 댓글 수</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="row" v-if="showUserDetailInfo===1">
      <h1 class="h3 mb-3 text-gray-800 community-title">Review</h1>
      <review-paginated-list :reviews="profile.review_set"></review-paginated-list>
    </div>
    <div class="row" v-if="showUserDetailInfo===2">
      <h1 class="h3 mb-3 text-gray-800 community-title">Rated Movie</h1>
        <div class="container">
          <div class="row d-flex justify-content-center">
            <span v-for="movie in profile.rate_set" :key="movie.pk" class="user-movie-item col-sm-6 col-md-4 col-lg-3 my-2">
              <router-link :to="{ name: 'movie', params: {movieId: movie.movie } }">
                <img :src="movie.poster_path" alt="movie poster" class="user-movie-poster">
              </router-link>
            </span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ReviewPaginatedList from '@/components/ReviewPaginatedList.vue'
import _ from 'lodash'

  export default {
    name: 'ProfileView',
    data() {
      return {
        showUserDetailInfo: 0,
        randomNum: _.random(1, 6),
        grade: 5
      }
    },
    components: { ReviewPaginatedList },
    computed: {
      ...mapGetters(['profile']),
      imgUrl () {
        return `https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava${this.randomNum}-bg.webp`
      },
      userGrade () {
        if (this.profile.review_count > 50) {
          return this.grade - 2
        } else if (this.profile.review_count > 30) {
          return this.grade - 1
        } else {
          return this.grade
        }
      }
    },
    methods: {
      ...mapActions(['fetchProfile']),
      onClickReview() {
        this.showUserDetailInfo = 1
      },
      onClickMovie() {
        this.showUserDetailInfo = 2
      }
    },
    created() {
      const payload = { username: this.$route.params.username }
      this.fetchProfile(payload)
      this.$store.dispatch('setUrl', 'chain')
    },
  }
</script>

<style scoped>

  .profile-card {
    border-radius: 15px;
  }

  .user-review-count:hover {
    font-weight: bold;
    cursor: pointer;
  }
  
  .user-movie-count:hover {
    font-weight: bold;
    cursor: pointer;
  }

  .user-movie-item {
    list-style: none;
  }

  .user-movie-poster {
    width: 80%;
    margin: 1rem;
  }

</style>