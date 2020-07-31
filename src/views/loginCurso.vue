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
        <p>
          <a class="btn btn-primary btn-lg" href="#" role="button"
            >Learn more &raquo;</a
          >
        </p>
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
              <div class=" card p-4 mb-4 shadow-sm " style="height: 40em ;">
                <recepie-card
                  :id="recepie.id"
                  :title="recepie.title"
                  :description="recepie.description"
                  :category="recepie.category"
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
import recepiesList from "@/assets/vistacursos.json";
export default {
  name: "Curso",
  data() {
    return {
      recepies: recepiesList
    };
  },
  components: {
    "recepie-card": cardRecepie
  }
};
</script>

<style scoped></style>
