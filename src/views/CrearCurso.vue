<template>
  <div class="container text-center  col-lg-3 ">
    <div class="form-signin ">
      <img
        src="../assets/img/portfolio/Mineduc-1024x850.jpg"
        alt=""
        width="100"
        height="100"
      />
      <div class="container">
        <h1 class="h4 mb-3 font-weight-normal">Registro de Cursos</h1>

        <div class="col-md-12 mb-3">
          <label for="title" class="sr-only">Título</label>
          <input
            v-model="title"
            type="text"
            class="form-control"
            id="title"
            placeholder="Título"
            value=""
            required
            autofocus
          />
          <div class="invalid-feedback">
            Valid first name is required.
          </div>
        </div>

        <div class="col-md-12 mb-3">
          <label for="description" class="sr-only">Descripción</label>
          <input
            type="text"
            class="form-control"
            id="description"
            v-model="description"
            placeholder="Descripción del curso"
            value=""
            required
          />
          <div class="invalid-feedback">
            Valid last name is required.
          </div>
        </div>

        <div class="col-md-12 mb-3">
          <label for="content" class="sr-only">Contenido</label>
          <input
            v-model="content"
            type="text"
            class="form-control"
            id="content"
            placeholder="Contenido del curso"
            value=""
            required
          />
          <div class="invalid-feedback">
            Valid last name is required.
          </div>
        </div>

        <!-- <div class="col-md-12 mb-3">
          <label for="cursoContent" class="sr-only"
            >ContenidoCurso <span class="text-muted"></span
          ></label>
          <input
            type="email"
            class="form-control"
            id="cursoContent"
            placeholder="Contenido"
          />
          <div class="invalid-feedback">
            Please enter a valid data.
          </div>
        </div> -->

        <!-- <div class="col-md-12 mb-3">
          <label for="inputPassword" class="sr-only">Contraseña</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Contraseña"
            required
          />
          <div class="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div> -->

        <hr class="col-md-10 mb-3" />
        <button
          class="btn btn-primary btn-lg btn-block"
          @click="addCourseToBD()"
        >
          Agregar a BD
        </button>
      </div>
      <P class="mt-5 mb-3 text-muted">© 2020</P>
    </div>
  </div>
</template>
<script>
import firebase from "@/firebase/firebase-setup.js";
//const storage = firebase.storage().ref();
var db = firebase.firestore();

export default {
  name: "CrearCurso",
  data() {
    return {
      title: "",
      description: "",
      content: ""
    };
  },
  methods: {
    //   addCourseToBD() {
    //     try {
    //       // Estructura de documento que se va a guardar.
    //       const cursos = {
    //         title: this.title,
    //         description: this.description,
    //         category: this.category,
    //         content: this.content,
    //         //userId: firebase.auth().currentUser.uid
    //       };

    //       // Guardar datos en la base de datos.
    //       //const data = await db.collection("cursos").add(cursos);

    //       db.collection("cursos").add(cursos);
    //         // .then(function(docRef) {
    //         //   console.log("Curso agregado con el Document ID: ", docRef.id);
    //         // })
    //         // .catch(function(error) {
    //         //   console.error("Error adding document: ", error);
    //         // });

    //       // Obtener archivo de imagen del DOM.
    //       //const imgFile = this.$refs.cursosImg.files[0];

    //       // Guardar archivo en firebase Storage.
    //       //await storage.child("images/" + data.id + ".jpg").put(imgFile);

    //       this.$router.push({ name: "HIndex" });
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    // }

    // methods: {
    addCourseToBD: function() {
      try {
        db.collection("Cursos")
          .add({
            title: this.title,
            description: this.description,
            content: this.content
          })
          .then(function(docRef) {
            console.log("Curso agregado con el Document ID: ", docRef.id);
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
