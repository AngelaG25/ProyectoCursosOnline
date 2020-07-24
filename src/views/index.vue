<template>
  <div>
    <nav
      class="navbar navbar-expand-lg bg-dark text-uppercase fixed-top"
      id="mainNav"
    >
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <h1 class="masthead-heading text-uppercase mb-0 font-weight-bold">
            YO
          </h1>
        </a>
        <img
          src="../assets/img/portfolio/logo.png"
          alt="Inicio: Aprendo en Casa"
          aria-label="Inicio: Aprendo en Casa"
        />
        <button
          class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <router-link to="/home" class="btn btn-outline-primary"
                >Home
              </router-link>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <router-link to="/logUser/log" class="btn btn-outline-primary"
                >Iniciar sesión
              </router-link>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <router-link to="/users/signin" class="btn btn-outline-primary"
                >Registrarse
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Masthead-->
    <header class="masthead bg-primary text-white p-5">
      <section class="center">
        <div class="container">
          <!-- About Section Content-->
          <div class="row">
            <div class="col-lg-6 ml-auto">
              <h2 class="font-weight-bold">
                Adquiere nuevas habilidades para un mundo digital
              </h2>
              <p class="lead text-justify">
                Desarrolla tu carrera profesional o expande tu empresa a tu
                propio ritmo mediante cursos de formación flexibles y
                personalizados, diseñados para fortalecer tu confianza y
                ayudarte a crecer.
              </p>
            </div>
            <div class="col-lg-4 mr-auto">
              <picture>
                <img src="../assets/img/portfolio/estudiante1.jpg" />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </header>
    <!-- Portfolio Section-->
    <div>
      <section class="page-section p-5">
        <!-- Portfolio Section Heading-->
        <h2 class="page-section-heading text-center font-weight-bold">
          Pasos simples para tu crecimiento
        </h2>
        <!-- Icon Divider-->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- Portfolio Grid Items-->
        <div class="row">
          <!-- Portfolio Item 1-->
          <div class="col-lg-3 ml-auto p-2 bd-highlight">
            <img
              class="three-steps-carousel__item-icon"
              src="../assets/img/portfolio/habilidad.png"
              alt="Aprende a tu ritmo icon"
            />
            <h3 class="font-weight-bold">
              Selecciona una habilidad
            </h3>
            <p class="lead  text-justify">
              Sin importar si eres un estudiante o una empresa, si acabas de
              comenzar o ya tienes algo de experiencia, aquí puedes elegir las
              lecciones que sean adecuadas para ti.
            </p>
          </div>

          <div class="col-lg-3 ml-auto p-2 bd-highlight">
            <img
              class="three-steps-carousel__item-icon"
              src="../assets/img/portfolio/calendario.png"
              alt="Aprende a tu ritmo icon"
            />
            <h3 class="font-weight-bold">
              Aprende a tu ritmo
            </h3>
            <p class="lead  text-justify">
              Crea un plan de aprendizaje único en tu ordenador, smartphone o
              tablet.
            </p>
          </div>

          <div class="col-lg-3 ml-auto p-2 bd-highlight">
            <img
              class="three-steps-carousel__item-icon"
              src="../assets/img/portfolio/certificado.png"
              alt="Aprende a tu ritmo icon"
            />
            <h3 class="font-weight-bold">
              Obtén la certificación
            </h3>
            <p class="lead text-justify">
              Realiza un seguimiento de tu progreso y recibe un certificado
              acreditado para mejorar tu CV o perfil de LinkedIn.
            </p>
          </div>
        </div>
      </section>
    </div>
    <!-- Copyright Section-->
    <div class="bg-secondary py-4 text-center text-white">
      <div class="container">
        <small>Copyright © 2020</small>
      </div>
    </div>
  </div>
</template>
