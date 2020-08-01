<template>
  <!-- Example row of columns -->

  <div>
    <picture>
      <img src id="image" width="50%" />
    </picture>

    <div class="py-1 bg-info text-white">
      <img src="../assets/img/certificado.png" width="10%" />
      <strong> Incluye Certificación</strong>
    </div>

    <div class=" card-body">
      <h2 class="card-text">{{ Title }}</h2>
      <p class="card-text text-justify">{{ Description }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <router-link :to="/cursos/ + id" class="btn btn-primary"
            >Explorar</router-link
          >
        </div>
        <small class="text-muted">{{ Category }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecepieCard",
  props: ["Title", "Content", "Description", "Category", "id", "image"]
};
</script>
