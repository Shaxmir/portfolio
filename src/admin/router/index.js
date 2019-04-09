import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import store from '../store';
import routes from './router.js';

Vue.use(Router);


const baseURL = 'https://webdev-api.loftschool.com/';
const guard = axios.create({baseURL});

const router = new Router({
  routes 
});



router.beforeEach(async (to, from, next) => {
  const isPublicRoute = to.matched.some(record => record.meta.public);
  const isUserLogged = store.getters["user/userIsLogged"];

  if (isPublicRoute === false && isUserLogged === false) {
    const token = localStorage.getItem('token');
    guard.defaults.headers['Authorization'] = `Bearer ${token}`;

    try {
      const response = await guard.get('/user');
      store.commit('user/SET_USER', response.data.user);
      next(); 
    } catch (error) {
      router.replace('/aut');
      localStorage.removeItem('token');
    }

  } else {
    next();
  }
});

export default router;