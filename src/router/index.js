import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import FeedPage from '../views/FeedPage';

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login
  },
  {
    path: '/feed',
    name: 'feed',
    component: FeedPage
  }
];

const router = new VueRouter({
  routes
});

export default router
