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
          <router-link class="nav-link" to="/presencia"
            >Presencia en México</router-link
          >
          <router-link class="nav-link" to="/contaminacion"
            >Combatir contra la contaminación</router-link
          >
          <router-link class="nav-link" to="/tecnicas"
            >Técnicas de limpieza
          </router-link>
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
