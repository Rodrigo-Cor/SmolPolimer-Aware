<template>
  <div class="container-fluid" style="background-color: #effffb">
    <h1 class="fw-semibold text-center section-title animate__animated animate__flash">
      Degradación por bacterias <i>Bacillus</i>
    </h1>
    <article>
      <section class="text-justify-custom my-2">
        En los procesos de degradación, se da por medio de la tecnología
      <i>biofloc</i> que presentan géneros de bacterias heterótrofas tales como
      <i
        >Bacillus, Enterobacter, Pseudomonas, Staphylococcus, Klebsiella,
        Flavobacterium, Rhodococcus y Nocardia</i
      >.
      </section>
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
        con diferentes cepas de la bacteria <i>Bacillus</i>. Cada una de las seis cepas
        que se presentan tiene su propia capacidad de degradación única, todo
        gracias a los ingredientes especiales conocidos como caldo mineral
        (mineral broth, en inglés) y agar  mineral (mineral agar, en inglés). Estos 
        ingredientes son como el "alimento" de nuestras bacterias y afectarán su 
        capacidad de degradación en un periodo de dos meses. Los valores de entrada
        que se ocuparán para la simulación incluyen la cantidad de microplásticos a
        degradar, el número de bimestres en los que se estará degradando, la cepa de 
        <i>Bacillus</i> a utilizar, que dependiendo del medio de cultivo (agar o broth)
        seleccionado, determinará el porcentaje de degradación. Simplemente haz clic
        en el botón que dice "Simulación" a continuación y comencemos. 
      </section>
    </article>
    <BacillusForm v-if="choice" />
    <BacillusResults
      v-if="
        microplastics &&
        timeUnits &&
        percentage &&
        growthMedium &&
        strain &&
        choiceIsMade
      "
    />
    <BacillusSimulation
      @chart-obtained="obtainSVG"
      v-if="
        degradatedValues.length > 0 &&
        microplastics &&
        timeUnits &&
        percentage &&
        growthMedium &&
        strain &&
        choiceIsMade
      "
    />
    <BacillusExplained 
      v-if="
        degradatedValues.length > 0 &&
        microplastics &&
        timeUnits &&
        percentage &&
        growthMedium &&
        strain &&
        choiceIsMade
      " 
    />
    <BacillusPDF :svgData="svgData"
      v-if="
        degradatedValues.length > 0 && 
        microplastics &&
        timeUnits &&
        percentage &&
        growthMedium &&
        strain &&
        svgData &&
        choiceIsMade  
      "
    />
    <div class="d-flex justify-content-center my-2">
      <button @click="handleButton" class="btn btn-bd-primary">
        <i class="bi bi-graph-down"></i> 
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
        degradatedValues.length > 0 && 
        microplastics &&
        timeUnits &&
        percentage &&
        growthMedium &&
        strain &&
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
.btn-bd-primary {
  --bs-btn-border-radius: 2rem;
  --bs-btn-font-weight: bold;
  --bs-btn-color: #50d890;
  --bs-btn-bg: #effffb;
  --bs-btn-border-color: #50d890;
  --bs-btn-hover-color: #272727;;
  --bs-btn-hover-bg: #50d890;
  --bs-btn-hover-border-color: #50d890;
  --bs-btn-active-color: #272727;
  --bs-btn-active-bg: #50d890;
  --bs-btn-active-border-color: #50d890;
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
      defaultMicroplastics: 1000,
      defaultTimeUnits: 12,
      defaultPercentage: 34.55,
      defaultGrowthMedium: "mineral agar",
      defaultStrain: "B. carbonipphilus",
      svgData: null,
    };
  },
  computed: {
    ...mapGetters([
      "getDegradatedValues",
      "getIsAnswered",
      "getMicroplastics",
      "getTimeUnits",
      "getGrowthMedium",
      "getStrain",
      "getPercentage",
    ]),
    ...mapMutations([
      "setMicroplastics",
      "setTimeUnits",
      "setGrowthMedium",
      "setStrain",
      "setPercentage",
      "setDegradatedValues",
    ]),
    microplastics() {
      return this.getMicroplastics;
    },
    timeUnits() {
      return this.getTimeUnits;
    },
    percentage() {
      return this.getPercentage;
    },
    growthMedium() {
      return this.getGrowthMedium;
    },
    strain() {
      return this.getStrain;
    },
    degradatedValues() {
      return this.getDegradatedValues;
    },
  },
  methods: {
    handleButton() {
      Swal.fire({
        title: "¿Valores por defecto o formulario?",
        text: "Ve a la simulación con valores por defecto o asígnalos por medio del formulario.",
        background: "#272727",
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
        confirmButtonAriaLabel: "Formulario",

        showDenyButton: true,
        denyButtonText: "Valores por defecto",
        denyButtonColor: "#4f98ca",
        denyButtonAriaLabel: "Valores por defecto",

        showCancelButton: true,
        cancelButtonText: "Cancelar",
        cancelButtonAriaLabel: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.choice = true;
          this.$store.commit("setMicroplastics", "");
          this.$store.commit("setTimeUnits", "");
          this.$store.commit("setGrowthMedium", "");
          this.$store.commit("setStrain", "");
          this.$store.commit("setPercentage", "");  
          this.$store.commit("setDegradatedValues", []);
          this.choiceIsMade = true;
        } else if (result.isDenied) {
          this.choice = false;
          this.$store.commit("setMicroplastics", this.defaultMicroplastics);
          this.$store.commit("setTimeUnits", this.defaultTimeUnits);
          this.$store.commit("setGrowthMedium", this.defaultGrowthMedium);
          this.$store.commit("setStrain", this.defaultStrain);
          this.$store.commit("setPercentage", this.defaultPercentage);  
          this.choiceIsMade = true;
        } else if (result.isDismissed) {
          this.choiceIsMade = this.choiceIsMade;
          this.choice = this.choice;
        }
      });
    },
    obtainSVG(svg) {
      this.svgData = svg;
    },
  },
};
</script>