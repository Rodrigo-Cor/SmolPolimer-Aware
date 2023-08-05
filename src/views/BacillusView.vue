<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 my-4 text-center">
        <h2 class="form-title">
          Degradación por Bacterias Bacillus (Simulación)
        </h2>
      </div>
    </div>
    <div>
      <SimulationForm
        @values-updated="handleValuesUpdated"
        @results-updated="handleResultsUpdated"
      />
      <ProgressingChart
        v-if="formResults.length > 0"
        :values="formValues"
        :results="formResults"
        :key="chartKey"
      />
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
import SimulationForm from "@/components/SimulationForm.vue";
import ProgressingChart from "@/components/ProgressingChart.vue";
export default {
  name: "BacillusView",
  components: {
    SimulationForm,
    ProgressingChart,
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
      // Recibe los valores del componente del formulario
      this.formValues = values;
    },
    handleResultsUpdated(results) {
      this.formResults = results;
      this.chartKey++;
    },
  },
};
</script>
