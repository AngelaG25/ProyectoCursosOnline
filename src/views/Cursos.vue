<template>
  <div class="container">
    <div class="col-lg-4 mr-auto">
      <picture>
        <img src="../assets/img/cloud.jpg" />
      </picture>
    </div>
    <div class="container text-justify col-md-10">
      <br/>
      <h1>{{ recepieSelected.title }}</h1>
      <br />
      <p>{{ recepieSelected.content }}</p>
      <small class="text-muted">{{ recepieSelected.category }}</small>
    </div>
<br/>
  <div class="center">
      <router-link to="/" class="btn btn-primary py-2 px-3">Inscribir Curso</router-link>
   
      <router-link to="/" class="btn btn-primary py-2 px-3 mt-sm-0 ml-sm-2">Regresar Inicio</router-link>
    
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