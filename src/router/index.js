import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
//import UserDetails from "@/views/details.vue";
import loginCurso from "../views/loginCurso.vue";

const CursoDetails = () => import("@/views/Cursos.vue");
const  UserLogin= () => import("@/views/login.vue");

Vue.use(VueRouter);

const routes = [
  {
  path: "/",
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
  {
    path: "/users/signin",
    name: "UserSignin",
    component: UserLogin,
    meta: {
      requiresAuth: false,
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;