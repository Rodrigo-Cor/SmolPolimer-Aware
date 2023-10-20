<template>
  <div class="container-fluid">
    <h2 class="section-subtitle text-center animate__animated animate__flash">Resultados</h2>
    <section class="text-justify-custom my-2">
      En la siguiente lista se encuentra el resumen de los datos introducidos al simulador,
      mientras que después en la tabla, se encuentran los resultados: cómo disminuyen los
      microplásticos conforme pasan los bimestres.
    </section>
    <div class="row">
      <div class="col my-2">
        <h3 class="section-sub-subtitle text-center my-2 animate__animated animate__flash">Resumen de datos de entrada</h3>
        <ul class="list-group custom-list">
          <li class="list-group-item custom-list-item">
            Microplásticos: <span class="badge bg-dark pill">{{ microplastics }}</span></li>
          <li class="list-group-item custom-list-item">
            Bimestres: <span class="badge bg-dark pill">{{ timeUnits }}</span></li>
          <li class="list-group-item custom-list-item">
            Medio de cultivo: <span class="badge bg-dark pill">{{ growthMedium }}</span></li>
          <li class="list-group-item custom-list-item">
            Cepa de la bacteria: <span class="badge bg-dark pill">{{ strain }}</span></li>
          <li class="list-group-item custom-list-item">
            Porcentaje de degradación: <span class="badge bg-dark pill">{{ percentage }}%</span></li>            
        </ul>
      </div>
      <div class="col my-2">
        <h3 class="section-sub-subtitle text-center my-2 animate__animated animate__flash">
          Tabla de resultados
        </h3>
        <table class="table table-info table-striped-columns custom-table text-center my-2" id="tableResults">
          <thead>
            <tr>
              <th scope="col">Bimestre</th>
              <th scope="col">Microplásticos</th>
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
  min-width: min-content;
  max-width: max-content;
  background-color: #50d8903f;
  border: 0.1rem solid #50d8903f;
  border-radius: 0.5rem;
  margin: auto;
}
.custom-list-item {
  background-color: #50d8903f;
  border: 0.1rem solid #50d8903f;
  text-align: justify;
}
.custom-table {
  min-width: min-content;
  max-width: fit-content; 
  margin: auto;
}
</style>
<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: "BacillusResults",
  mounted () {
      this.calculateCleansing()
    },
  watch : {
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
      },
    ),
    ...mapMutations(['setDegradatedValues']),
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
      this.$store.commit('setDegradatedValues', degradatedArray);
    },
  },
};
</script>
