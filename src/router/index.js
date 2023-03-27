// @ts-nocheck
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/view/Home.vue";
import Login from "@/view/Login";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/home", name: "Home1", component: Home },
  { path: "/login", name: "Login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;