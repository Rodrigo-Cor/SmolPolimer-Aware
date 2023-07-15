<template>
  <div class="container">
    <div class="row justify-content-start">
      <div class="col-sm-6 col-md-4 col-lg-3">
        <h2 class="form-title">
          Degradación por Bacterias Bacillus (Simulación)
        </h2>
      </div>
    </div>
    <div>
      <SimulationForm @values-updated="handleValuesUpdated" />
      <ProgressingChart :values="formValues" />
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
      formValues: null,
    };
  },
  methods: {
    handleValuesUpdated(values) {
      // Recibe los valores del componente del formulario
      this.formValues = values;
    },
  },
};
</script>
