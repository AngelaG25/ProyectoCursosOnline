import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
//import "./components/login.js";
//import "https:/unpkg.com/axios/dist/axios.min.js";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  // obtener estado de usuario (logueado o no)
  const isAuth = store.getters.isAuthenticated;

  // Revisar que permisos necesita cada ruta
  if (!isAuth && to.meta.requiresAuth) {
    next({
      name: "UserSignin",
    });
  } else if (isAuth && !to.meta.requiresAuth) {
    next({
      name: "loginCurso",
    });
  } else {
    // si no tiene ninguna regla solo pasar a la ruta
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
