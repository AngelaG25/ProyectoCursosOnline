<template>
  <!-- Example row of columns -->

  <div>
    <div class="col-lg-4 mr-auto">
      <picture>
        <img src="../assets/img/portfolio/unnamed.png" />
      </picture>
    </div>

    <h2>{{ title }}</h2>
    <p class="text-justify">{{ description }}</p>

    <div class="d-flex justify-content-between align-items-center">
      <div class="btn-group">
        <router-link :to="/cursos/ + id" class="btn btn-primary"
          >Explorar</router-link
        >
      </div>
      <small class="text-muted">{{ category }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecepieCard",
  props: ["title", "category", "description", "id"]
};
</script>
