<template>
  <div class="about">
    <p>
      Este proyecto es parte del taller Firebase + VueJs impulsado a través del
      programa Alumni en la UNAH-VS.
    </p>
    <div class="container col-6 mb-2">
      <h5 class="alert alert-info">Integrantes del equipo</h5>
    </div>

    <div class="container col-6 mb-5">
      <div class="alert alert-warning text-center">
        <ul class=" shadow-none">
          <li><h6>Angela Cruz</h6></li>
          <li><h6>Donald Ochoa</h6></li>
          <li><h6>Marvin Dominguez</h6></li>
        </ul>
      </div>
    </div>

    <div class="container col-6 mb-1">
      <h5 class="alert alert-info">Instructores</h5>
    </div>

    <div class="container col-6 mb-5">
      <div class="alert alert-warning text-center">
        <ul class=" shadow-none">
          <li><h6>Angelo Madrid</h6></li>
          <li><h6>Juan Ramos</h6></li>
        </ul>
      </div>
    </div>

    <div>
      <router-link class="nav-link" to="/crearcurso">Agregar Curso</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "about"
};
</script>
