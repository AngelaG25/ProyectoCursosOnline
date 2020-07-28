<template>
<<<<<<< HEAD
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
        <label for="inputEmail" class="sr-only">Correo</label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Correo"
          autofocus
        />
        <!--required-->
      </div>
      <div class="col-md-12 mb-3">
        <label for="inputPassword" class="sr-only">Contraseña</label>
        <input
          type="password"
          id="inputPassword"
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
        <router-link to="/home" class="btn  btn-primary col-3"
          >Inicio</router-link
        >
      </div>
      <!--<button
        @click="sendToHome()"
        class="btn btn-lg btn-primary btn-block"
        type="submit"
      
        Inicio
      </button>-->
      <div class="alert alert-info mt-2">
        Recuerda que debes iniciar sesión con tu correo
      </div>

      <P class="mt-5 mb-3 text-muted">© 2020</P>
    </form>
=======
  <div class="main-content">
    <div class="container text-left col col-lg-4 form-container">
      <div class="form-group">
         <br />
          <br />
           <br />
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" />
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="authenticate">Submit</button>
    </div>
>>>>>>> angela
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  name: "login",
  methods: {
    sendToHome: function() {
      //alert("Pasar a principal");
      this.$router.push({ name: "/home" });
    }
  }
};
</script>
=======
  name: "UserLogin",
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
      this.$router.push({ name: "loginCurso" });
    }
  }
};
</script>
>>>>>>> angela
