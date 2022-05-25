<template>
  <div>
    <!-- <h1>Signup</h1> -->

    <!-- <account-error-list v-if="authError"></account-error-list> -->

    <!-- <form @submit.prevent="signup(credentials)">
      <div>
        <label for="username">Username: </label>
        <input  v-model="credentials.username" type="text" id="username" required/>
      </div>
      <div>
        <label for="password1">Password: </label>
        <input v-model="credentials.password1" type="password" id="password1" required />
      </div>
      <div>
        <label for="password2">Password Confirmation:</label>
        <input v-model="credentials.password2" type="password" id="password2" required />
      </div>
      <div>
        <button>Signup</button>
      </div>
    </form> -->

    <!-- ---------------------------------------------------------- -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0 my-3">
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image my-auto">
                  <div class="trainAnimation">
                    <div class="content" id="train-content">
                      <div class="buildings"></div>
                      <div class="windows"></div>
                      <div class="bridge"></div>
                      <div class="train">
                        <div class="carOne"></div>
                        <div class="carTwo"></div>
                        <div class="carThree"></div>
                      </div>
                      <div class="moon"></div>
                      <div class="stars"></div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4 login-title" id="signup-title">Welcome!</h1>
                    </div>
                    <account-error-list v-if="authError"></account-error-list>
                    <form @submit.prevent="signup(credentials)" class="user">
                        <div class="form-group">
                          <label for="usernameInput" class="form-label" id="signup-font">Username</label>
                          <input v-model="credentials.username" type="text" class="form-control form-control-user"
                              id="inputUsername" placeholder="Enter Your Username...">
                        </div>
                        <br>
                        <div class="form-group">
                          <label for="inputPassword1" class="form-label" id="signup-font">Password</label>
                          <input v-model="credentials.password1" type="password" class="form-control form-control-user"
                              id="inputPassword1" placeholder="Password">
                        </div>
                        <br>
                        <div class="form-group">
                          <label for="inputPassword2" class="form-label" id="signup-font">Password Confirmation</label>
                          <input v-model="credentials.password2" type="password" class="form-control form-control-user"
                              id="inputPassword2" placeholder="Password">
                        </div>
                        <br>
                        <button type="submit" class="btn btn-primary">Signup</button>
                    </form>
                    <hr>
                    <div class="text-center">
                    <router-link :to=" { name: 'login' }" >Go to Login!</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import AccountErrorList from '@/components/AccountErrorList.vue'

  export default {
    name: 'SignupView',
    components: {
      AccountErrorList,
    },
    data() {
      return {
        credentials: {
          username: '',
          password1: '',
          password2: '',
        }
      }
    },
    computed: {
      ...mapGetters(['authError'])
    },
    methods: {
      ...mapActions(['signup'])
    },
    created() {
      this.$store.dispatch('setUrl', 'chain')
    }
  }
</script>

<style scoped>

#signup-title {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: #041C2D;
}

#signup-font {
  font-family: 'Open Sans', sans-serif;
  color: #041C2D;
}

#train-content {
  width: 350px;
  height: 350px;
}

</style>
