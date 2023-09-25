<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <h2 id="myTitle">Resultados</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Tratamiento</th>
                <th scope="col">MP en filtro</th>
                <th scope="col">MP sueltos</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in onFilterValues" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.toFixed(2) }}</td>
                <td>{{ releasedValues[index].toFixed(2) }}</td>
              </tr>
            </tbody>
          </table>
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
    font-size: 1.7rem;
    font-weight: bold;
    color: #50d890;
  }
  
  </style>
  <script>
  import { mapGetters, mapMutations } from 'vuex';
  export default {
    name: "FiltracionResults",
    mounted () {
      this.calculateCleansing()
    },
    data() {
      return {
        onFilter: [],
        released: [],
      };
    },
    watch : {
      getFiltracionValues() {
        this.calculateCleansing();
      }
    },
    computed: {
      ...mapGetters(['getFiltracionValues', 'getOnFilterValues', 'getReleasedValues']),
      ...mapMutations(['setOnFilterValues', 'setReleasedValues']),
      microplastic() {
        return this.getFiltracionValues[0];
      },
      residue() {
        return this.getFiltracionValues[1];
      },
      treatment() {
        return this.getFiltracionValues[2];
      },
      onFilterValues() {
        return this.getOnFilterValues;
      },
      releasedValues() {
        return this.getReleasedValues;
      },
    },
    methods: {
      calculateCleansing() {
        this.onFilter = [];
        this.released = [];
        let onFilter = 0;
        let released = 0;
        let mp = 0;
        for (let i = 1; i <= this.treatment ; i++) {
          mp = parseFloat(this.microplastic) + parseFloat(this.residue) * this.obtainNoise();
          onFilter = 100.00 - mp + onFilter;
          released = mp + released;
          this.onFilter.push(onFilter);
          this.released.push(released);
        }
        this.$store.commit('setOnFilterValues', this.onFilter);
        this.$store.commit('setReleasedValues', this.released);
      },
      obtainNoise() {
        const randomValue = Math.random();
        const standardNormalValue = Math.sqrt(-2 * Math.log(randomValue)) * Math.cos(2 * Math.PI * randomValue);
        return standardNormalValue;
      }
    },
  }
  </script>