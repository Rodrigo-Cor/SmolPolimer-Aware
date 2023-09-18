<template>
<div class="container">
  <div 
    v-if="this.results.length > 1"
    class="row justify-content-center"
  >
    <div 
      v-if="this.results.length > 1"
      class="col-12 text-center my-2"
    >
      <h2>Resultados de la simulación</h2>
    </div>
  </div>
  <div class="row justify-content-start">
    <div 
      v-for="(result, index) in results"
      v-bind:key="index"
      class="col-md-3 col-sm-4 col-xs-12"
      id="myGrid"
    >
    C(t{{ index }}) = {{ result.toFixed(2) }}
    </div>
  </div>
  <hr>
</div>
</template>
<style scoped>
h2{
  font-size: 1.5rem;
  font-weight: bold;
  color: #50d890;
}
#myGrid{
  border-right: 0.1rem solid #4f98ca;
  border-bottom: 0.1rem solid #4f98ca;
  
}
</style>
<script>

export default {
  name: "SimulationResults",
  props: {
    results: {
      type: Array,
      required: true,
    },
  },
};
</script>
