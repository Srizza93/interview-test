import { createWebHashHistory, createRouter } from "vue-router";

const routeOptions = [
  {
    path: "/",
    name: "ExcusesDeDev",
  },
  {
    path: "/lost",
    name: "Lost",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
  },
  {
    path: "/http/:http_code@:is_sent",
    name: "Http",
  },
];

const routes = routeOptions.map((route) => {
  return {
    ...route,
    component: () =>
      import(/* webpackChunkName: "[request]" */ `../pages/${route.name}.vue`),
  };
});

const router = createRouter({
  history: createWebHashHistory("/interview-test/"),
  base: "/interview-test/",
  routes,
});

export default router;
