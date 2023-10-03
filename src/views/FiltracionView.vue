<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 text-center my-3">
        <h1 id="myTitle">Filtración granular rápida</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 text-center">
        <p class="my-paragraph">
          En la siguiente lista se encuentran los valores por defecto, que servirán como entrada para
          la simulación. Haz clic en el botón de simulación y podrás escoger si quieres esos valores, 
          o cambiarlos por otros por medio de un formulario.
        </p>
      </div>
    </div> 
    <div class="row">
      <div class="col my-2">
        <h3 id="mySubtitle">Valores por defecto para la simulación</h3>
        <ul class="list-group">
          <li class="list-group-item list-group-item-info">Cantidad: {{ defaultMicroplastic }} microplásticos</li>
          <li class="list-group-item list-group-item-info">Residuos: {{ defaultResidue }} microplásticos</li>
          <li class="list-group-item list-group-item-info">Días: {{ defaultTreatment }}</li>
        </ul>
      </div>
    </div>
    <div>
      <AwarenessSimulationSection />
      <FiltracionForm v-if="choice"/>
      <FiltracionResults v-if="microplastic && residue && treatment && choiceIsMade" />
      <FiltracionSimulation @chart-obtained="obtainSVG" v-if="onFilterValues.length > 0 && releasedValues.length > 0"/>
      <FiltracionExplained v-if="onFilterValues.length > 0 && releasedValues.length > 0"/>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 text-center my-2">
        <button @click="handleButton" class="btn btn-outline-success btn-lg">
          Simulación
        </button>
      </div>
    </div>
    <div v-if="onFilterValues.length > 0 && releasedValues.length > 0" class="row justify-content-center">
      <div class="col-12 text-center my-2">
        <button v-if="svgData" @click="downloadPDF" class="btn btn-outline-danger btn-lg">Generar PDF</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
#myTitle {
  border-style: solid;
  border-color: #50d890;
  border-radius: 1rem;
  background-color: #272727;
  font-size: 2.0rem;
  font-weight: bold;
  color: #50d890;
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
import AwarenessSimulationSection from "@/components/AwarenessSimulationSection.vue";
import FiltracionForm from "@/components/FiltracionComponents/FiltracionForm.vue";
import FiltracionResults from "@/components/FiltracionComponents/FiltracionResults.vue";
import FiltracionSimulation from "@/components/FiltracionComponents/FiltracionSimulation.vue";
import FiltracionExplained from '@/components/FiltracionComponents/FiltracionExplained.vue';
import Swal from "sweetalert2";
import { mapGetters, mapMutations } from "vuex";
import jsPDF from 'jspdf';

export default {
  name: "FiltracionView",
  components: {
    AwarenessSimulationSection,
    FiltracionForm,
    FiltracionResults,
    FiltracionSimulation,
    FiltracionExplained,
  },
  data () {
    return {
      choiceIsMade: false,
      choice: null,
      defaultMicroplastic: 29,
      defaultResidue: 5,
      defaultTreatment: 9,
      svgData: null,
    };
  },

  computed: {
    ...mapGetters(['getFiltracionValues', 'getOnFilterValues', 'getReleasedValues']),
    ...mapMutations(['setFiltracionValues', 'setROnFilterValues', 'setReleasedValues']),
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

        showCancelButton: true,
        cancelButtonText: "Cancelar",
        cancelButtonAriaLabel: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.choice = true;
          this.$store.commit("setFiltracionValues", []);
          this.$store.commit("setOnFilterValues", []);
          this.$store.commit("setReleasedValues", []);
        } 
        else if (result.isDenied) {
          this.choice = false;
          this.$store.commit('setFiltracionValues', [this.defaultMicroplastic, this.defaultResidue, this.defaultTreatment])
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
        const svgSize = document.getElementById("chart-container");
        canvas.width = svgSize.offsetWidth;
        canvas.height = svgSize.offsetHeight;
        const context = canvas.getContext('2d');
        context.drawImage(img, 0, 0);
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 10, 10, 180, 90);
        pdf.save('chart.pdf');
      };
      img.src = 'data:image/svg+xml,' + encodeURIComponent(this.svgData);
    },
  },
};
</script>