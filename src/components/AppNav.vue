<template>
  <nav class="navbar navbar-default">
    <div class="navbar-header">
      <router-link to="/" class="logo">
        <img src="static/favicon-32x32.png" class="img-logo" /> 
      </router-link>
      <button class="btn btn-danger log botones" v-show="user" @click="handleLogout()">Logout</button>
      <button class="btn btn-info log botones" v-show="!user" @click="handleLogin()">Login</button>
      <img v-show="user" :src="user && user.photoURL" class="botones img-user" /> 
      <label v-text="user && user.displayName" class="botones label-header" />
    </div>
    <!--<p>{{user && user.name}}</p> 
    <p>{{user && user.email}}</p> 
    <p>{{user && user.userId}}</p> -->
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app-nav',
  data() {
   return {
     /*
     photo: '',
     userId: '',
     name: '',
     email: '',
     user: {}
     */
   }
  },
  computed: {
    ...mapState({
      user: 'user'
    })
  },
  watch: {
    user (val) {
      if (val) {
        // do nothing
      }
    }
  },
  methods: {
    handleLogin() {
      this.$router.push('/login');
    },
    handleLogout() {
      this.$router.push('/logout');
      /*
      firebase.auth().signOut();
      this.name = '';
      this.email = '';
      this.photo = '';
      this.userId = '';
      this.user = {};
      */
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  background-color: #74b0fb;
}

.navbar-right { margin-right: 0px !important}

.log {
  vertical-align: middle;
  float: right;
}

.logo {
  color: white;
  text-decoration: none;
  padding: 10px;
}

.label-header {
  line-height: 35px;
}

.botones {
  float: right;
  margin-right: 10px;
  margin-top: 8px;
}

.img-user {
  height: 30px;
}

.img-logo {
  margin-left: 10px;
  margin-top: 8px;
}
    
</style>