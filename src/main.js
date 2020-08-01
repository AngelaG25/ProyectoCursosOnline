import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

Vue.config.productionTip = false;


const firebaseConfig = {
  apiKey: "AIzaSyBexPWp-0nqSyILp17aLYLgddDnMgk8aFs",
  authDomain: "cursos-online-56e21.firebaseapp.com",
  databaseURL: "https://cursos-online-56e21.firebaseio.com",
  projectId: "cursos-online-56e21",
  storageBucket: "cursos-online-56e21.appspot.com",
  messagingSenderId: "525622363539",
  appId: "1:525622363539:web:3ae461f61a994de7471466"
};

export default firebase.initializeApp(firebaseConfig);


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

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
