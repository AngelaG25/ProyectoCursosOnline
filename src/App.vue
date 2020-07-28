<template>
  <div id="app">
    <div id="Nav"></div>
    <Nav />
    <hr />
    <router-view />
    <br/>
    <div>
     <div class="bg-secondary py-4 text-center text-white">
      <div class="container">
        <small>Copyright © 2020</small>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
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
