<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 text-center mt-2">
      <h2 id="myTitle" class="animate__animated animate__zoomIn animate__delay-1s">Explicación</h2>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-12 animate__animated animate__zoomIn animate__delay-1s">
      <p class="text-green-box" id="explanation">
        En la simulación, se puede observar que las líneas llevan una tendencia ascendente, debido a que cada una
        representa el porcentaje acumulado de microplásticos que son, o atrapados en el filtro (azul) o sueltos en
        un cuerpo de agua (verde). Para el primer día, por ejemplo, si se suma el porcentaje en el filtro con el del río, dará
        como resultado el 100%; para días posteriores son valores que suman el 200%, 300% y así, sucesivamente. <br> <br> 
        Se introdujo una cantidad inicial de microplásticos de {{ microplastic }}, a la vez que {{ residue }} 
        como residuo, cantidades que se irán pasando por el filtro diariamente hasta terminar los {{ treatment }} días especificados. Dando como
        resultado el día {{ treatment }}, un porcentaje acumulado en el filtro de {{ onFilterValues.toFixed(2) }}%, 
        a la par que {{ releasedValues.toFixed(2) }}% en el cuerpo de agua, en este caso, un río. A
        continuación, la tabla de resultados con la que es graficada la simulación.
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