import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/pages/Home.vue";
import About from "/src/pages/About.vue";
import Contact from "/src/pages/Contact.vue";
import NotFound from "/src/pages/404.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
