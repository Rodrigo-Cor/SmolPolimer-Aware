<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 text-center mt-3">
      <h2 id="myTitle" class="animate__animated animate__fadeIn">Resultados</h2>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-12 text-center">
      <p class="text-blue-box animate__animated animate__fadeIn">
        En la siguiente lista se encuentra el resumen de los datos introducidos al simulador,
        mientras que después en la tabla, se encuentran los resultados: cómo disminuyen los 
        microplásticos conforme pasan los bimestres.
      </p>
    </div>
  </div> 
  <div class="row justify-content-center">
    <div class="col text-center my-2 animate__animated animate__fadeIn animate__delay-1s">
      <h3 id="mySubtitle">Resumen de datos de entrada</h3>
      <ul class="list-group custom-list">
          <li class="list-group-item custom-list-item">
            Cantidad: <span class="badge bg-dark pill">{{ quantity }} microplásticos</span></li>
          <li class="list-group-item custom-list-item">
            Temperatura: <span class="badge bg-dark pill">{{ temperature }}°C</span></li>
          <li class="list-group-item custom-list-item">
            Bimestres: <span class="badge bg-dark pill">{{ bimester }}</span></li>
          <li class="list-group-item custom-list-item">
            Porcentaje de degradación: <span class="badge bg-dark pill">{{ percentage }}%</span></li>
          <li class="list-group-item custom-list-item">
            Mineral: <span class="badge bg-dark pill">{{ mineral }}</span></li>
          <li class="list-group-item custom-list-item">
            Cepa: <span class="badge bg-dark pill">{{ strain }}</span></li>
        </ul>
    </div>
  </div>
  <div class="row animate__animated animate__fadeIn animate__delay-2s">
    <div id="mySubtitle" class="col text-center">
      Tabla de resultados
    </div>
  </div>
  <div class="row animate__animated animate__fadeIn animate__delay-2s">
    <div class="col text-center">
      <table class="table table-info table-striped-columns custom-table my-2" id="tableResults">
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
#myTitle{
  font-size: 1.7rem;
  font-weight: bold;
  background-image: linear-gradient(to bottom, #50d8d4, #4f5bca);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
#mySubtitle{
  font-size: 1.5rem;
  font-weight: bold;
  background-image: linear-gradient(to bottom, #4fcabe, #272727);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
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
  data() {
    return {
      degradated: [],
    };
  },
  watch : {
      getBacillusValues() {
        this.calculateCleansing();
      }
    },
  computed: {
    ...mapGetters(['getBacillusValues', 'getDegradatedValues']),
    ...mapMutations(['setDegradatedValues']),
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
        return this.getDegradatedValues;
    },
  },
  methods: {
    calculateCleansing() {
      this.degradated = [];
      let n = this.quantity;
      let percentage = this.percentage / 100;
      let t = this.bimester;
      for (let i = 0; i <= t; i++) {
        let degradated = n * Math.pow(1 - percentage, i);
        this.degradated.push(degradated);
      }
      this.$store.commit('setDegradatedValues', this.degradated);
    },
  },
};
</script>
