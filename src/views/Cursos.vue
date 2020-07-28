<template>
  <div class="container">
    <div class="text-left mb-3">
      <router-link to="/" class="btn btn-primary">Regresar</router-link>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ recepieSelected.title }}</h5>
        <p class="card-text text-justify">{{ recepieSelected.content }}</p>
        <small class="text-muted">{{ recepieSelected.category }}</small>
      </div>
      <button
        class="btn btn-primary col-2 align-items-center"
        @click="addCursoToCart()"
      >
        Inscribir curso
      </button>
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
  methods: {
    addCursoToCart: function() {
      alert("Curso agregado correctamente");
    }
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
