<template>
  <h2 class="section-subtitle text-center my-2 animate__animated animate__flash">Explicación</h2>
  <section class="text-justify-custom my-2">
    Se pueden observar en la simulación dos líneas: cada una representa
    el  porcentaje acumulado de microplásticos; en el caso de la  línea
    azul,  aquellos que son contenidos por el filtro; mientras  que  la
    verde  corresponde a los que escapan y terminan en algún cuerpo  de
    agua, como lo puede ser un río, en este caso. Cada día, se pasa por
    el filtro la cantidad de microplásticos especificada de {{ microplastics }}.
    Sumado a eso, pueden llegar a ocurrir fluctuaciones en los  valores
    cada día, por lo que se añade una cantidad de microplásticos  extra
    que  llamaremos 'residuos', que ayudará a simular esas  variaciones
    multiplicándola por un valor aleatorio por día, pero se tomará como
    base el valor introducido para los residuos de {{ residues }}.
    De esa manera, el valor resultante de cada día corresponde a un por
    ciento:  ya que si se suman ambos porcentajes del mismo  día,  dará
    100%  para el primer día, 200% para el segundo y así  sucesivamente
    hasta el día {{ timeUnits }} indicado.
    Generalmente, el porcentaje acumulado del filtro debe ser mayor  al
    del río, sin embargo, este comportamiento puede no darse en  algún 
    o algunos días. El porcentaje acumulado final para el filtro y para
    el río son {{ lastOnFilterValue.toFixed(2) }}% y {{ lastReleasedValue.toFixed(2) }}%, respectivamente.
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