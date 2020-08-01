<template>
  <div id="app">
    <div id="Nav"></div>
    <Nav />
    <hr />
    <router-view />
  </div>
</template>

<script>
import firebase from "@/firebase/firebase-setup.js";
import Nav from "@/components/Nav.vue";
export default {
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.commit("setUser", { uid: user.uid });
      } else {
        this.$store.commit("setUser", null);
      }
    });
  },

  components: {
    Nav
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
