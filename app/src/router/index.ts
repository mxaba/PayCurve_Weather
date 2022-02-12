import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Register from '@/views/Register.vue'
import ParentManage from '@/views/ParentManage.vue'
import Login from '@/views/Login.vue'

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: Home },
  { path: '/register', name: "Register", component: Register },
  { path: '/manage', name: "ParentManage", component: ParentManage },
  { path: '/login', name: "Login", component: Login },
  { path: "/daily", name: "Daily", component: () =>
      import("../views/Daily.vue") },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
