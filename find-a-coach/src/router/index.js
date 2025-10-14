import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/coaches",
    },
    {
      path: "/coaches",
      component: null,
    },
    {
      path: "/coaches/:id",
      component: null,
      children: [
        {
          path: "contact", // /coaches/c1/contact
          component: null,
        },
      ],
    },
    {
      path: "/register",
      component: null,
    },
    {
      path: "/requests",
      component: null,
    },
    {
      path: "/:catchAll(.*)",
      component: null,
    },
  ],
});

export default router;
