<template>

<!-- Example row of columns -->
        <div class="row">
          <div class="col-md-4">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
            <router-link :to="/cursos/ + id" class="btn btn-primary"
        >Explorar</router-link>
          </div>
        </div>
</template>

<script>
export default {
  name: "RecepieCard",
  props: ["title", "category", "description", "id"],
};
</script>