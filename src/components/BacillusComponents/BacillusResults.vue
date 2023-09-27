<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 text-center mt-3">
      <h2 id="myTitle">Resultados</h2>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-12 text-center">
      <p class="my-paragraph">
        En la siguiente lista se encuentra el resumen de los datos introducidos al simulador,
        mientras que después en la tabla, se encuentran los resultados: cómo disminuyen los 
        microplásticos conforme pasan los bimestres.
      </p>
    </div>
  </div> 
  <div class="row">
    <div class="col my-2">
      <h3 id="mySubtitle">Resumen de datos de entrada</h3>
      <ul class="list-group">
        <li class="list-group-item list-group-item-success">Cantidad: {{ quantity }} microplásticos</li>
        <li class="list-group-item list-group-item-success">Temperatura: {{ temperature }}°C</li>
        <li class="list-group-item list-group-item-success">Bimestres: {{ bimester }}</li>
        <li class="list-group-item list-group-item-success">Porcentaje de degradación: {{ percentage }}%</li>
        <li class="list-group-item list-group-item-success">Mineral: {{ mineral }}</li>
        <li class="list-group-item list-group-item-success">Cepa: {{ strain }}</li>
      </ul>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <table class="table table-success table-striped-columns">
        <thead>
          <tr>
            <th scope="col">Bimestre</th>
            <th scope="col">Microplasticos</th>
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
  border-style: solid;
  border-color: #4f98ca;
  border-radius: 1rem;
  font-size: 1.7rem;
  font-weight: bold;
  color: #4f98ca;
}
#mySubtitle{
  font-size: 1.5rem;
  font-weight: bold;
  color: #272727;
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
