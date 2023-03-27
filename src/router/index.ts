import { createRouter, createWebHistory } from "vue-router";
import Principal from "../components/Principal.vue";
import About from "../components/About.vue";
import Knowledge from "../components/Knowledge.vue";
import Contact from "../components/Contact.vue";

const routes = [
  {
    path: "/",
    component: Principal,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/knowledge",
    component: Knowledge,
  },
  {
    path: "/contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
