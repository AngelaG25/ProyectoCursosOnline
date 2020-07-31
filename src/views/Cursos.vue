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
              <h1>{{ recepieSelected.title }}</h1>
              <h1>{{ $doc.data().Title }}</h1>
              <br />
              <p>{{ recepieSelected.Content }}</p>
              <small class="text-muted">{{ recepieSelected.Category }}</small>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="center">
        <router-link to="/" class="btn btn-primary py-2 px-3"
          >Inscribir Curso</router-link
        >

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
//import recepieList from "@/assets/vistacursos.json";
import recepieList from "@/firebase/firebase-setup.js";
const db = recepieList.firestore();
//const storage = firebase.storage().ref();

export default {
  name: "CursoDetails",
  props: ["id"],
  data() {
    return {
      recepieSelected: {}
    };
  },
  // methods: {
  //   addCursoToCart: function() {
  //     alert("Curso agregado correctamente");
  //   }
  // },
  created() {
    for (const r of recepieList) {
      if (r.id == this.id) {
        this.recepieSelected = r;
      }
    }
  },
  mounted() {
    db.collection("Cursos/")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(`${doc.id} => ${doc.data().Title}`);
          console.log(`${doc.id} => ${doc.data().Description}`);
          console.log(`${doc.id} => ${doc.data().Content}`);
        });
      });
  }

  // mounted() {
  //   db.collection("Cursos/")
  //     .get()
  //     .then(querySnapshot => {
  //       querySnapshot.forEach(doc => {
  //         console.log(`${doc.id} => ${doc.data().title}`);
  //       });
  //     });
  // }

  // mounted() {
  //   this.getImage(this.id);
  // },

  // methods: {
  //   async getRecepie() {
  //     try {
  //       //const t = new Date();
  //       const result = await db.doc(`Cursos/${this.id}`).get();
  //       this.recepieSelected = result.data();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   // async getImage(id) {
  //   //   try {
  //   //     const url = await storage.child(`images/${id}.jpg`).getDownloadURL();

  //   //     const image = document.getElementById("image");
  //   //     image.src = url;
  //   //   } catch (error) {
  //   //     console.log(error);
  //   //   }
  //   // }
  // }
};
</script>
