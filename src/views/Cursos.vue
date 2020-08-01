<template>
  <div>
    <picture>
      <img src="../assets/img/portada.jpg" width="100%" />
    </picture>
    <div class="py-5 bg-light">
      <div class="container">
        <div class="card">
          <div class="card-body">
            <div class="container text-justify col-md-10">
              <br />
              <h1>{{ recepieSelected.Title }}</h1>
              <br />
              <p>{{ recepieSelected.Content }}</p>
              <small class="text-muted">{{ this.email }}</small>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="center">
         <button
          class="btn btn-primary py-2 px-3"
          @click=" adduserToBD()"
        >
         Inscribir Curso
        </button>

        <router-link
          to="/loginCurso"
          class="btn btn-primary py-2 px-3 mt-sm-0 ml-sm-2"
          >Regresar Inicio</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>

import firebase from "@/firebase/firebase-setup.js";
const db = firebase.firestore();
const storage = firebase.storage().ref();

export default {
 
  name: "CursoDetails",
  props: ["id"],

  data() {
    return {
      recepieSelected: {},
      Listauser: [],
      validacion:[]
    };

  },

  created() {
    this.getRecepie();
    let user = firebase.auth().currentUser;
    this.email = user.email;
  },

  mounted() {
    this.getImage(this.id);
  },

  methods: {
    async getRecepie() {
      try {
        const result = await db.doc(`Cursos/${this.id}`).get();
        this.recepieSelected = result.data();
      } catch (error) {
        console.log(error);
      }
    },

    async getImage(id) {
      try {
        const url = await storage.child(`images/${id}.jpg`).getDownloadURL();

        const image = document.getElementById("image");
        image.src = url;
      } catch (error) {
        console.log(error);
      }
    },

//añadir usuarios al curso
     async adduserToBD() {
       

      try {
          // const cursosRef =db.child('cursos');
          // cursosRef.orderByChild('Title');

            const courseUser = {
            userId: firebase.auth().currentUser.uid,
            courseId: this.id
            
            };

             db.collection("cursoRegistrado").add(courseUser);
            //  if( courseUser.id == courseUser.id){
              if(confirm('Estas seguro que deseas inscribir este curso?')) {
                 alert("Usuario inscrito en el curso");
                  this.$router.push("/loginCurso");
                  }
              // else
              // alert("Este usuario ya esta inscrito en este curso");
              // }

          }catch(error) {
            console.error("Error adding document: ", error);
          };
        // const imgFile = this.$refs.recepieImg.files[0];

        // Guardar archivo en firebase Storage.
        // await storage.child("images/" + data.id + ".jpg").put(imgFile);
      
    }
  }
};
</script>
