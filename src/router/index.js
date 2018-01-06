import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';
import store from '@/store';
import FourOhFour from '@/components/FourOhFour';
import Login from '@/components/Login';
import Perfil from '@/components/Perfil';
import PublicBattles from '@/components/PublicBattles';
import PrivateBattles from '@/components/PrivateBattles';
// import Callback from '@/components/Callback';
// import Auth from '@/components/Auth';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  // TODO: should we remember scroll position?
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: PublicBattles },
    { path: '/private-battles', component: PrivateBattles },
    // { path: '/callback', component: Callback },
    // { path: '/auth', component: Auth },
    {
      path: '/login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (store.state.user) {
          next(from);
        } else {
          next();
        }
      },
    },
    {
      path: '/logout',
      beforeEnter: (to, from, next) => {
        if (store.state.user) {
          firebase.auth().signOut();
          next('/');
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/perfil',
      component: Perfil,
      meta: { requiresAuth: true },
    },
    { path: '*', component: FourOhFour },
  ],
});

/**
 * Check if a route requires authentication.
 * This is a global before hook for all routes,
 * checks if there are `meta: { requiresAuth: true }`
 * in all matched routes and sub routes.
 * If yes, redirect to `/login` and add original path to the query.
 */
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.user) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
