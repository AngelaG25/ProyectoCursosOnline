<template>

  <div class="container text-center  col-lg-3 ">
    <form class="form-signin ">
      <img
        src="../assets/img/portfolio/Mineduc-1024x850.jpg"
        alt=""
        width="100"
        height="100"
      />

      <h1 class="h3 mb-3 font-weight-normal">Inicio de Sesión</h1>
      <div class="col-md-12 mb-3">
        <label for="email" class="sr-only">Correo</label>
        <input
          type="email"
          id="email" 
          v-model="email"
          class="form-control"
          placeholder="Correo"
          autofocus
        />
        <!--required-->
      </div>
      <div class="col-md-12 mb-3">
        <label for="password" class="sr-only">Contraseña</label>
        <input
          type="password"
          id="password" 
          v-model="password"
          class="form-control"
          placeholder="Contraseña"
        />
        <!--required-->
      </div>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Permanecer conectado
        </label>
      </div>
      <div>
        <button
        @click.prevent="authenticate"
        class="btn btn-lg btn-primary btn-block"
        type="submit">
        Inicio
      </button>
        <!-- <router-link to="/loginCurso" class="btn  btn-primary col-3"
          >Inicio</router-link> -->
      </div>
      
      <div class="alert alert-info mt-2">
        Recuerda que debes iniciar sesión con tu correo
      </div>

      <P class="mt-5 mb-3 text-muted">© 2020</P>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    authenticate() {
      if (this.email != "example@email.com" || this.password != "1234") {
        return;
      }
      // loguear al usuario y redirigir a la pagina principal.
      this.$store.commit("setUser", { email: this.email });
      this.$router.push({ name: "/loginCurso" });
    }
  }
};
</script>
