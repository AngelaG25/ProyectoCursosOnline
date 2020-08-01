<template>
  <!-- barra de navegacion-->
  <div>
    <!-- muestra de los cursos disponibles para el usuarios-->
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">Cursos online</h1>
        <p>
          Descubre un amplio contenido de formación gratuita para impulsar tu
          negocio o carrera profesional. Aprende todo lo que necesites
          seleccionando módulos para explorar y aprender
        </p>
        <div>
      <router-link  class="btn btn-primary py-2 px-3 mt-sm-0 ml-sm-2" to="/crearcurso">Agregar Curso</router-link>
    </div>
      </div>
    </div>
    <section>
      <div class=" py-5  bg-light">
        <div class="container">
          <div class="row">
            <div
              class=" col-sm-4  "
              v-for="recepie in recepies"
              :key="recepie.id"
            >
              <div class=" card p-4 mb-4 shadow-sm " style="height: 32em ;">
                <recepie-card
                  :id="recepie.id"
                  :Title="recepie.Title"
                  :Description="recepie.Description"
                  :Category="recepie.Category"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import cardRecepie from "@/components/CursoCard.vue";
import firebase from "@/firebase/firebase-setup.js";
const db = firebase.firestore();
export default {
  name: "loginCurso",
  data() {
    return {
      recepies: []
    };
  },

  created() {
    this.getRecepies();
  },

  methods: {
<<<<<<< HEAD
    // async logOut() {
    //   try {
    //     await firebase.auth().signOut();
    //     this.$router.push({ name: "login" });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

=======
    async logOut() {
      try {
        await firebase.auth().signOut();
        this.$router.push({ name: "login" });
      } catch (error) {
        console.log(error);
      }
    },
>>>>>>> 3ed11417e884caaac222389fd6a5f48b25ea57e2
    async getRecepies() {
      try {
        // Obtener la lista de documentos.
        const result = await db
          .collection("Cursos")
          // .where("category", "==", "cocina italiana")
          .get();

        // Reiniciar arreglo de recetas.
        this.recepies = [];

        // Recorrer la lista para agregar la data
        // al arreglo local de recetas.
        result.forEach(doc => {
          const r = doc.data();
          r.id = doc.id;

          this.recepies.push(r);
        });
      } catch (error) {
        console.log(error);
      }
    }
  },

  components: {
    "recepie-card": cardRecepie
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fondamento&display=swap");

.greet h1 {
  font-family: "Fondamento", cursive;
  font-size: 5em;
}

.recepie-container {
  margin-bottom: 1em;
}
</style>
