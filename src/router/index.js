import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

const CursoDetails = () => import("@/views/Cursos.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cursos/:id",
    name: "RecepieContent",
    props: true,
    component: CursoDetails,
  },
];

const router = new VueRouter({
  routes,
});

export default router;