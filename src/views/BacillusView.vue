<template>
  <div>
    <SimulationForm @values-updated="handleValuesUpdated" />
    <ProgressingChart :values="formValues" />
  </div>
</template>

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
      // Receive the values from the form component
      this.formValues = values;
    },
  },
};
</script>
