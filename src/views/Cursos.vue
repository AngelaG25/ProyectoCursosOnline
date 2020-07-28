<template>
<<<<<<< HEAD
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
=======
<div>
  <picture>
        <img src="../assets/img/portada.jpg" width="100%" />
      </picture>
   <div class="py-5 bg-light">
  <div class="container">
    
    <div class="card">
      <div class="card-body">
    <div class="container text-justify col-md-10">
      <br/>
      <h1>{{ recepieSelected.title }}</h1>
      <br />
      <p>{{ recepieSelected.content }}</p>
      <small class="text-muted">{{ recepieSelected.category }}</small>
    </div>
>>>>>>> angela
    </div>
    </div>
    </div>
<br/>
  <div class="center">
      <router-link to="/" class="btn btn-primary py-2 px-3">Inscribir Curso</router-link>
   
      <router-link to="/" class="btn btn-primary py-2 px-3 mt-sm-0 ml-sm-2">Regresar Inicio</router-link>
    
  </div>
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
