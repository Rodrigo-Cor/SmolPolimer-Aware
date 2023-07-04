<template>
  <div class="home">
    <nav
      class="navbar bg-body-tertiary navbar-expand-lg navbar-dark"
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img
            src="../assets/smolpolimeraware.svg"
            alt="Logotipo de Smol Polimeraware"
            width="40"
            height="40"
            class="d-inline-block align-text-top"
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav text-center">
            <router-link class="nav-link" to="/efectos"
              >Los microplásticos</router-link
            >
            <router-link class="nav-link" to="/filtracion"
              >Filtración granular rápida</router-link
            >
            <router-link class="nav-link" to="/bacillus"
              >Degradación por bacterias Bacillus</router-link
            >
          </div>
        </div>
      </div>
    </nav>
    <router-view />
    <footer class="text-lg-start">
      <div class="text-center p-3 text-light">Referencias</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#logo {
  max-width: 15%;
  height: auto;
}

footer {
  background-color: #2b3035;
  color: #fff;
  padding: 20px;
  margin-top: auto; /* Mueve el footer hacia abajo */
  width: 100%;
}
</style>
