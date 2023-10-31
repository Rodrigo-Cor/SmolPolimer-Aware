<template>
  <h2 class="section-subtitle text-center my-2 animate__animated animate__flash">Explicación</h2>
  <section class="text-justify-custom my-2">
    Se puede observar en la simulación gráfica una línea de color azul
    que representa la cantidad de microplásticos en miligramos que se
    están degradando, con la cepa seleccionada <i>{{ strain }}</i>.
    Cada bimestre se degrada el mismo porcentaje a la cantidad restante
    del anterior, este comportamiento es dado por la siguiente función:
    C(t) = n * (1 - p) ^ t; donde t son el número de bimestres, n sería
    la cantidad de microplásticos en mg y p representa al porcentaje de
    degradación, con n = {{ microplastics }} y p = {{ percentage }}%,
    de t = 0, hasta t = {{ timeUnits }}.
    El porcentaje depende de la cepa y del medio de cultivo con el que
    se están alimentando las bacterias, que para el presente caso fue
    {{ growthMedium }}, dando al bimestre {{ timeUnits }} la cantidad
    final de {{ lastDegradatedValue.toFixed(2) }} mg.
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