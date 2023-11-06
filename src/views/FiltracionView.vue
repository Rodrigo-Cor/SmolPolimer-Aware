<template>
  <div class="container-fluid" style="background-color: #effffb">
    <h1
      class="fw-semibold text-center section-title animate__animated animate__flash"
    >
      Filtración granular rápida
    </h1>
    <section class="text-justify-custom my-2">
      Se han desarrollado diversos procesos para la limpieza, los cuales pueden
      ser clasificados en dos tipos: procesos de separación y procesos de
      degradación. En los procesos de separación, se incluyen técnicas como la
      filtración granular rápida, la filtración de disco, la filtración por
      membrana y la flotación por aire disuelto, todos estos pueden eliminar al
      menos el 90% de microplásticos presentes en el agua
      <button
        @click="() => goReferences('filtracion0')"
        type="button"
        class="btn btn-link btn-sm p-0 m-0"
      >
        [1].
      </button>
    </section>
    <section class="p-2 my-2 rounded color-techniques">
      <InfoSection
        :img="{
          src: require('@/assets/ivan-bandura-Ac97OqAWDvg-unsplash.jpg'),
          alt: 'Agua con filtro granular rápido',
        }"
        :sideImage="false"
        :arrayText="[
          [
            {
              value:
                'La filtración por medio de agentes granulares se da con el uso de la grava y la arena, son los filtros más económicos y eficientes para remover sólidos suspendidos. Funciona, una vez ingresada el agua, luego se limpia, pasando a través del medio granular utilizado en el proceso para obtener el agua filtrada de los sólidos suspendidos, estos serán importantes para determinar la frecuencia con que se limpie el filtro',
              link: [
                {
                  text: '[2].',
                  id: 'filtracion1',
                },
              ],
            },
          ],
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
      En esta simulación, tendrás la oportunidad de controlar la cantidad en
      miligramos de microplásticos que pasarán a través del filtro. El filtro
      está diseñado para capturar una cierta cantidad de microplásticos, que se
      mostrará en forma de porcentaje. Sin embargo, es importante tener en
      cuenta que el filtro no garantiza la eliminación total de microplásticos,
      lo que significa que algunos de ellos aún podrían llegar al cuerpo de
      agua. El objetivo ideal es asegurarse de que la cantidad de microplásticos
      que quedan en el cuerpo de agua sea menor que la cantidad atrapada por el
      filtro. Para la simulación se reciben como datos de entrada: una cantidad
      de microplásticos en miligramos, otra que termina de residuo y el número
      de días por el que se estará pasando esa cantidad por el filtro.
    </section>
    <section class="text-justify-custom my-2">
      Para poder simular, se presentan dos opciones: simulación con valores por
      defecto (en la que se valores predefinidos son ingresados automáticamente)
      y simulación con formulario (donde podrás escoger qué valores definirán la
      simulación gráfica). Si los datos introducidos son válidos, se mostrará un
      resumen de los campos llenados, a la vez que los resultados; una
      simulación gráfica con la que puedes interactuar y finalmente la
      explicación de dicha simulación sumado a la opción de descargar un PDF con
      los resultados.
    </section>
    <FiltracionForm v-if="disableFormButton" />
    <FiltracionResults v-if="microplastics && residues && timeUnits" />
    <FiltracionSimulation
      @chart-obtained="obtainSVG"
      v-if="onFilterValues.length > 0 && releasedValues.length > 0"
    />
    <FiltracionExplained
      v-if="onFilterValues.length > 0 && releasedValues.length > 0"
    />
    <FiltracionPDF
      :svgData="svgData"
      v-if="onFilterValues.length > 0 && releasedValues.length > 0 && svgData"
    />
    <div class="d-flex justify-content-center my-2">
      <button
        v-show="!disableFormButton"
        type="button"
        @click="handleButton1"
        class="btn btn-bd-primary"
      >
        <i class="bi bi-graph-up"></i> Simulación con formulario
      </button>
    </div>
    <div class="d-flex justify-content-center my-2">
      <button
        v-show="!disableDefaultButton"
        type="button"
        @click="handleButton2"
        class="btn btn-bd-secondary"
      >
        <i class="bi bi-graph-up"></i> Simulación con valores por defecto
      </button>
    </div>
    <AwarenessSimulationSection
      v-if="
        !getIsAnswered &&
        onFilterValues.length > 0 &&
        releasedValues.length > 0 &&
        svgData
      "
    />

    <article class="mt-2">
      <section class="fw-bold">
        Toda la información presentada se utilizaron las siguientes referencias.
      </section>
      <SectionReferences
        :view="'filtracion'"
        :references="[
          {
            authors: [
              'M. R. Karimi Estahbanati',
              'M. Kiendrebeogo',
              'A. Khosravanipour Mostafazadeh',
              'P. Drogui',
              'R. D. Tyagi',
            ],
            title:
              'Treatment processes for microplastics and nanoplastics in waters: State-of-the-art review',
            editorial: 'Mar. Pollut. Bull.',
            vol: '168',
            no: '112374',
            pages: [],
            yearPublication: '2021',
            link: 'https://doi.org/10.1016/j.marpolbul.2021.112374 ',
            dateAccess: '26-09-2023',
          },
          {
            authors: ['Geocities.ws'],
            title: 'FILTRACIÓN EN MEDIOS GRANULARES',
            editorial: 'Ingeniería de Tratamiento y Acondicionamiento de Aguas',
            vol: '',
            no: '',
            pages: [],
            yearPublication: '',
            link: 'https://www.geocities.ws/edrochac/sanitaria/filtracion4.pdf',
            dateAccess: '02-10-2023',
          },
          {
            authors: ['H. Hidayaturrahman', 'T. Lee'],
            title:
              'A study on characteristics of microplastic in wastewater of South Korea: Identification, quantification, and fate of microplastics during treatment process',
            editorial: 'Mar. Pollut. Bull.',
            vol: '146',
            no: '71',
            pages: ['696', '702'],
            yearPublication: '2019',
            link: 'https://doi.org/10.1016/j.marpolbul.2019.06.071',
            dateAccess: '24-07-2023',
          },
          {
            authors: ['Z. Wang', 'M. Sedighi', 'A. Lea-Langton'],
            title:
              'Filtration of microplastic spheres by biochar: removal efficiency and immobilisation mechanisms',
            editorial: 'Water Res.',
            vol: '184',
            no: '116165',
            pages: ['116165'],
            yearPublication: '2020',
            link: 'https://doi.org/10.1016/j.watres.2020.116165',
            dateAccess: '19-07-2023',
          },
          {
            authors: ['J. Bayo', 'J. López-Castellanos', 'S. Olmos'],
            title:
              'Membrane bioreactor and rapid sand filtration for the removal of microplastics in an urban wastewater treatment plant',
            editorial: 'Mar. Pollut. Bull.',
            vol: '156',
            no: '111211',
            pages: [],
            yearPublication: '2020',
            link: 'https://doi.org/10.1016/j.marpolbul.2020.111211',
            dateAccess: '19-07-2023',
          },
          {
            authors: ['J. Talvitie', 'A. Mikola', 'A. Koistinen', 'O. Setälä'],
            title:
              'Solutions to microplastic pollution -Removal of microplastics from wastewater effluent with advanced wastewater treatment technologies',
            editorial: 'Water Res.',
            vol: '123',
            no: '5',
            pages: ['401', '407'],
            yearPublication: '2017',
            link: 'https://doi.org/10.1016/j.watres.2017.07.005',
            dateAccess: '20-07-2023',
          },
        ]"
      />
    </article>
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
  --bs-btn-hover-color: #272727;
  --bs-btn-hover-bg: #50d890;
  --bs-btn-hover-border-color: #50d890;
  --bs-btn-active-color: #272727;
  --bs-btn-active-bg: #50d890;
  --bs-btn-active-border-color: #50d890;
}
.btn-bd-secondary {
  --bs-btn-border-radius: 2rem;
  --bs-btn-font-weight: bold;
  --bs-btn-color: #4f98ca;
  --bs-btn-bg: #effffb;
  --bs-btn-border-color: #4f98ca;
  --bs-btn-hover-color: #272727;
  --bs-btn-hover-bg: #4f98ca;
  --bs-btn-hover-border-color: #4f98ca;
  --bs-btn-active-color: #272727;
  --bs-btn-active-bg: #4f98ca;
  --bs-btn-active-border-color: #4f98ca;
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
import SectionReferences from "@/components/SectionReferences.vue";
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
    SectionReferences,
  },
  data() {
    return {
      defaultMicroplastics: 29,
      defaultResidues: 5,
      defaultTimeUnits: 9,
      svgData: null,
      disableFormButton: false,
      disableDefaultButton: false,
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
    handleButton1() {
      this.setShowReferences(false);
      this.$store.commit("setMicroplastics", "");
      this.$store.commit("setResidues", "");
      this.$store.commit("setTimeUnits", "");
      this.$store.commit("setOnFilterValues", []);
      this.$store.commit("setReleasedValues", []);
      this.disableDefaultButton = false;
      this.disableFormButton = true;
    },
    handleButton2() {
      this.setShowReferences(false);
      this.$store.commit("setMicroplastics", this.defaultMicroplastics);
      this.$store.commit("setTimeUnits", this.defaultTimeUnits);
      this.$store.commit("setResidues", this.defaultResidues);
      this.disableDefaultButton = true;
      this.disableFormButton = false;
      const currentScrollY = window.scrollY;
      const resultsSection = document.getElementById("results-section");
      setTimeout(() => {
        if (!resultsSection) window.scrollTo(0, currentScrollY);
        else if (resultsSection) {
          resultsSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 340);
    },
    obtainSVG(svg) {
      this.svgData = svg;
    },
    ...mapMutations({
      setShowReferences: "setShowReferences",
    }),
    goReferences(id) {
      this.setShowReferences(true);
      setTimeout(() => {
        const reference = document.getElementById(id);
        if (reference) {
          reference.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 200);
    },
  },
};
</script>
