import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


import categories from "./modules/categories";
import skills from "./modules/skills";
import user from "./modules/user";
import rewievs from "./modules/rewievs";
import work from "./modules/work";


export default new Vuex.Store({
    modules: {
        categories, skills, user, rewievs, work
    }
})