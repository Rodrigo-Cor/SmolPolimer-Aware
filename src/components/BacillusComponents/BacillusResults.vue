<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 text-center">
      <h2 id="myTitle">Resultados</h2>
    </div>
  </div>
  <div class="row justify-content-start">
    <div 
      v-for="(item, index) in degradatedValues"
      v-bind:key="index"
      class="col-md-3 col-sm-4 col-xs-12"
      id="myGrid"
    >
    C(t{{ index }}) = {{ item.toFixed(2) }}
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <hr>
    </div>
  </div>
</div>
</template>
<style scoped>
#myTitle{
  font-size: 1.5rem;
  font-weight: bold;
  color: #50d890;
}
#myGrid{
  border-right: 0.1rem solid #4f98ca;
  border-bottom: 0.1rem solid #4f98ca;
  
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
