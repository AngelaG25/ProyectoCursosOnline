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
        <label for="inputEmail" class="sr-only">Correo</label>
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
        <label for="inputPassword" class="sr-only">Contraseña</label>
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
        <!-- <router-link to="/loginCurso" class="btn  btn-primary col-3"
        >Inicio</router-link
      > -->
        <button class="btn  btn-primary col-3" type="submit">
          Inicio
        </button>
         <!-- <button v-on:click="login" class="btn  btn-primary col-3" type="submit">
          Inicio
        </button> -->
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
  </div>
</template>

<script>
// import firebase from "../firebase/firebase-setup";

export default {
  name: "login"

  // data: function() {
  //   return {
  //     email: "",
  //     password: ""
  //   };
  // },
  // methods: {
  // //   login: function(e) {
  // //     firebase
  // //       .auth()
  // //       .signInWithEmailAndPassword(this.email, this.password)
  // //       .then(
  // //         user => {
  // //           alert(`You are logged in as ${user.email}`);
  // //           this.$router.push("/loginCurso");
  // //         },
  // //         err => {
  // //           alert(err.message);
  // //         }
  // //       );
  // //     e.preventDefault();
  // //   }
  // // }
  // // methods: {
  // // sendToHome: function() {
  // //alert("Pasar a principal");
  // //  this.$router.push({ name: "/loginCurso" });
  // // }
  //  }
};
</script>
