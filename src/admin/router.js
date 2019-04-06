import VueRouter from 'vue-router';

Vue.use(VueRouter);

import about from './comp/about.vue';
const router = [
    {
        path: '/',
        component: about
    },
    {
        path: '/myworks',
        component: myworks
    },
    {
        path: '/rewievs',
        component: rewievs
    }
];

export default new VueRouter({ router, mode: 'history' });