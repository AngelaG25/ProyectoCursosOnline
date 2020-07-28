import Vue from "vue";
import VueRouter from "vue-router";
import loginCurso from "../views/loginCurso.vue";


const homeindex = () => import("@/views/index.vue");
const Login = () => import("@/views/login.vue");
const Registro = () => import("@/views/registro.vue");
const CursoDetails = () => import("@/views/Cursos.vue");

const About = () => import("@/views/About.vue");


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
    component: Login,
    meta: {
      requiresAuth: false,
    },
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
  // {
  //   path: "/home",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: "/loginCurso",
    name: "loginCurso",
    component: loginCurso,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/cursos/:id",
    name: "RecepieContent",
    props: true,
    component: CursoDetails,
    meta: {
      requiresAuth: true,
    },
  },

];

const router = new VueRouter({
  routes
});

export default router;
