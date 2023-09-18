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
          v-if="selectedOptionInitial['option'] !== ''"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" v-if="selectedOptionInitial['option'] !== ''">
          <div class="navbar-nav text-center">
            <router-link
              class="nav-link"
              to="/efectos"
              >Los microplásticos
            </router-link>
            <router-link
              class="nav-link"
              to="/filtracion"
              >Filtración granular rápida</router-link
            >
            <router-link
              class="nav-link"
              to="/bacillus"
              >Degradación por bacterias Bacillus</router-link
            >
            <router-link
              class="nav-link"
              to="/graficas"
              >Graficas</router-link
            >
          </div>
        </div>
      </div>
    </nav>
    <router-view v-if="isHomeView">
      <CarouselHome />
      <AwarenessHomeSection />
      <InfoSection
        :img="require('@/assets/naja-bertolt-jensen-FxnqdmKBJps-unsplash.jpg')"
        :sideImage="false"
        :credits="[
          { 'Foto de ': '' },
          {
            'Naja Bertolt Jensen ':
              'https://unsplash.com/es/@naja_bertolt_jensen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          },
          { 'en ': '' },
          {
            Unsplash:
              'https://unsplash.com/es/fotos/FxnqdmKBJps?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          },
        ]"
        :arrayText="[
          `Desde 2016, se ha
      registrado un alarmante aumento en el uso de plásticos, especialmente
      productos de un solo uso, que han provocado la acumulación masiva en el
      medio ambiente.`,
        ]"
      />
      <InfoSection
        :img="require('@/assets/TheOceanCleanup3.jpg')"
        :sideImage="true"
        :credits="[{ 'Foto cortesía de The Ocean Cleanup': '' }]"
        :arrayText="[
          `En 2008, la National Oceanic and Atmospheric Administration (NOAA) estableció que el tamaño límite de los materiales para ser considerados microplásticos sería de 5 milímetros.`,
        ]"
      />
      <SectionReferences />
    </router-view>
    <router-view v-else />
    <footer class="text-lg-start">
      <div class="text-center p-3 text-light">
        Copyright. Derechos reservados
      </div>
    </footer>
  </div>
</template>

<script>
import CarouselHome from "@/components/CarouselHome.vue";
import InfoSection from "@/components/InfoSection.vue";
import SectionReferences from "@/components/SectionReferences.vue";
import AwarenessHomeSection from "@/components/AwarenessHomeSection.vue";

import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    CarouselHome,
    InfoSection,
    SectionReferences,
    AwarenessHomeSection,
  },
  computed: {
    isHomeView() {
      return this.$route.name === "HomeView";
    },
    ...mapGetters({
      selectedOptionInitial: "getSelectedOptionInitial",
    }),
  },
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
  margin-top: auto;
  width: 100%;
}
</style>
