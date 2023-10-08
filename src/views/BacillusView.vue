<template>
  <div class="container" style="background-color: #effffb">
    <div class="row justify-content-center">
      <div class="col-12 text-center my-3">
        <h1 id="myTitle">Degradación por bacterias Bacillus</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 text-center">
        <p class="my-paragraph">
          En la siguiente lista se encuentran los valores por defecto, que servirán como entrada para
          la simulación. Se trata de la cantidad de microplásticos a degradar, la temperatura a la que
          se encontrarán las bacterias, para degradar los microplásticos; el porcentaje de
          degradación está dado por la cepa de Bacillus que se utilice, así como la sustancia en donde
          estarán: Mineral Agar o Mineral Broth.
        </p>
        <p class="my-paragraph" style="font-weight: bold">
          Haz clic en el botón de simulación y podrás escoger si quieres esos valores, 
          o cambiarlos por otros por medio de un formulario.
        </p>
      </div>
    </div> 
    <div class="row justify-content-center">
      <div class="col text-center my-2">
        <h3 id="mySubtitle">Valores por defecto para la simulación</h3>
        <ul class="list-group">
          <li class="list-group-item custom-list-item">
            Cantidad: <span class="badge bg-dark pill">{{ defaultQuantity }} microplásticos</span></li>
          <li class="list-group-item custom-list-item">
            Temperatura: <span class="badge bg-dark pill">{{ defaultTemperature }}°C</span></li>
          <li class="list-group-item custom-list-item">
            Bimestres: <span class="badge bg-dark pill">{{ defaultBimester }}</span></li>
          <li class="list-group-item custom-list-item">
            Porcentaje de degradación: <span class="badge bg-dark pill">{{ defaultPercentage }}%</span></li>
          <li class="list-group-item custom-list-item">
            Mineral: <span class="badge bg-dark pill">{{ defaultMineral }}</span></li>
          <li class="list-group-item custom-list-item">
            Cepa: <span class="badge bg-dark pill">{{ defaultStrain }}</span></li>
        </ul>
      </div>
    </div>
    <div>
      <BacillusForm v-if="choice"/>
      <BacillusResults v-if="quantity && temperature && bimester && percentage && mineral && choiceIsMade" />
      <BacillusSimulation @chart-obtained="obtainSVG" v-if="degradatedValues.length > 0"/>
      <BacillusExplained v-if="degradatedValues.length > 0"/>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 text-center my-2">
        <button @click="handleButton" class="btn btn-outline-success btn-lg">
          {{ choiceIsMade ? (choice ? 'Simulación con valores por defecto' : 'Simulación con formulario' ) : 'Simulación' }}
        </button>
      </div>
    </div>
    <div v-if="degradatedValues.length > 0" class="row justify-content-center">
      <div class="col-12 text-center my-2">
        <button v-if="svgData" @click="downloadPDF" class="btn btn-outline-danger btn-lg">Generar PDF</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
#myTitle {
  font-size: 2rem;
  font-weight: bold;
  background-image: linear-gradient(to left, #50d890, #50d8d4);
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
.my-paragraph{
  background-color: rgba(80, 216, 144, 0.25);
  text-align: justify;
  color: #272727;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
}
.custom-list-item {
  width: auto;
  background-color: rgba(80, 216, 212, 0.25);
  border: 0.1rem solid rgba(80, 216, 212, 0.25);
  border-radius: 0.5rem;
  margin: 0 auto;
}
</style>
<script>
import BacillusForm from "@/components/BacillusComponents/BacillusForm.vue";
import BacillusResults from "@/components/BacillusComponents/BacillusResults.vue";
import BacillusSimulation from "@/components/BacillusComponents/BacillusSimulation.vue";
import BacillusExplained from "@/components/BacillusComponents/BacillusExplained.vue";
import Swal from "sweetalert2";
import { mapGetters, mapMutations } from "vuex";
import jsPDF from 'jspdf';

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
      defaultStrain: "B. carbonipphilus",
      svgData: null,
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
    strain() {
      return this.getBacillusValues[5];
    },
    degradatedValues() {
      return this.getDegradatedValues;
    }
  },
  methods: {
    handleButton () {
      Swal.fire({
        title: "¿Valores por defecto o Formulario?",
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

        showCancelButton: true,
        cancelButtonText: "Cancelar",
        cancelButtonAriaLabel: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.choice = true;
          this.$store.commit("setBacillusValues", []);
          this.$store.commit("setDegradatedValues", []);
        } 
        else if (result.isDenied) {
          this.choice = false;
          this.$store.commit('setBacillusValues', [this.defaultQuantity, this.defaultTemperature, this.defaultBimester, this.defaultPercentage, this.defaultMineral, this.defaultStrain]);
        }
      });
      this.choiceIsMade = true;
    },
    obtainSVG(svg) {
      this.svgData = svg;
    },
    downloadPDF() {
      const pdf = new jsPDF();
      const img = new Image();

      img.onload = function() {
        const canvas = document.createElement('canvas');
        const canvasWidth = 672;
        const canvasHeight = 403.2;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        const context = canvas.getContext('2d');
        context.drawImage(img, 0, 0);
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 10, 10, 180, 90);
        pdf.save('Bacillus.pdf');
      };
      img.src = 'data:image/svg+xml,' + encodeURIComponent(this.svgData);
    },
  },
};
</script>