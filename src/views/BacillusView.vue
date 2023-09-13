<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 my-4 text-center">
        <h1 class="form-title">
          Degradación por Bacterias Bacillus (Simulación)
        </h1>
      </div>
    </div>
    <div>
      <GenericAlert
        :alertTitle="'¿Usar valores por defecto?'"
        :alertText="'Ve a la simulación con valores por defecto o asígnalos por medio del formulario.'"
        :alertIcon="'question'"
        :alertConfirmButton="'Formulario'"
        :alertToDenyButton= true
        @choice-made="handleChoiceMade"
      />
      <SimulationForm
        v-if="alertChoice === true"
        @values-updated="handleValuesUpdated"
      />
      <CalculatingResults
        v-if="choiceFlag !== false"
        :values="formValues"
        @results-updated="handleResultsUpdated"
      />
      <SimulationResults
        v-if="formResults.length > 1 && choiceFlag !== false"
        :results="formResults"
      />
      <ProgressingChart
        v-if="formResults.length > 1 && choiceFlag !== false"
        :values="formValues"
        :results="formResults"
        :key="chartKey"
      />
      <SimulationExplained
        v-if="formResults.length > 1 && choiceFlag !== false"
      />
      <div class="row">
        <div class="col-12 text-center my-2">
          <button 
            v-if="alertFlag === true && formResults.length > 1"
            class="btn btn-outline-danger btn-lg"
          >Generar PDF
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.form-title {
  font-size: 2rem;
  font-weight: bold;
  color: #50d890;
}
</style>
<script>
import GenericAlert from "@/components/GenericAlert.vue";
import SimulationForm from "@/components/SimulationForm.vue";
import CalculatingResults from "@/components/CalculatingResults.vue";
import SimulationResults from "@/components/SimulationResults.vue";
import ProgressingChart from "@/components/ProgressingChart.vue";
import SimulationExplained from "@/components/SimulationExplained.vue";
export default {
  name: "BacillusView",
  components: {
    GenericAlert,
    SimulationForm,
    CalculatingResults,
    SimulationResults,
    ProgressingChart,
    SimulationExplained,
  },
  data() {
    return {
      formValues: [null, null, null, null],
      formResults: [],
      defaultFormValues: [1000, 30, 12, 34.55],
      chartKey: 0,
      alertChoice: false,
      choiceFlag: false,
    };
  },
  methods: {
    handleValuesUpdated(values) {
      // Recibe los valores del componente del formulario
      this.formValues = values;
    },
    handleResultsUpdated(results) {
      // Recibe los resultados calculados del componente SimulationForm.
      this.formResults = results;
      this.chartKey++;
    },
    handleChoiceMade(choice) {
      this.alertChoice = choice;
      this.choiceFlag = true;
      if (this.alertChoice === false) {
        this.formValues = this.defaultFormValues.slice();
      }
    },
  },
};
</script>
