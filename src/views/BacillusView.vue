<template>
  <div class="container" style="background-color: #effffb">
    <h3 class="fw-semibold text-center section-title">
      Degradación por bacterias Bacillus
    </h3>
    <article class="text-justify-custom">
      En los procesos de degradación, se da por medio de la tecnología
      <i>biofloc</i> que presentan géneros de bacterias heterótrofas tales como
      <i
        >Bacillus, Enterobacter, Pseudomonas, Staphylococcus, Klebsiella,
        Flavobacterium, Rhodococcus y Nocardia</i
      >.

      <section class="p-2 mb-4 rounded color-techniques">
        <InfoSection
          :img="{
            src: require('@/assets/cdc-6s2oTaFpPE4-unsplash.jpg'),
            alt: 'Bacteria Bacillus',
          }"
          :sideImage="false"
          :arrayText="[
            `Considerada por ser el género de bacterias más benéfica en los sistemas acuícolas, por ser capaces de producir flóculos. Posee 6 cepas con notables porcentajes de degradación de polietileno de baja densidad, entre ellas se encuentran B. carbonipphilus, B. sporothermodurans, B. coagulans, B. neidei, B. smithii, B. megaterium con un porcentaje de 34.55%, 36.54 %, 18.37 %, 36.07 %, 16.0 % y 34.48%, respectivamente.`,
          ]"
          :credits="{
            'Foto de ': '',
            'CDC ':
              'https://unsplash.com/es/@cdc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
            'en ': '',
            Unsplash:
              'https://unsplash.com/es/fotos/6s2oTaFpPE4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
          }"
        />
      </section>
    </article>
    <article class="text-justify-custom">
      <section>
        En esta simulación, tendrás la oportunidad de explorar la degradación
        con diferentes cepas de la bacteria Bacillus. Cada una de las seis cepas
        que se presentan tiene su propia capacidad de degradación única, todo
        gracias a los ingredientes especiales conocidos como caldo mineral
        (Mineral Broth, en inglés) y agar mineral (Mineral Agar, en inglés).
        Estos ingredientes son como el "alimento" de nuestras bacterias y
        afectarán su capacidad de degradación en un periodo de dos meses. Los
        valores de entrada que se ocuparán para la simulación incluyen la
        cantidad de microplásticos a degradar, la temperatura a la que se
        encontrarán las bacterias, para degradar los microplásticos; el
        porcentaje de degradación está dado por la cepa de Bacillus que se
        utilice.
      </section>
    </article>

    <div>
      <AwarenessSimulationSection v-if="!getIsAnswered" />
      <BacillusForm v-if="choice" />
      <BacillusResults
        v-if="
          quantity &&
          temperature &&
          bimester &&
          percentage &&
          mineral &&
          choiceIsMade
        "
      />
      <BacillusSimulation
        @chart-obtained="obtainSVG"
        v-if="
          degradatedValues.length > 0 &&
          quantity &&
          temperature &&
          bimester &&
          percentage &&
          mineral &&
          choiceIsMade
        "
      />
      <BacillusExplained 
        v-if="
          degradatedValues.length > 0 &&
          quantity &&
          temperature &&
          bimester &&
          percentage &&
          mineral &&
          choiceIsMade
        " />
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
    <BacillusPDF :svgData="svgData"
      v-if="
        degradatedValues.length > 0 && 
        quantity &&
        temperature &&
        bimester &&
        percentage &&
        mineral &&
        svgData &&
        choiceIsMade  
      "
    />
  </div>
</template>
<style scoped>
.color-techniques {
  background-color: #610c9f3f;
}
</style>
<script>
import BacillusForm from "@/components/BacillusComponents/BacillusForm.vue";
import BacillusResults from "@/components/BacillusComponents/BacillusResults.vue";
import BacillusSimulation from "@/components/BacillusComponents/BacillusSimulation.vue";
import BacillusExplained from "@/components/BacillusComponents/BacillusExplained.vue";
import BacillusPDF from "@/components/BacillusComponents/BacillusPDF.vue";
import TableInformation from "@/components/TableInformation.vue";
import AwarenessSimulationSection from "@/components/AwarenessSimulationSection.vue";
import InfoSection from "@/components/InfoSection.vue";
import Swal from "sweetalert2";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "BacillusView",
  components: {
    BacillusForm,
    BacillusResults,
    BacillusSimulation,
    BacillusExplained,
    BacillusPDF,
    TableInformation,
    InfoSection,
    AwarenessSimulationSection,
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
    ...mapGetters(
      ["getBacillusValues", "getDegradatedValues", "getIsAnswered"],
    ),
    ...mapMutations(["setBacillusValues"]),
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
          this.$store.commit("setBacillusValues", []);
          this.$store.commit("setDegradatedValues", []);
          this.choiceIsMade = true;
        } else if (result.isDenied) {
          this.choice = false;
          this.$store.commit("setBacillusValues", [
            this.defaultQuantity,
            this.defaultTemperature,
            this.defaultBimester,
            this.defaultPercentage,
            this.defaultMineral,
            this.defaultStrain,
          ]);
          this.choiceIsMade = true;
        } else if (result.isDismissed) {
          this.choiceIsMade = this.choiceIsMade;
          this.choice = this.choice;
        }
        console.log("choice: " + this.choice);
        console.log("choiceIsMade: a" + this.choiceIsMade);
      });
    },
    obtainSVG(svg) {
      this.svgData = svg;
    },
  },
};
</script>
