<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 my-4 text-center">
        <h2 class="form-title">Filtración Granular Rápida (Simulación)</h2>
      </div>
    </div>
    <div>
      <AwarenessSimulationSection />
    </div>
  </div>
</template>
<style>
.form-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #50d890;
}
</style>
<script>
//import SimulationForm from "@/components/SimulationForm.vue";
//import ProgressingChart from "@/components/ProgressingChart.vue";
import AwarenessSimulationSection from "@/components/AwarenessSimulationSection.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "FiltracionView",
  components: {
    //SimulationForm,
    //ProgressingChart,
    AwarenessSimulationSection,
  },
  data() {
    return {
      formValues: [null, null, null, null],
      formResults: [],
      chartKey: 0,
    };
  },
  methods: {
    handleValuesUpdated(values) {
      // Recibe los datos dl componente de formulario
      this.formValues = values;
    },
    handleResultsUpdated(results) {
      // Recibe los resultados calculados del componente SimulationForm.
      this.formResults = results;
      this.chartKey++;
    },
  },
};
</script>

<style scoped></style>
