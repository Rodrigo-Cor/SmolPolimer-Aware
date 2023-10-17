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
          mientras que después en la tabla, se encuentran los resultados: se indican los días y
          el porcentaje de microplásticos acumulados ya sea en el filtro, o que fueron liberados
          en el río.
        </p>
      </div>
    </div> 
    <div class="row justify-content-center">
      <div class="col text-center my-2 animate__animated animate__fadeIn animate__delay-1s">
        <h3 id="mySubtitle">Resumen de datos de entrada</h3>
        <ul class="list-group custom-list">
          <li class="list-group-item custom-list-item">
            Cantidad: <span class="badge bg-dark pill">{{ microplastic }} microplásticos</span></li>
          <li class="list-group-item custom-list-item">
            Residuos: <span class="badge bg-dark pill">{{ residue }}°C</span></li>
          <li class="list-group-item custom-list-item">
            Días: <span class="badge bg-dark pill">{{ treatment }}</span></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col text-center animate__animated animate__fadeIn animate__delay-2s">
        <h3 id="mySubtitle">Tabla de resultados</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center my-2">
        <table class="table table-info table-striped-columns custom-table animate__animated animate__fadeIn animate__delay-2s" id="tableResults">
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