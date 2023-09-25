<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 text-center">
        <h1 id="myTitle">Degradación por bacterias Bacillus</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 text-center">
        <button @click="handleButton" class="btn btn-info">
          Simulación
        </button>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12">
        <hr>
      </div>
    </div>
    <div>
      <BacillusForm v-if="choice"/>
      <BacillusResults v-if="quantity && temperature && bimester && percentage && mineral && choiceIsMade" />
      <BacillusSimulation v-if="degradatedValues.length > 0"/>
      <BacillusExplained v-if="degradatedValues.length > 0"/>
    </div>
  </div>
</template>
<style scoped>
#myTitle {
  font-size: 2rem;
  font-weight: bold;
  color: #50d890;
}
</style>
<script>
import BacillusForm from "@/components/BacillusComponents/BacillusForm.vue";
import BacillusResults from "@/components/BacillusComponents/BacillusResults.vue";
import BacillusSimulation from "@/components/BacillusComponents/BacillusSimulation.vue";
import BacillusExplained from "@/components/BacillusComponents/BacillusExplained.vue";
import Swal from "sweetalert2";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "BacillusView",
  components: {
    BacillusForm,
    BacillusResults,
    BacillusSimulation,
    BacillusExplained,
  },
  data() {
    return {
      choiceIsMade: false,
      choice: null,
      defaultQuantity: 1000,
      defaultTemperature: 30,
      defaultBimester: 12,
      defaultPercentage: 34.55,
      defaultMineral: "Agar",
    };
  },
  computed: {
    ...mapGetters(['getBacillusValues','getDegradatedValues']),
    ...mapMutations(['setBacillusValues']),
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
    degradatedValues() {
      return this.getDegradatedValues;
    }
  },
  methods: {
    handleButton () {
      Swal.fire({
        title: "¿Usar valores por defecto?",
        text: "Ve a la simulación con valores por defecto o asígnalos por medio del formulario.",
        background: "#1e1e1e",
        color: "#effffb",
        icon: "question",
        position: "center",

        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,

        showConfirmButton: true,
        confirmButtonText: "Formulario",
        confirmButtonColor: "#50d890",
        confirmButtonAriaLabel: "Confirmar",

        showDenyButton: true,
        denyButtonText: "Por defecto",
        confirmButtonColor: "#4f98ca",
        confirmButtonAriaLabel: "Denegar",

        showCancelButton: false,
        cancelButtonText: "Cancelar",
        cancelButtonAriaLabel: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.choice = true;
          this.$store.commit('setBacillusValues', [])
        } 
        else if (result.isDenied) {
          this.choice = false;
          this.$store.commit('setBacillusValues', [this.defaultQuantity, this.defaultTemperature, this.defaultBimester, this.defaultPercentage, this.defaultMineral])
        }
      });
      this.choiceIsMade = true;
    },
  },
};
</script>