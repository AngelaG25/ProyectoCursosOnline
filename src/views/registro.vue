<template>
  <div class="container text-center  col-lg-3 ">
    <form class="form-signin ">
      <img
        src="../assets/img/portfolio/Mineduc-1024x850.jpg"
        alt=""
        width="100"
        height="100"
      />
      <div class="container">
        <h1 class="h4 mb-3 font-weight-normal">Registro de Estudiantes</h1>

        <!-- <div class="col-md-12 mb-3">
          <label for="firstName" class="sr-only">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="Nombre"
            value=""
            required
            autofocus
          />
          <div class="invalid-feedback">
            Valid first name is required.
          </div>
        </div>

        <div class="col-md-12 mb-3">
          <label for="lastName" class="sr-only">Apellidos</label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="Apellidos"
            value=""
            required
          />
          <div class="invalid-feedback">
            Valid last name is required.
          </div>
        </div>-->

        <div class="col-md-12 mb-3">
          <label for="email" class="sr-only"
            >Correo <span class="text-muted"></span
          ></label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="email"
            placeholder="Correo"
          />
          <div class="invalid-feedback">
            Please enter a valid email address for shipping updates.
          </div>
        </div>

        <div class="col-md-12 mb-3">
          <label for="inputPassword" class="sr-only">Contraseña</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
            placeholder="Contraseña"
            required
          />
          <div class="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div>

        <hr class="col-md-10 mb-3" />
        <button
          v-on:click="Registro"
          class="btn btn-primary btn-lg btn-block"
          type="submit"
        >
          Registrar
        </button>
      </div>
      <P class="mt-5 mb-3 text-muted">© 2020</P>
    </form>
  </div>
</template>

<script>
import firebase from "../firebase/firebase-setup";

export default {
  name: "registro",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    //creacion del usurario en la base de datos firebase
    Registro: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            // console.log(user);
            alert(`Cuenta creada para ${user.email}`);
            this.$router.push("/login");
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  }
};
</script>
