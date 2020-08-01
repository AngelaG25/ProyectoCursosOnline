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
          <label for="Title" class="sr-only">Título</label>
          <input
            v-model="Title"
            type="text"
            class="form-control"
            id="Title"
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
          <label for="Description" class="sr-only">Descripción</label>
          <input
            type="text"
            class="form-control"
            id="Description"
            v-model="Description"
            placeholder="Descripción del curso"
            value=""
            required
          />
          <div class="invalid-feedback">
            Valid last name is required.
          </div>
        </div>

        <div class="col-md-12 mb-3">
          <label for="Content" class="sr-only">Contenido</label>
          <input
            v-model="Content"
            type="text"
            class="form-control"
            id="Content"
            placeholder="Contenido del curso"
            value=""
            required
          />
          <div class="invalid-feedback">
            Valid last name is required.
          </div>
        </div>
        <div class="col-md-12 mb-3">
          <label for="Category" class="sr-only">Categoria</label>
          <input
            v-model="Category"
            type="text"
            class="form-control"
            id="Category"
            placeholder="Categoria del curso"
            value=""
            required
          />
          <div class="invalid-feedback">
            Valid last name is required.
          </div>
        </div>

        <div class="col-md-12 mb-3">
          <div class="custom-file">
            <input
              type="file"
              class="custom-file-input"
              id="customFile"
              ref="recepieImg"
            />
            <label class="custom-file-label" for="customFile">Imagen</label>
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
      Title: "",
      Description: "",
      Content: "",
      Category: ""
    };
  },
  methods: {
    addCourseToBD: function() {
      try {
        db.collection("Cursos")
          .add({
            Title: this.Title,
            Description: this.Description,
            Content: this.Content,
            Category: this.Category
          })
          .then(function(docRef) {
            // console.log("Curso agregado con el Document ID: ", docRef.id);
            alert("Curso agregado con el Document ID: " + docRef.id);
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
