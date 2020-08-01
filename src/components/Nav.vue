<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark ">
      <div class="container-fluid">
        <img
          src="../assets/img/portfolio/logo.png"
          alt="Inicio: Aprendo en Casa"
          aria-label="Inicio: Aprendo en Casa"
        />
        <button
          class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="navbar-collapse collapse " id="navbarResponsive">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <small class="text-muted">{{ userId }}</small>
            </li>
          </ul>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/loginCurso"
                >Dashboard</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/logUser/log"
                >Login</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/registro"
                >Register</router-link
              >
            </li>
            <li class="nav-item">
              <button v-on:click="logout" class="btn nav-link">
                LogOut
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from "../firebase/firebase-setup";

export default {
  name: "Nav",

  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  // created() {
  //   if (firebase.auth().currentUser) {
  //     this.isLoggedIn = true;
  //     this.currentUser = firebase.auth().currentUser.email;
  //   }
  // },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/logUser/log");
        });
    },
       created() {
    let user = firebase.auth().currentUser;
    this.email = user.email;
  }
  }
};
</script>

<style scoped>
.nav-item {
  padding: 5px;
}
</style>
