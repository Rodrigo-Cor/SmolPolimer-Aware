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
            mientras que después en la tabla, se encuentran los resultados: se indican los días y
            el porcentaje de microplásticos acumulados ya sea en el filtro, o que fueron liberados
            en el río.
          </p>
        </div>
      </div> 
      <div class="row">
        <div class="col my-2">
          <h3 id="mySubtitle">Resumen de datos de entrada</h3>
          <ul class="list-group">
            <li class="list-group-item list-group-item-success">Cantidad: {{ microplastic }} microplásticos</li>
            <li class="list-group-item list-group-item-success">Residuos: {{ residue }} microplásticos</li>
            <li class="list-group-item list-group-item-success">Días: {{ treatment }}</li>
          </ul>
        </div>
      </div>      
      <div class="row">
        <div id="table-container" class="col-12 my-2">
          <table class="table table-success table-striped-columns">
            <thead>
              <tr>
                <th scope="col">Días</th>
                <th scope="col">% MP en filtro</th>
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
#myTableContainer {
  max-height: 10rem;
  overflow-y: auto;
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
        let mpFilter = 0;
        let mpReleased = 0;
        let mp = 0;
        for (let i = 1; i <= this.treatment ; i++) {
          mp = parseFloat(this.microplastic) + parseFloat(this.residue) * this.obtainNoise();
          mpFilter = mp + onFilter;
          mpReleased = mp + released;
          onFilter = 100.00 - mp + onFilter;
          mpFilter = mpFilter * onFilter / 100;
          released = mp + released;
          mpReleased = mpReleased * released / 100;
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