export default [
    { path: '/about', 
    component: () => import("../comp/about.vue"),
    meta: {
      title: 'Текст'
    }
   },
    { path: '/work', 
    component: () => import("../comp/work.vue"),
    meta: {
      title: 'Текст'
    }
   },
    { path: '/aut', 
    component: () => import("../comp/aut.vue"),
    meta: {
      public: true
    }
   },
    { path: '/rewievs', 
    component: () => import("../comp/rewievs.vue"),
    meta: {
      title: 'Текст'
    }
   }
  ]