import Vue from "vue";
import VueRouter from "vue-router";
import Items from"../app/shop/infrastructure/components/Items.vue";
import User from"../app/users/infrastructure/components/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Shop",
    component: Items,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
