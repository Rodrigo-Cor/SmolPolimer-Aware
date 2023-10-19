<template>
  <div class="container" style="background-color: #effffb">
    <h3 class="fw-semibold text-center section-title">
      Filtración granular rápida
    </h3>
    <section class="mt-2">
      Se han desarrollado diversos procesos para la limpieza, los cuales pueden
      ser clasificados en dos tipos: procesos de separación y procesos de
      degradación. En los procesos de separación, se incluyen técnicas como la
      filtración granular rápida, la filtración de disco, la filtración por
      membrana y la flotación por aire disuelto, todo éstos pueden eliminar al
      menos el 90% de microplásticos presentes en el agua.
    </section>
    <section class="p-2 mb-4 rounded color-techniques">
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
    <section class="text-justify-custom">
      En esta simulación, tendrás la oportunidad de controlar la cantidad de
      microplásticos que pasarán a través del filtro. El filtro está diseñado
      para capturar una cierta cantidad de microplásticos, que se mostrará en
      forma de porcentaje. Sin embargo, es importante tener en cuenta que el
      filtro no garantiza la eliminación total de microplásticos, lo que
      significa que algunos de ellos aún podrían llegar al cuerpo de agua. El
      objetivo ideal es asegurarse de que la cantidad de microplásticos que
      quedan en el cuerpo de agua sea menor que la cantidad atrapada por el
      filtro. Simplemente haz clic en el botón a continuación y comencemos la
      simulación.
    </section>

    <section class="text-justify-custom my-2">
      Para la simulación se reciben como datos de entrada: una cantidad inicial
      de microplásticos, otra que termina de residuo y el número de días por el
      que se estará pasando esa cantidad de microplásticos por el filtro. Haz
      clic en el botón de simulación y podrás escoger entre valores por defecto,
      o cambiarlos por otros por medio de un formulario.
    </section>

    <div>
      <AwarenessSimulationSection />
      <FiltracionForm v-if="choice" />
      <FiltracionResults
        v-if="
          microplastic &&
          residue &&
          treatment &&
          choiceIsMade"
      />
      <FiltracionSimulation
        @chart-obtained="obtainSVG"
        v-if="
          onFilterValues.length > 0 &&
          releasedValues.length > 0 &&
          microplastic &&
          residue &&
          treatment &&
          choiceIsMade          
        "
      />
      <FiltracionExplained
        v-if="
          onFilterValues.length > 0 &&
          releasedValues.length > 0 &&
          microplastic &&
          residue &&
          treatment &&
          choiceIsMade
        "
      />
    </div>
    <div class="d-flex justify-content-center my-2">
      <button @click="handleButton" class="btn btn-outline-success btn-lg">
        {{
          choiceIsMade
            ? choice
              ? "Valores por defecto"
              : "Formulario"
            : "Simulación"
        }}
      </button>
    </div>
    <FiltracionPDF :svgData ="svgData"
      v-if="
        onFilterValues.length > 0 &&
        releasedValues.length > 0 &&
        microplastic &&
        residue &&
        treatment &&
        svgData &&
        choiceIsMade
      "
    />
  </div>
</template>
<style scoped>
.my-paragraph {
  background-color: rgba(80, 216, 144, 0.25);
}

.color-techniques {
  background-color: #ff80803f;
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
      defaultMicroplastic: 29,
      defaultResidue: 5,
      defaultTreatment: 9,
      svgData: null,
    };
  },

  computed: {
    ...mapGetters([
      "getFiltracionValues",
      "getOnFilterValues",
      "getReleasedValues",
    ]),
    ...mapMutations([
      "setFiltracionValues",
      "setROnFilterValues",
      "setReleasedValues",
    ]),
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
    handleButton() {
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
          this.$store.commit("setFiltracionValues", []);
          this.$store.commit("setOnFilterValues", []);
          this.$store.commit("setReleasedValues", []);
          this.choiceIsMade = true;
        } else if (result.isDenied) {
          this.choice = false;
          this.$store.commit("setFiltracionValues", [
            this.defaultMicroplastic,
            this.defaultResidue,
            this.defaultTreatment,
          ]);
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
