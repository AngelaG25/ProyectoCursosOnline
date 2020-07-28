<template>
  <!-- Example row of columns -->
<<<<<<< HEAD
  <div>
    <picture>
      <img src="../assets/img/portfolio/unnamed.png" width="80%" />
    </picture>
=======
 <div>
    <picture>
      <img src="../assets/img/unnamed.png" width="80%" />
    </picture>
    <div class="py-1 bg-info text-white">
        <img src="../assets/img/certificado.png" width="10%" />
    <strong > Incluye Certificación</strong>
     </div>
>>>>>>> angela
    <div class=" card-body">
      <h2 class="card-text">{{ title }}</h2>
      <p class="card-text text-justify">{{ description }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <router-link :to="/cursos/ + id" class="btn btn-primary"
            >Explorar</router-link
          >
        </div>
        <small class="text-muted">{{ category }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecepieCard",
  props: ["title", "category", "description", "id"]
};
</script>
