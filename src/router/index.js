import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home1.vue";

const homeindex = () => import("@/views/index.vue");
const Login = () => import("@/views/login.vue");
const Registro = () => import("@/views/registro.vue");
const CursoDetails = () => import("@/views/Cursos.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HIndex",
    component: homeindex
  },
  {
    path: "/logUser/log",
    name: "LoginUser",
    component: Login
  },
  {
    path: "/user/registro",
    name: "Registro",
    component: Registro
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/cursos/:id",
    name: "RecepieContent",
    props: true,
    component: CursoDetails
  }
];

const router = new VueRouter({
  routes
});

export default router;
