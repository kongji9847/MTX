<template>
  <div>
    <h1>Logout</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

  export default {
    methods: {
      ...mapActions(['logout'])
    },
    computed: {
      ...mapGetters(['isLoggedIn'])
    },
    created() {
      if (this.isLoggedIn) {
        this.logout()
      } else {
        alert('로그아웃 못하는데?')
        this.$router.back()
      }
    }

  }
</script>

<style>

</style>