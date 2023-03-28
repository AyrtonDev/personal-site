import { createRouter, createWebHistory } from "vue-router";
import Principal from "../views/Principal.vue";
import About from "../views/About.vue";
import Knowledge from "../views/Knowledge.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    component: Principal,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/knowledge",
    name: "knowledge",
    component: Knowledge,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
