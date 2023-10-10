<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 text-center mt-2">
      <h2 id="myTitle">Explicación</h2>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-12 text-center">
      <p class="my-paragraph" id="explanation">
        Se introdujeron {{ microplastic }} microplásticos como cantidad inicial, mientras un total de {{ residue }} 
        como residuo, que irán filtrándose hasta terminar los {{ treatment }} días especificados. Dando una
        cantidad de microplásticos en el filtro de {{ onFilterValues.toFixed(2) }}, mientras que {{ releasedValues.toFixed(2) }}
        microplásticos fueron liberados en el ambiente.
      </p>
    </div>
  </div>    
</div>
</template>
<style scoped>
#myTitle{
  font-size: 1.7rem;
  font-weight: bold;
  background-image: linear-gradient(to bottom, #50d8d4, #4f5bca);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  }
.my-paragraph{
  background-color: rgba(80, 216, 144, 0.25);
  text-align: justify;
  color: #272727;
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
      const lastOnFilter = this.getOnFilterValues[this.getOnFilterValues.length - 1]
      return lastOnFilter;
    },
    releasedValues() {
      const lastReleased = this.getReleasedValues[this.getReleasedValues.length - 1]
      return lastReleased;
    },
  },
};
</script>