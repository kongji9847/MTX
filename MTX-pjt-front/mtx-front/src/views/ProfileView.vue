<template>
  <div>
    <h1>{{ profile.username }}</h1>

    <h2>작성한 리뷰</h2>
    <ul>
      <li v-for="review in profile.review_set" :key="review.pk">
        <router-link :to="{ name: 'review', params: { reviewPk: review.id } }">
          {{ review.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'ProfileView',
    computed: {
      ...mapGetters(['profile'])
    },
    methods: {
      ...mapActions(['fetchProfile'])
    },
    created() {
      const payload = { username: this.$route.params.username }
      this.fetchProfile(payload)
    },
  }
</script>

<style>

</style>