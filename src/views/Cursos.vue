<template>
  <div>
    <div class="container text-left">
      <router-link to="/" class="btn btn-primary">Inscribir Curso</router-link>
    </div>

    <div class="container text-justify col-md-7">
      <h1>{{ recepieSelected.title }}</h1>
      <br />
      <p>{{ recepieSelected.content }}</p>
      <small class="text-muted">{{ recepieSelected.category }}</small>
    </div>
  </div>
</template>

<script>
import recepieList from "@/assets/vistacursos.json";
export default {
  name: "CursoDetails",
  props: ["id"],
  data() {
    return {
      recepieSelected: {}
    };
  },
  created() {
    for (const r of recepieList) {
      if (r.id == this.id) {
        this.recepieSelected = r;
      }
    }
  }
};
</script>
