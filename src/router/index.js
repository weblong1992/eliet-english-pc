import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/layout",
    name: "layout",
    redirect: "/home",
    component: () => import("@/views/layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
      },
      //educational-ideas
      {
        path: "/educational-ideas",
        name: "educational-ideas",
        component: () => import("@/views/educational-ideas/index.vue"),
      },

      {
        path: "/teacher",
        name: "teacher",
        component: () => import("@/views/teacher/index.vue"),
      },
      //
      //product-system 产品体系
      {
        path: "/product-system",
        name: "product-system",
        component: () => import("@/views/product-system/index.vue"),
      },

      // 如何上课
      {
        path: "/attend-class",
        name: "attend-class",
        component: () => import("@/views/attend-class/index.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

// 路由切换回到顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

export default router;
