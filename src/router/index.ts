import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

export const routes = [
  {
    path: "/",
    name: "首页",
    component: HomeView,
  },
  {
    path: "/coverMaker",
    name: "图片生成",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/CoverMakerView.vue"),
  },
  {
    path: "/about",
    name: "关于我们",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
