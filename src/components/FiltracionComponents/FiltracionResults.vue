<template>
  <div class="container-fluid">
    <h2
      class="section-subtitle text-center animate__animated animate__flash"
      id="results-section"
    >
      Resultados
    </h2>
    <section class="text-justify-custom my-2">
      En la siguiente lista se encuentra el resumen de los datos introducidos al
      simulador, mientras que en la tabla están los resultados donde se indican
      los días y el porcentaje de microplásticos acumulado, ya sea en el filtro,
      o los que terminan en el río.
    </section>
    <div class="row">
      <div class="col my-2">
        <h3
          class="section-sub-subtitle text-center mb-4 animate__animated animate__flash"
        >
          Resumen de datos de entrada
        </h3>
        <ul class="list-group custom-list">
          <li class="list-group-item custom-list-item">
            <b>Microplásticos: </b>{{ microplastics }} mg
          </li>
          <li class="list-group-item custom-list-item">
            <b>Residuos: </b>{{ residues }} mg
          </li>
          <li class="list-group-item custom-list-item">
            <b>Días: </b>{{ timeUnits }}
          </li>
        </ul>
      </div>
      <div class="col my-2">
        <h3
          class="section-sub-subtitle text-center mb-4 animate__animated animate__flash"
        >
          Tabla de resultados
        </h3>
        <table class="custom-table text-center my-2" id="tableResults">
          <thead>
            <tr>
              <th scope="col">Días</th>
              <th scope="col">% de MP en filtro</th>
              <th scope="col">% de MP en el río</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in onFilterValues" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.toFixed(2) }}%</td>
              <td>{{ releasedValues[index].toFixed(2) }}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style scoped>
.custom-list {
  color: #272727;
  min-width: min-content;
  max-width: max-content;
  border-radius: 0.5rem;
  margin: auto;
  text-align: justify;
  box-shadow: 0 0 1rem #50d890;
}
.custom-list-item {
  background-color: #50d8901a;
  border: thin solid #50d890;
}
.custom-table {
  color: #272727;
  text-align: center;
  border-collapse: collapse;
  border-radius: 1rem 1rem 1rem 1rem;
  overflow: hidden;
  min-width: min-content;
  max-width: max-content;
  margin: auto;
  box-shadow: 0 0 1rem #50d890;
}
.custom-table thead th {
  text-align: center;
  padding: 0.5rem;
}
.custom-table thead tr {
  background-color: #50d890;
}
.custom-table td {
  padding: 0.5rem;
}
.custom-table tbody tr {
  border-bottom: thin solid #50d890;
}
.custom-table tbody tr:last-of-type {
  border-bottom: 1rem solid #50d890;
}
.custom-table tbody td:nth-child(even) {
  border-right: thin solid #50d890;
  border-left: thin solid #50d890;
}
.custom-table tbody tr:nth-child(odd) {
  background: #50d8901a;
}
</style>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "FiltracionResults",
  mounted() {
    this.calculateCleansing();
  },
  watch: {
    microplastics() {
      this.calculateCleansing();
    },
    residues() {
      this.calculateCleansing();
    },
    timeUnits() {
      this.calculateCleansing();
    },
  },
  computed: {
    ...mapGetters({
      microplastics: "getMicroplastics",
      timeUnits: "getTimeUnits",
      residues: "getResidues",
      onFilterValues: "getOnFilterValues",
      releasedValues: "getReleasedValues",
    }),
  },
  methods: {
    ...mapMutations({
      setOnFilterValues: "setOnFilterValues",
      setReleasedValues: "setReleasedValues",
    }),
    calculateCleansing() {
      let onFilterArray = [];
      let releasedArray = [];
      let onFilter = 0;
      let released = 0;
      let mpFilter = 0;
      let mpReleased = 0;
      let mp = 0;
      for (let i = 1; i <= this.timeUnits; i++) {
        mp =
          parseFloat(this.microplastics) +
          parseFloat(this.residues) * this.obtainNoise();
        mpFilter = mp + onFilter;
        mpReleased = mp + released;
        onFilter = 100.0 - mp + onFilter;
        mpFilter = (mpFilter * onFilter) / 100;
        released = mp + released;
        mpReleased = (mpReleased * released) / 100;
        onFilterArray.push(onFilter);
        releasedArray.push(released);
      }
      this.setOnFilterValues(onFilterArray);
      this.setReleasedValues(releasedArray);
    },
    obtainNoise() {
      const randomValue = Math.random();
      const standardNormalValue =
        Math.sqrt(-2 * Math.log(randomValue)) *
        Math.cos(2 * Math.PI * randomValue);
      return standardNormalValue;
    },
  },
};
</script>
