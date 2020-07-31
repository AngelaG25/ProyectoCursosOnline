import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "./firebase/firebase-setup";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

Vue.config.productionTip = false;

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
