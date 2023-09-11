<template>

</template>
<style scoped>

</style>

<script>
export default {
  name: "CalculatingResults",
  props: {
    values: {
      type: Array,
      required: true,
    },
  }, 
  data() {
    return {
        results: [],
    };
  },
  watch: {
    values: {
        handler: "calculateCleansing",
        deep: true,
        immediate: true,
    },
  },
  mounted() {
    this.calculateCleansing();
  },
  methods: {
    calculateCleansing() {
      this.results = [];
      // Realizar cálculo de degradación basado en los valores ingresados
      const n = this.values[0]; // Cantidad inicial de microplásticos
      const percentage = this.values[3] / 100; // Porcentaje de degradación en decimal
      const t = this.values[2]; // Tiempo

      // Realizamos la simulación en intervalos de tiempo y almacenamos los resultados en el arreglo 'results'
      for (let i = 0; i <= t; i++) {
        const result = n * Math.pow(1 - percentage, i); // Aplicar la fórmula C(t) = n * (1 - p)^t
        this.results.push(result);
      }
      //Evento que emite los resultados calculados de la función
      this.$emit("results-updated", this.results);
    },
  },
}
</script>