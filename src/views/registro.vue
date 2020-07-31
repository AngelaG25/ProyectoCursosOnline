<template>
  <div class="container text-center  col-lg-3 ">
    <form class="form-signin " @submit.prevent="registro">
      <img
        src="../assets/img/portfolio/Mineduc-1024x850.jpg"
        alt=""
        width="100"
        height="100"
      />
      <div class="container">
        <h1 class="h4 mb-3 font-weight-normal">Registro de Estudiantes</h1>

        <div class="col-md-12 mb-3">
          <label for="name" class="sr-only">Nombre</label>
          <input
            type="text"
            v-model="name"
            class="form-control"
            id="name"
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
          v-on:click="registro"
          class="btn btn-primary btn-lg btn-block"
          type="submit"
        >
          Registrar
        </button>
      </div>
      <div class="alert alert-warning" role="alert" v-if="error">
          {{error}}
      </div>
      <P class="mt-5 mb-3 text-muted">© 2020</P>
    </form>

  </div>
</template>

<script>
import firebase from 'firebase'
import '@/firebase/init'

export default {
 
  data() {
    return {
      name: '',
      email: '',
      password: '',
      error: ''
    };
  },

   name: "Registro",

  methods: {

  
    registro() {
      this.error= ''
      if (this.name && this.email && this.password){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
            this.name=''
            this.email=''
            this.password=''
            console.log(user)
          }).catch(function(error) {
            this.error = err.message
          })
      }else {
        this.error='Todos los campos son requeridos'
      }
    }
  } 
};
</script>
