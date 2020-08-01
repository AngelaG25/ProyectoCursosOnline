import Vue from "vue";
import VueRouter from "vue-router";
import loginCurso from "../views/loginCurso.vue";
import firebase from "../firebase/firebase-setup";

const homeindex = () => import("@/views/index.vue");

const Login = () => import("@/views/login.vue");
const Registro = () => import("@/views/registro.vue");
const CursoDetails = () => import("@/views/Cursos.vue");

const About = () => import("@/views/About.vue");

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "HIndex",
      component: homeindex,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/logUser/log",
      name: "LoginUser",
      component: Login,
      meta: {
        requiresGuest: true
      }
    },

    {
      path: "/registro",
      name: "registro",
      component: Registro,
      meta: {
        requiresGuest: true
      }
    },

    {
      path: "/loginCurso",
      name: "loginCurso",
      component: loginCurso,
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
    }
  ]
});

// Nav Guard
router.beforeEach((to, from, next) => {
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NO logged user
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/logUser/log',
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
        path: '/loginCurso',
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
