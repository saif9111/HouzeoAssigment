import { createRouter, createWebHistory } from "vue-router";
import Listings from "../pages/Listings.vue";

const routes = [
  {
    path: "/",
    component: Listings,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
