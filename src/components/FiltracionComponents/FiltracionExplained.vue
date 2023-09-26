<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 text-center">
      <h2 id="myTitle">Explicación</h2>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-12 text-center">
      <p class="my-paragraph">
        Se introdujeron {{ microplastic }} microplásticos como cantidad inicial, mientras un total de {{ residue }} 
        como residuo, que irán filtrándose hasta terminar los {{ treatment }} tratamientos especificados. Dando una
        cantidad de microplásticos en el filtro de {{ onFilterValues.toFixed(2) }}, mientras que {{ releasedValues.toFixed(2) }}
        microplásticos fueron liberados en el ambiente.
      </p>
    </div>
  </div>    
  <div class="row justify-content-center">
    <div class="col-12 text-center my-2">
      <button class="btn btn-outline-danger btn-lg">Generar PDF</button>
    </div>
  </div>
</div>
</template>
<style scoped>
#myTitle{
  font-size: 1.7rem;
  font-weight: bold;
  color: #50d890;
}
.my-paragraph{
  text-align: justify;
  color: #1e1e1e;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
}
</style>
<script>
import { mapGetters } from "vuex";
export default {
  name: "FiltracionExplained",
  computed: {
    ...mapGetters(['getFiltracionValues', 'getOnFilterValues', 'getReleasedValues']),
    microplastic() {
      return this.getFiltracionValues[0];
    },
    residue() {
      return this.getFiltracionValues[1];
    },
    treatment() {
      return this.getFiltracionValues[2];
    },
    onFilterValues() {
      const lastElement = this.getOnFilterValues[this.getOnFilterValues.length - 1]
      return lastElement;
    },
    releasedValues() {
      const lastElement = this.getReleasedValues[this.getReleasedValues.length - 1]
      return lastElement;
    },
  },
};
</script>