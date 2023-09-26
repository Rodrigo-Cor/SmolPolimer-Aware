<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 text-center">
        <h1 id="myTitle">Filtración granular rápida</h1>
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
      <AwarenessSimulationSection />
      <FiltracionForm v-if="choice"/>
      <FiltracionResults v-if="microplastic && residue && treatment && choiceIsMade" />
      <FiltracionSimulation v-if="onFilterValues.length > 0 && releasedValues.length > 0"/>
      <FiltracionExplained v-if="onFilterValues.length > 0 && releasedValues.length > 0"/>
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
import AwarenessSimulationSection from "@/components/AwarenessSimulationSection.vue";
import FiltracionForm from "@/components/FiltracionComponents/FiltracionForm.vue";
import FiltracionResults from "@/components/FiltracionComponents/FiltracionResults.vue";
import FiltracionSimulation from "@/components/FiltracionComponents/FiltracionSimulation.vue";
import FiltracionExplained from '@/components/FiltracionComponents/FiltracionExplained.vue';
import Swal from "sweetalert2";
import { mapGetters, mapMutations } from "vuex";

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

        showCancelButton: false,
        cancelButtonText: "Cancelar",
        cancelButtonAriaLabel: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.choice = true;
          this.$store.commit('setFiltracionValues', [])
          this.$store.commit('setOnFilterValues', [])
          this.$store.commit('setReleasedValues', [])
        } 
        else if (result.isDenied) {
          this.choice = false;
          this.$store.commit('setFiltracionValues', [this.defaultMicroplastic, this.defaultResidue, this.defaultTreatment])
        }
      });
      this.choiceIsMade = true;
    },
   },
 };
</script>