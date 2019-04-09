import Vue from 'vue';
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import store from './store';
import request from './request';
import router from './router';

store.$axios = request;


new Vue({
  el: "#app-root",
  render: h => h(App),
  router,
  store
});

