import Vue from "vue";
import VueRouter from "vue-router";

//import Home from "../views/Home1.vue";
//import Home from "../views/Home.vue";
//import UserDetails from "@/views/details.vue";
import loginCurso from "../views/loginCurso.vue";


const homeindex = () => import("@/views/index.vue");
const Login = () => import("@/views/login.vue");
const Registro = () => import("@/views/registro.vue");
const CursoDetails = () => import("@/views/Cursos.vue");
//const  UserLogin= () => import("@/views/login.vue");

const About = () => import("@/views/About.vue");
//const Login1 = () => import("@/views/login.vue");
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
    component: Login,
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
  },
  {
    path: "/cursos/:id",
    name: "RecepieContent",
    props: true,
    component: CursoDetails
  },

];

const router = new VueRouter({
  routes
});

export default router;
