import Vue from "vue";
import VueRouter from "vue-router";
<<<<<<< HEAD
import Home from "../views/Home1.vue";
=======
//import Home from "../views/Home.vue";
//import UserDetails from "@/views/details.vue";
import loginCurso from "../views/loginCurso.vue";
>>>>>>> angela

const homeindex = () => import("@/views/index.vue");
const Login = () => import("@/views/login.vue");
const Registro = () => import("@/views/registro.vue");
const CursoDetails = () => import("@/views/Cursos.vue");
const  UserLogin= () => import("@/views/login.vue");

const About = () => import("@/views/About.vue");
const Login1 = () => import("@/views/login.vue");
//const Home = () => import("@/views/Home1.vue");
Vue.use(VueRouter);

const routes = [
  {
<<<<<<< HEAD
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
=======
  path: "/",
  name: "loginCurso",
  component: loginCurso,
  meta: {
    requiresAuth: true,
>>>>>>> angela
  },
},
  {
    path: "/cursos/:id",
    name: "RecepieContent",
    props: true,
<<<<<<< HEAD
    component: CursoDetails
  }
=======
    component: CursoDetails,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/users/signin",
    name: "UserSignin",
    component: UserLogin,
    meta: {
      requiresAuth: false,
    },
  },
>>>>>>> angela
];

const router = new VueRouter({
  routes
});

export default router;
