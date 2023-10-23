<template>
  <div class="container-fluid" style="background-color: #effffb;">
    <h1 class="fw-semibold text-center section-title animate__animated animate__heartBeat">
      Filtración granular rápida
    </h1>
    <section class="text-justify-custom my-2">
      Se han desarrollado diversos procesos para la limpieza, los cuales pueden
      ser clasificados en dos tipos: procesos de separación y procesos de
      degradación. En los procesos de separación, se incluyen técnicas como la
      filtración granular rápida, la filtración de disco, la filtración por
      membrana y la flotación por aire disuelto, todo estos pueden eliminar al
      menos el 90% de microplásticos presentes en el agua.
    </section>
    <section class="p-2 my-2 rounded color-techniques">
      <InfoSection
        :img="{
          src: require('@/assets/ivan-bandura-Ac97OqAWDvg-unsplash.jpg'),
          alt: 'Agua con filtro granular rápido',
        }"
        :sideImage="true"
        :arrayText="[
          `La filtración por medio de agentes granulares se da con el uso de la grava y la arena, son los filtros más económicos y eficientes para remover sólidos suspendidos. Funciona, una vez ingresada el agua, luego se limpia, pasando a través del medio granular utilizado en el proceso para obtener el agua filtrada de los sólidos suspendidos, éstos serán importantes para determinar la frecuencia con que se limpie el filtro.`,
        ]"
        :credits="{
          'Foto de ': '',
          'Ivan Bandura ':
            'https://unsplash.com/es/@unstable_affliction?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
          'en ': '',
          Unsplash:
            'https://unsplash.com/es/fotos/Ac97OqAWDvg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        }"
      />
    </section>
    <section class="text-justify-custom my-2">
      En esta simulación, tendrás la oportunidad de controlar la cantidad de
      microplásticos que pasarán a través del filtro. El filtro está diseñado
      para capturar una cierta cantidad de microplásticos, que se mostrará en
      forma de porcentaje. Sin embargo, es importante tener en cuenta que el
      filtro no garantiza la eliminación total de microplásticos, lo que
      significa que algunos de ellos aún podrían llegar al cuerpo de agua. El
      objetivo ideal es asegurarse de que la cantidad de microplásticos que
      quedan en el cuerpo de agua sea menor que la cantidad atrapada por el
      filtro.
    </section>
    <section class="text-justify-custom my-2">
      Para la simulación se reciben como datos de entrada: una cantidad inicial
      de microplásticos, otra que termina de residuo y el número de días por el 
      que se estará pasando esa cantidad inicial de microplásticos por el filtro.
      Simplemente haz clic en el botón que dice "Simulación" a continuación y 
      comencemos con la simulación.
    </section>
    <FiltracionForm v-if="choice"/>
    <FiltracionResults
      v-if="
        microplastics &&
        residues &&
        timeUnits &&
        choiceIsMade
      "
    />
    <FiltracionSimulation
      @chart-obtained="obtainSVG"
      v-if="
        onFilterValues.length > 0 &&
        releasedValues.length > 0 &&
        microplastics &&
        residues &&
        timeUnits &&
        choiceIsMade          
      "
    />
    <FiltracionExplained
      v-if="
        onFilterValues.length > 0 &&
        releasedValues.length > 0 &&
        microplastics &&
        residues &&
        timeUnits &&
        choiceIsMade
      "
    />
    <FiltracionPDF :svgData ="svgData"
      v-if="
        onFilterValues.length > 0 &&
        releasedValues.length > 0 &&
        microplastics &&
        residues &&
        timeUnits &&
        svgData &&
        choiceIsMade
      "
    />
    <div class="d-flex justify-content-center my-2">
      <button @click="handleButton" class="btn btn-bd-primary">
        <i class="bi bi-graph-up"></i> 
        {{
          choiceIsMade
            ? choice
              ? "Valores por defecto"
              : "Formulario"
            : "Simulación"
        }}
      </button>
    </div>
    <AwarenessSimulationSection
      v-if="
        !getIsAnswered &&
        onFilterValues.length > 0 &&
        releasedValues.length > 0 &&
        microplastics &&
        residues &&
        timeUnits &&
        svgData &&
        choiceIsMade
      "
    />
  </div>
</template>
<style scoped>
.color-techniques {
  background-color: #ff80803f;
}
.btn-bd-primary {
  --bs-btn-border-radius: 2rem;
  --bs-btn-font-weight: bold;
  --bs-btn-color: #50d890;
  --bs-btn-bg: #effffb;
  --bs-btn-border-color: #50d890;
  --bs-btn-hover-color: #effffb;;
  --bs-btn-hover-bg: #50d890;
  --bs-btn-hover-border-color: #50d890;
  --bs-btn-active-color: #effffb;
  --bs-btn-active-bg: #50d890;
  --bs-btn-active-border-color: #50d890;
}
</style>
<script>
import FiltracionForm from "@/components/FiltracionComponents/FiltracionForm.vue";
import FiltracionResults from "@/components/FiltracionComponents/FiltracionResults.vue";
import FiltracionSimulation from "@/components/FiltracionComponents/FiltracionSimulation.vue";
import FiltracionExplained from "@/components/FiltracionComponents/FiltracionExplained.vue";
import FiltracionPDF from "@/components/FiltracionComponents/FiltracionPDF.vue";
import AwarenessSimulationSection from "@/components/AwarenessSimulationSection.vue";
import InfoSection from "@/components/InfoSection.vue";
import Swal from "sweetalert2";
import { mapGetters, mapMutations } from "vuex";
import 'animate.css';
export default {
  name: "FiltracionView",
  components: {
    AwarenessSimulationSection,
    FiltracionForm,
    FiltracionResults,
    FiltracionSimulation,
    FiltracionExplained,
    InfoSection,
    FiltracionPDF,
  },
  data() {
    return {
      choiceIsMade: false,
      choice: null,
      defaultMicroplastics: 29,
      defaultResidues: 5,
      defaultTimeUnits: 9,
      svgData: null,
    };
  },
  computed: {
    ...mapGetters([
      "getMicroplastics",
      "getResidues",
      "getTimeUnits",
      "getOnFilterValues",
      "getReleasedValues",
      "getIsAnswered",
    ]),
    ...mapMutations([
      "setMicroplastics",
      "setResidues",
      "setTimeUnits",
      "setOnFilterValues",
      "setReleasedValues",
    ]),
    microplastics() {
      return this.getMicroplastics;
    },
    residues() {
      return this.getResidues;
    },
    timeUnits() {
      return this.getTimeUnits;
    },
    onFilterValues() {
      return this.getOnFilterValues;
    },
    releasedValues() {
      return this.getReleasedValues;
    },
  },

  methods: {
    handleButton() {
      Swal.fire({
        title: "¿Valores por defecto o formulario?",
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
          this.$store.commit("setMicroplastics", "");
          this.$store.commit("setResidues", "");
          this.$store.commit("setTimeUnits", "");
          this.$store.commit("setOnFilterValues", []);
          this.$store.commit("setReleasedValues", []);
          this.choiceIsMade = true;
        } else if (result.isDenied) {
          this.choice = false;
          this.$store.commit('setMicroplastics', this.defaultMicroplastics);
          this.$store.commit('setTimeUnits', this.defaultTimeUnits);
          this.$store.commit('setResidues', this.defaultResidues);
          this.choiceIsMade = true;
        } else if (result.isDismissed) {
          this.choice = this.choice;
          this.choiceIsMade = this.choiceIsMade;
        }
      });
    },
    obtainSVG(svg) {
      this.svgData = svg;
    },
  },
};
</script>
