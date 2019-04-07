import Vue from 'vue';
import App from './App.vue'
import Router from 'vue-router'

import about from './comp/about';
import rewievs from './comp/rewievs';
import work from './comp/work';
import aut from './comp/aut';
import store from './store';
import request from './request';

store.$axios = request;

Vue.use(Router);

const routes = [
  { path: '/about', component: about },
  { path: '/work', component: work },
  { path: '/aut', component: aut },
  { path: '/rewievs', component: rewievs }
]

const router = new Router({
  routes 
});

new Vue({
  el: "#app-root",
  render: h => h(App),
  router: router,
  store
});

if (router.currentRoute.path == '/') {
  router.push('/about');
}