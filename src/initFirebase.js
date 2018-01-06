import firebase from 'firebase';
import firebaseui from 'firebaseui';
// import 'firebaseui/dist/firebaseui.css';
import store from './store';

firebase.initializeApp({
  apiKey: 'AIzaSyDRAruiLINMKTtxlbLZLfCu8eUSv9axudM',
  authDomain: 'vue-con-auth.firebaseapp.com',
  databaseURL: 'https://vue-con-auth.firebaseio.com',
  projectId: 'vue-con-auth',
  storageBucket: 'vue-con-auth.appspot.com',
  messagingSenderId: '400206983410',
});

// if (__DEV__) {
//  window.firebase = firebase;
// }

export const ui = new firebaseui.auth.AuthUI(firebase.auth());

/**
 * Sync store.state.user with firebase.auth().currentUser
 *
 * This callback is called when firebase.auth() detects user changes,
 * so just update the vuex store with the new user object.
 */
firebase.auth().onAuthStateChanged((user) => {
  store.commit('UPDATE_USER', user);
});
