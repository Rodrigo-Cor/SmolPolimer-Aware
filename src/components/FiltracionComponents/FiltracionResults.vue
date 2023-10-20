<template>
  <div class="container-fluid">
    <h2 class="section-subtitle text-center animate__animated animate__flash">Resultados</h2>
    <section class="text-justify-custom my-2">
      En la siguiente lista se encuentra el resumen de los datos introducidos al simulador,
      mientras que después en la tabla, se encuentran los resultados: se indican los días y
      el porcentaje de microplásticos acumulados ya sea en el filtro, o que fueron liberados
      en el río.
    </section>
    <div class="row">
      <div class="col">
        <h3 class="section-sub-subtitle text-center my-2 animate__animated animate__flash">Resumen de datos de entrada</h3>
        <ul class="list-group custom-list">
          <li class="list-group-item custom-list-item">
            Microplásticos: <span class="badge bg-dark pill">{{ microplastics }}</span></li>
          <li class="list-group-item custom-list-item">
            Residuos: <span class="badge bg-dark pill">{{ residues }}</span></li>
          <li class="list-group-item custom-list-item">
            Días: <span class="badge bg-dark pill">{{ timeUnits }}</span></li>
        </ul>
      </div>
      <div class="col">
        <h3 class="section-sub-subtitle text-center animate__animated animate__flash">
          Tabla de resultados
        </h3>
        <table class="table table-info table-striped-columns custom-table text-center my-2" id="tableResults">
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
    watch : {
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
      },
    ),
      ...mapMutations(['setOnFilterValues', 'setReleasedValues']),
    },
    methods: {
      calculateCleansing() {
        let onFilterArray = [];
        let releasedArray = [];
        let onFilter = 0;
        let released = 0;
        let mpFilter = 0;
        let mpReleased = 0;
        let mp = 0;
        for (let i = 1; i <= this.timeUnits ; i++) {
          mp = parseFloat(this.microplastics) + parseFloat(this.residues) * this.obtainNoise();
          mpFilter = mp + onFilter;
          mpReleased = mp + released;
          onFilter = 100.00 - mp + onFilter;
          mpFilter = mpFilter * onFilter / 100;
          released = mp + released;
          mpReleased = mpReleased * released / 100;
          onFilterArray.push(onFilter);
          releasedArray.push(released);
        }
        this.$store.commit('setOnFilterValues', onFilterArray);
        this.$store.commit('setReleasedValues', releasedArray);
      },
      obtainNoise() {
        const randomValue = Math.random();
        const standardNormalValue = Math.sqrt(-2 * Math.log(randomValue)) * Math.cos(2 * Math.PI * randomValue);
        return standardNormalValue;
      }
    },
  }
</script>