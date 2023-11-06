<template>
  <footer class="text-center text-lg-start">
    <section class="my-2">
      <SectionSharing />
    </section>
    <section
      class="text-center p-3"
      style="background-color: rgba(0, 0, 0, 0.2)"
    >
      TT 2023-B007. Prototipo de aplicación web progresiva para concientizar
      sobre riesgos de contaminación por microplásticos en el agua
    </section>
    <section class="container p-4">
      <section class="row">
        <article class="col-lg-4 col-md-12 mb-4 mb-md-0">
          Corona Rivera Rodrigo
        </article>
        <article class="col-lg-4 col-md-12 mb-4 mb-md-0">
          Cortés Lugo Arturo
        </article>
        <article class="col-lg-4 col-md-12 mb-4 mb-md-0">
          Hernandéz Penilla Diego Armando
        </article>
      </section>
    </section>
  </footer>
</template>

<script>
import SectionSharing from "./SectionSharing.vue";
export default {
  name: "FooterHome",
  components: {
    SectionSharing,
  },
};
</script>

<style scoped>
footer {
  background-color: #2b3035;
  color: #fff;
  padding: 20px;
  margin-top: auto;
  width: 100%;
}
</style>
