import Vue from "vue";
import VueRouter from "vue-router";
import LoginCurso from "../views/loginCurso.vue";
import firebase from "../firebase/firebase-setup";

const homeindex = () => import("@/views/index.vue");

const Login = () => import("@/views/login.vue");
const Registro = () => import("@/views/registro.vue");
const CursoDetails = () => import("@/views/Cursos.vue");
//const AddCurso = () => import("@/views/AddCurso.vue");

const About = () => import("@/views/About.vue");
const crearcurso = () => import("@/views/CrearCurso.vue");

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "HIndex",
      component: homeindex
      // meta: {
      //   requiresGuest: true
      // }
    },
    {
      path: "/about",
      name: "about",
      component: About
      // meta: {
      //   requiresGuest: true
      // }
    },
    {
      path: "/logUser/log",
      name: "login",
      component: Login
      // meta: {
      //   requiresGuest: true
      // }
    },

    {
      path: "/registro",
      name: "registro",
      component: Registro
      // meta: {
      //   requiresGuest: true
      // }
    },

    {
      path: "/loginCurso",
      name: "loginCurso",
      component: LoginCurso,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/cursos/:id",
      name: "RecepieContent",
      props: true,
      component: CursoDetails,
      meta: {
        requiresAuth: true
      }
    },
    // {
    //   path: "/addcurso",
    //   name: "addcurso",
    //   // props: true,
    //   component: AddCurso
    // },
    {
      path: "/crearcurso",
      name: "crearcurso",
      // props: true,
      component: crearcurso
    }
  ]
});

// validaciones de navegacion
// Nav Guard
router.beforeEach((to, from, next) => {
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NO logged user
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if NO logged user
    if (firebase.auth().currentUser) {
      // Go to login
      next({
        path: "/loginCurso",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});

export default router;
