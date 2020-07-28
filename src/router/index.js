import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home1.vue";

const homeindex = () => import("@/views/index.vue");
const Login = () => import("@/views/login.vue");
const Registro = () => import("@/views/registro.vue");
const CursoDetails = () => import("@/views/Cursos.vue");

const About = () => import("@/views/About.vue");
const Login1 = () => import("@/views/login.vue");
//const Home = () => import("@/views/Home1.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HIndex",
    component: homeindex
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/logUser/log",
    name: "LoginUser",
    component: Login
  },
  {
    path: "/login",
    name: "login",
    component: Login1
  },
  // {
  //   path: "/Cursos",
  //   name: "CursoDetails",
  //   component: CursoDetails
  // },
  {
    path: "/registro",
    name: "registro",
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
