<template>
  <nav class="navbar navbar-default">
    <div class="navbar-header">
      <router-link to="/" class="logo">
        <img src="static/favicon-32x32.png" class="img-logo" /> 
      </router-link>
      <router-link to="/" class="logo">
        <span class="text-uppercase">Vue con auth</span>
      </router-link>
      <button class="btn btn-danger log botones" v-show="user" @click="handleLogout()">Logout</button>
      <button class="btn btn-info log botones" v-show="!user" @click="handleLogin()">Login</button>
      <img v-show="user" :src="user && user.photoURL" class="botones img-user" /> 
      <router-link to="/Perfil" class="enlace">
        <label v-text="user && user.displayName" class="botones label-header" />
      </router-link>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app-nav',
  data() {
   return {
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
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  background-color: #74b0fb;
}

.navbar-header {
  width: 100%;
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

.enlace {
  color: black;
}

.enlace:hover {
  text-decoration: underline;
  cursor: pointer;
}
    
</style>