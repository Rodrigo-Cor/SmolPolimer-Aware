<template>
  <h2 class="section-subtitle text-center my-2 animate__animated animate__heartBeat">Explicación</h2>
  <section class="text-justify-custom my-2">
    En la simulación gráfica, se ve reflejada la fórmula: C(t) = n * (1 - p)^t,
    donde t son los bimestres, p es el porcentaje de limpieza y n es el número
    de microplásticos. Se introdujeron {{ microplastics }} microplásticos como
    cantidad inicial, reflejados en la gráfica como el primer valor de la línea, en el
    bimestre 0, que irán degradándose hasta terminar la cantidad especificada
    de bimestres de {{ timeUnits }}. La temperatura a la que se sometieron es
    de 30°C, alimentando a las bacterias de la cepa <i>{{ strain }}</i> con {{ growthMedium }}, 
    que tiene un porcentaje de degradación por bimestre de {{ percentage }}%,
    dando una cantidad de microplásticos final de {{ lastDegradatedValue.toFixed(2) }}.
    En la siguiente tabla, se encuentran los valores con los que fue graficada la simulación.
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "BacillusExplained",
  computed: {
    ...mapGetters(
      {
        microplastics: "getMicroplastics",
        timeUnits: "getTimeUnits",
        growthMedium: "getGrowthMedium",
        strain: "getStrain",
        percentage: "getPercentage",
        degradatedValues: "getDegradatedValues",
      },
    ),
    lastDegradatedValue() {
      const lastElement = this.degradatedValues[this.degradatedValues.length - 1]
      return lastElement;
    }
  },
};
</script>