<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 text-center">
        <h1 id="formTitle" >Filtración granular rápida (Simulación)</h1>
      </div>
    </div>
    <div>
      <AwarenessSimulationSection />
      <FiltracionForm
        @values-updated="handleValuesUpdated"
      />
      <FiltracionResults
        :values="formValues"
      />
      
    </div>
    <div>
      <p>Filtracion Values: {{ getFiltracionValues }}</p>
    </div>
  </div>
</template>
<style scoped>
#formTitle {
  font-size: 2rem;
  font-weight: bold;
  color: #50d890;
}
</style>
<script>
import AwarenessSimulationSection from "@/components/AwarenessSimulationSection.vue";
import FiltracionForm from "@/components/FiltracionForm.vue";
import FiltracionResults from "@/components/FiltracionResults.vue";
import { mapGetters } from "vuex";

export default {
  name: "FiltracionView",
  components: {
    AwarenessSimulationSection,
    FiltracionForm,
    FiltracionResults,
  },
  computed: {
    ...mapGetters(['getFiltracionValues']),
    microplastic() {
      return this.getFiltracionValues[0];
    },
    residue() {
      return this.getFiltracionValues[1];
    },
    treatment() {
      return this.getFiltracionValues[2];
    },
  },  
};
</script>
