<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 my-4 text-center">
        <h2 class="form-title">Filtración Granular Rápida (Simulación)</h2>
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
  name: "FiltracionView",
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
      // Recibe los datos dl componente de formulario
      this.formValues = values;
    },
  },
};
</script>

<style scoped></style>
