<template>
  <!-- barra de navegacion-->
  <!-- <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="http://example.com"
              id="dropdown01"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Dropdown</a
            >
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav> -->
    <!-- muestra de los cursos disponibles para el usuarios-->
<div>
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
    <div class="container">
      <div
        v-for="recepie in recepies"
        :key="recepie.id"
        class="recepie-container"
      >
        <recepie-card
          :id="recepie.id"
          :title="recepie.title"
          :description="recepie.description"
          :category="recepie.category"
        />
      </div>
    </div>
  </div>
</template>

<script>
import cardRecepie from "@/components/CursoCard.vue";
import recepiesList from "@/assets/vistacursos.json";
export default {
  name: "Home",
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@300&display=swap");
.greet h1 {
  font-size: 3em;
}
.recepie-container {
  margin-bottom: 1em;
}

body {
  padding-top: 3.5rem;
}
</style>
