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
  <div class="row justify-content-center">
    <div
      v-if="this.results.length > 1"
      class="col-12 my-4 scroll-box text-center"
    >
      <div v-for="(result, index) in this.results" :key="index">
        C(t{{ index }}) = {{ result.toFixed(2) }}
      </div>
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
.scroll-box{
  width: 10rem;
  font-weight: bold;
  height: 10rem;
  overflow-y: auto;
  background-color: #effffb;
  border: 0.2rem solid #1e1e1e;
  border-radius: 0.5rem;
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
