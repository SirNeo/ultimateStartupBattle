import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import BootstrapVue from 'bootstrap-vue';
import FirebaseUI from 'firebaseui';
import App from './App';
import router from './router';
import store from './store';
import './initFirebase';

Vue.use(BootstrapVue);
Vue.use(FirebaseUI);

// Deshabilita un aviso de produccion en la consola
Vue.config.productionTip = false;

// Enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  require('./pwa');
} else {
  // window.firebase = firebase;
}

// Sync the router with the vuex store. This registers `store.state.route`
sync(store, router);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
