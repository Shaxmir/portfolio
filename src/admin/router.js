export default [
    {
      path: "/",
      component: () => import("comp/about.vue"),
      meta: {
        title: "Блок «Обо мне»"
      }
    },
    {
      path: "/myworks",
      component: () => import("comp/myworks.vue"),
      meta: {
        title: "Блок «Работы»"
      }
    },
    {
      path: "/rewievs",
      component: () => import("comp/rewievs.vue"),
      meta: {
        title: "Блок «Отзывы»"
      }
    },
    {
      path: "/login",
      component: () => import("components/pages/login.vue"),
      meta: {
        public: true
      }
    }
  ];