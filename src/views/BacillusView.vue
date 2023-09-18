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
        :alertToDenyButton="true"
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
            v-if="formResults.length > 1"
            class="btn btn-outline-danger btn-lg"
          >
            Generar PDF
          </button>
        </div>
      </div>
      <InfoReferences
        :references="[
          {
            authors: ['J. K. Shrestha'],
            title:
              'Isolation and Identification of Low-Density Polyethylene (LDPE) Degrading Bacillus spp. from a Soil of Landfill Site',
            vol: '',
            pages: '30-34',
            yearPublication: '2019',
            link: 'https://www.researchgate.net/publication/331702789_Isolation_and_Identification_of_Low_Density_Polyethylene_LDPE_Degrading_Bacillus_spp_from_a_Soil_of_Landfill_Site',
            dateAccess: '17-07-2023',
          },
          {
            authors: ['H. Hidayaturrahman', 'T. Lee'],
            title:
              'A study on characteristics of microplastic in wastewater of South Korea: Identification, quantification, and fate of microplastics during treatment process',
            vol: '146',
            pages: '696-702',
            yearPublication: '2019',
            link: 'https://doi.org/10.1016/j.marpolbul.2019.06.071',
            dateAccess: '17-07-2023',
          },
        ]"
      />
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
import InfoReferences from "@/components/InfoReferences.vue";

export default {
  name: "BacillusView",
  components: {
    GenericAlert,
    SimulationForm,
    CalculatingResults,
    SimulationResults,
    ProgressingChart,
    SimulationExplained,
    InfoReferences,
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
