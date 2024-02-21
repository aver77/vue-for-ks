import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/pages/Home.vue";
import PersonPage from "../components/pages/Person.vue";
import { RouteNames } from "./routes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: "/person",
    name: RouteNames.PERSON,
    component: PersonPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

export default router;
