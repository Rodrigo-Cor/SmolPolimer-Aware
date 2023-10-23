<template>
  <h2 class="section-subtitle text-center my-2 animate__animated animate__heartBeat">Explicación</h2>
  <section class="text-justify-custom my-2" id="explanation">
    En la simulación, se puede observar que las líneas llevan una tendencia ascendente, debido a que cada una
    representa el porcentaje acumulado de microplásticos que son, o atrapados en el filtro (azul) o sueltos en
    un cuerpo de agua (verde). Para el primer día, por ejemplo, si se suma el porcentaje en el filtro con el del río, dará
    como resultado el 100%; para días posteriores son valores que suman el 200%, 300% y así, sucesivamente. <br> <br> 
    Se introdujo una cantidad inicial de microplásticos de {{ microplastics }}, a la vez que {{ residues }} 
    como residuo, cantidades que se irán pasando por el filtro diariamente hasta terminar los {{ timeUnits }} días especificados. Dando como
    resultado el día {{ timeUnits }}, un porcentaje acumulado en el filtro de {{ lastOnFilterValue.toFixed(2) }}%, 
    a la par que {{ lastReleasedValue.toFixed(2) }}% en el cuerpo de agua, en este caso, un río.
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "FiltracionExplained",
  computed: {
    ...mapGetters(
      {
        microplastics: "getMicroplastics",
        residues: "getResidues",
        timeUnits: "getTimeUnits",
        onFilterValues: "getOnFilterValues",
        releasedValues: "getReleasedValues",
      },
    ),
    lastOnFilterValue() {
      const lastOnFilter = this.onFilterValues[this.onFilterValues.length - 1]
      return lastOnFilter;
    },
    lastReleasedValue() {
      const lastReleased = this.releasedValues[this.releasedValues.length - 1]
      return lastReleased;
    },
  },
};
</script>