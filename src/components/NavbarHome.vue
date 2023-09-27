<template>
  <nav
    class="navbar bg-body-tertiary navbar-expand-lg navbar-dark"
    data-bs-theme="dark"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          src="../assets/smolpolimeraware.svg"
          alt="Logo"
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
        v-if="selectedOptionInitial['option'] !== ''"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarNav"
        v-if="selectedOptionInitial['option'] !== ''"
      >
        <div class="navbar-nav text-center">
          <router-link class="nav-link" to="/efectos"
            >Los microplásticos
          </router-link>
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
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavbarHome",
  computed: {
    ...mapGetters({
      selectedOptionInitial: "getSelectedOptionInitial",
    }),
  },
};
</script>
