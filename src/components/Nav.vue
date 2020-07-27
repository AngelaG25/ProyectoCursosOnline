<template lang="es">
<div>
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <img
          src="../assets/img/portfolio/logo.png"
          alt="Inicio: Aprendo en Casa"
        />
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <!--<a class="nav-link" href="#">Left</a>-->
            </li>
            <li class="nav-item">
                <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
            </li>
        </ul>
    </div>    
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link class="nav-link" to="/login">Login</router-link>                
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/registro">Register</router-link>
            </li>
        </ul>
    </div>
</nav>
</div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped>
.nav-item {
  padding: 5px;
}
</style>

<!-- <div>
    <nav class="navbar navbar-expand-md navbar-dark  bg-dark">
      <!--fixed-top-
      <a class="navbar-brand" href="#"></a>
                  <img
          src="../assets/img/portfolio/logo.png"
          alt="Inicio: Aprendo en Casa"
          aria-label="Inicio: Aprendo en Casa"
        />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-5">          
          <li class="nav-item active">
            <!--<a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >--
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
            <!--<a class="nav-link" href="#">Link</a>--
          </li>
          <div class="nav right-align">
            <li class="nav-item right-align" >
              <router-link class="nav-link" to="/login">Login</router-link>
              <!--<a class="nav-link disabled text-right" href="#">Inicio de Sesion</a>--
            </li>
            <li class="nav-item" >
              <router-link class="nav-link" to="/registro">Register</router-link>
              <!--<a class="nav-link disabled text-right" href="#">Inicio de Sesion</a>--
            </li>
          </div>
        </ul>
      </div>
    </nav>
</div> -->
