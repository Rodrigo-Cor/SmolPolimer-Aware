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
      simulador, mientras que en la tabla, están los resultados, que indican
      cómo disminuyen los miligramos de microplásticos conforme pasan los
      bimestres.
    </section>
    <div class="row justify-content-center">
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
            <b>Bimestres: </b>{{ timeUnits }}
          </li>
          <li class="list-group-item custom-list-item">
            <b>Medio de cultivo: </b>{{ growthMedium }}
          </li>
          <li class="list-group-item custom-list-item">
            <b>Cepa de la bacteria: </b><i>{{ strain }}</i>
          </li>
          <li class="list-group-item custom-list-item">
            <b>Porcentaje de degradación: </b>{{ percentage }}%
          </li>
        </ul>
      </div>
      <div class="col my-2">
        <h3
          class="section-sub-subtitle text-center mb-4 animate__animated animate__flash"
        >
          Tabla de resultados
        </h3>
        <table class="custom-table my-2" id="tableResults">
          <thead>
            <tr>
              <th scope="col">Bimestre</th>
              <th scope="col">Microplásticos (mg)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in degradatedValues" :key="index">
              <td>{{ index }}</td>
              <td>{{ item.toFixed(2) }}</td>
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
  border-radius: 1rem;
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
.custom-table tbody td:nth-child(odd) {
  border-right: thin solid #50d890;
}
.custom-table tbody tr:nth-child(odd) {
  background: #50d8901a;
}
</style>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "BacillusResults",
  mounted() {
    this.calculateCleansing(),
    this.scrollVisualization()
  },
  watch: {
    microplastics() {
      this.calculateCleansing();
    },
    timeUnits() {
      this.calculateCleansing();
    },
    growthMedium() {
      this.calculateCleansing();
    },
    strain() {
      this.calculateCleansing();
    },
    percentage() {
      this.calculateCleansing();
    },
  },
  computed: {
    ...mapGetters({
      microplastics: "getMicroplastics",
      timeUnits: "getTimeUnits",
      growthMedium: "getGrowthMedium",
      strain: "getStrain",
      percentage: "getPercentage",
      degradatedValues: "getDegradatedValues",
    }),
    ...mapMutations(["setDegradatedValues"]),
  },
  methods: {
    calculateCleansing() {
      let degradatedArray = [];
      let n = this.microplastics;
      let percentage = this.percentage / 100;
      let t = this.timeUnits;
      for (let i = 0; i <= t; i++) {
        let degradated = n * Math.pow(1 - percentage, i);
        degradatedArray.push(degradated);
      }
      this.$store.commit("setDegradatedValues", degradatedArray);
    },
    scrollVisualization() {
      const currentScrollY = window.scrollY;
      const resultsSection = document.getElementById("results-section");
      setTimeout(() => {
        if (!resultsSection) window.scrollTo(0, currentScrollY);
        else if (resultsSection) {
          resultsSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 340);
    },
  },
};
</script>
