import VueRouter from "vue-router";
import About from "./components/about";
import Myworks from "./components/myworks";

Vue.use(VueRouter);

export default new VueRouter({ 
    routes: [
    {
        path: '',
        component: About
    },
    {
        path: '/myworks',
        component: Myworks
    }
],
mode: 'history'});