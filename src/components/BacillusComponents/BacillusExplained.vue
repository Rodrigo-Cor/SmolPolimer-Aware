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
          En la simulación gráfica, se ve reflejada la correspondencia entre la cantidad de microplásticos
          y el tiempo, bajo la fórmula: C(t) = n * (1 - p)^t, donde t son los bimestres, p es el porcentaje de
          limpieza y n es el número de microplásticos.
        </p>
        <p class="my-paragraph">
          Se introdujeron {{ quantity }} microplásticos como cantidad inicial, reflejados en la gráfica
          como el primer valor, en el bimestre 0, que irán degradándose hasta terminar los {{ bimester }}
          bimestres especificados. La temperatura a la que se sometieron los microplásticos es de 
          {{ temperature }}°C en mineral {{ mineral }}, dando una cantidad de microplásticos final de
          {{ degradatedValues.toFixed(2) }} microplásticos. Se escogió la cepa {{ strain }}.
        </p>
      </div>
    </div>    
  </div>
</template>
<style scoped>
#myTitle{
  border-style: solid;
  border-color: #4f98ca;
  border-radius: 1rem;
  font-size: 1.7rem;
  font-weight: bold;
  color: #4f98ca;
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
  name: "BacillusExplained",
  computed: {
    ...mapGetters(['getBacillusValues','getDegradatedValues']),
    quantity() {
      return this.getBacillusValues[0];
    },
    temperature() {
      return this.getBacillusValues[1];
    },
    bimester() {
      return this.getBacillusValues[2];
    },
    percentage() {
      return this.getBacillusValues[3];
    },
    mineral() {
      return this.getBacillusValues[4];
    },
    strain() {
      return this.getBacillusValues[5];
    },
    degradatedValues() {
      const lastElement = this.getDegradatedValues[this.getDegradatedValues.length - 1]
      return lastElement;
    }
  },
};
  </script>