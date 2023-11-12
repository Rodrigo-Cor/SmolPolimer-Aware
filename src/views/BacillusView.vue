<template>
  <div class="container-fluid" style="background-color: #effffb">
    <h1 class="fw-semibold text-center section-title animate__animated animate__flash">
      Degradación por bacterias <i>Bacillus</i>
    </h1>
    <article>
      <section class="text-justify-custom my-2">
        En los procesos de degradación, se da por medio de la tecnología
        <i>biofloc</i> que presentan géneros de bacterias heterótrofas tales
        como
        <i>Bacillus, Enterobacter, Pseudomonas, Staphylococcus, Klebsiella,
          Flavobacterium, Rhodococcus y Nocardia</i>
        <span>
          <button @click="() => goReferences('bacillus0')" type="button" class="btn btn-link btn-sm p-0 m-0">
            [1],
          </button>
          <button @click="() => goReferences('bacillus1')" type="button" class="btn btn-link btn-sm p-0 m-0">
            [2].
          </button>
        </span>
      </section>
      <section class="p-2 mb-4 rounded color-techniques">
        <InfoSection :img="{
          src: require('@/assets/cdc-6s2oTaFpPE4-unsplash.jpg'),
          alt: 'Bacteria Bacillus',
        }" :sideImage="false" :arrayText="[
  [
    {
      value:
        'Considerada por ser el género de bacterias más benéfica en los sistemas acuícolas, por ser capaces de producir flóculos. Posee 6 cepas con notables porcentajes de degradación de polietileno de baja densidad, entre ellas se encuentran',
      key: '',
    },
    {
      value:
        'B. carbonipphilus, B. sporothermodurans, B. coagulans, B. neidei, B. smithii, B. megaterium',
      key: 'italic',
    },
    {
      value:
        ' con un porcentaje de 34.55%, 36.54 %, 18.37 %, 36.07 %, 16.0 % y 34.48%, respectivamente',
      key: '',
      link: [
        {
          text: '[2].',
          id: 'bacillus1',
        },
      ],
    },
  ],
]" :credits="{
  'Foto de ': '',
  'CDC ':
    'https://unsplash.com/es/@cdc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
  'en ': '',
  Unsplash:
    'https://unsplash.com/es/fotos/6s2oTaFpPE4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
}" />
      </section>
    </article>
    <article class="text-justify-custom">
      <section>
        En esta simulación, tendrás la oportunidad de explorar la degradación
        con diferentes cepas de la bacteria <i>Bacillus</i>. Cada una de las
        seis cepas que se presentan tiene su propia capacidad de degradación
        única, todo gracias a los ingredientes especiales conocidos como caldo
        mineral (mineral broth, en inglés) y agar mineral (mineral agar, en
        inglés). Estos ingredientes son como el "alimento" de nuestras bacterias
        y afectarán su capacidad de degradación en un periodo de dos meses. Los
        valores de entrada que se ocuparán para la simulación incluyen la
        cantidad de microplásticos a degradar (en miligramos), el número de
        bimestres en los que se estará degradando, la cepa de <i>Bacillus</i> a
        utilizar, que dependiendo del medio de cultivo (agar o broth)
        seleccionado, determinará el porcentaje de degradación.
      </section>
      <section>
        Para simular, se presentan dos opciones: simulación con valores
        por defecto (en la que se valores predefinidos son ingresados
        automáticamente) y simulación con formulario (donde podrás escoger qué
        valores definirán la simulación gráfica). Si los datos introducidos son
        válidos, se mostrará un resumen de los campos llenados, a la vez que los
        resultados; una simulación gráfica con la que puedes interactuar y
        finalmente la explicación de dicha simulación sumado a la opción de
        descargar un PDF con los resultados.
      </section>
      <section>
        Al seleccionar "Simulación con valores por defecto", se introducen al simulador 1000 mg de microplásticos, que
        durante 12 bimestres se estarán degradando; mineral agar como medio de cultivo, la cepa <i>B. carbonipphilus</i> y
        34.55% de porcentaje de degradacion. Si por otro lado se escoge el formulario, se limita hasta 10,000 mg de
        microplásticos y un máximo de 12 bimestres, ya que dentro de estas restricciones el simulador muestra el
        comportamiento deseado.
      </section>
    </article>
    <BacillusForm v-if="disableFormButton" />
    <BacillusResults v-if="microplastics && timeUnits && percentage && growthMedium && strain" />
    <BacillusSimulation @chart-obtained="obtainSVG" v-if="degradatedValues.length > 1" />
    <BacillusExplained v-if="degradatedValues.length > 1" />
    <BacillusPDF :svgData="svgData" v-if="degradatedValues.length > 1 && svgData" />
    <div class="d-flex justify-content-center my-2">
      <button v-show="!disableFormButton" type="button" @click="handleButton1" class="btn btn-bd-primary">
        <i class="bi bi-graph-up"></i> Simulación con formulario
      </button>
    </div>
    <div class="d-flex justify-content-center my-2">
      <button v-show="!disableDefaultButton" type="button" @click="handleButton2" class="btn btn-bd-secondary">
        <i class="bi bi-graph-up"></i> Simulación con valores por defecto
      </button>
    </div>
    <AwarenessSimulationSection v-if="!getIsAnswered &&
      degradatedValues.length > 1 &&
      svgData
      " />
    <article class="mt-2">
      <section class="fw-bold">
        Toda la información presentada fue obtenida de las siguientes referencias.
      </section>
      <SectionReferences :view="'bacillus'" :references="[
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
          authors: ['S. Hossain', 'et al.'],
          title:
            'Microplastics biodegradation by biofloc-producing bacteria: An inventive biofloc technology approach',
          editorial: 'Microbiol. Res.',
          vol: '266',
          no: '127239',
          pages: [],
          yearPublication: '2023',
          link: 'https://doi.org/10.1016/j.micres.2022.127239',
          dateAccess: '17-07-2023',
        },
        {
          authors: [
            'J. K. Shrestha',
            'Joshi, P. Regmi',
            'P. Regmi',
            'G. Badahit',
          ],
          title:
            'Isolation and Identification of Low-Density Polyethylene (LDPE) Degrading Bacillus spp. from a Soil of Landfill Site',
          editorial: 'Acta Sci. Microbiol',
          vol: '2',
          no: '4',
          pages: ['30', '34'],
          yearPublication: '2019',
          link: 'https://www.researchgate.net/publication/331702789_Isolation_and_Identification_of_Low_Density_Polyethylene_LDPE_Degrading_Bacillus_spp_from_a_Soil_of_Landfill_Site',
          dateAccess: '17-07-2023',
        },
        {
          authors: ['H. Salehizadeh', 'M. Vossoughi', 'I. Alemzadeh'],
          title: 'Some investigations on bioflocculant producing bacteria',
          editorial: 'Biochem. Eng. J',
          vol: '5',
          no: '1',
          pages: ['39', '44'],
          yearPublication: '2000',
          link: 'https://doi.org/10.1016/S1369-703X(99)00066-2',
          dateAccess: '10-07-2023',
        },
        {
          authors: ['S. Saeed', 'A. Iqbal', 'F. Deeba'],
          title:
            'Biodegradation study of Polyethylene and PVC using naturally occurring plastic degrading microbes',
          editorial: 'Arch. Microbiol.',
          vol: '204',
          no: '8',
          pages: ['497'],
          yearPublication: '2022',
          link: 'https://doi.org/10.1007/s00203-022-03081-8 ',
          dateAccess: '10-07-2023',
        },
        {
          authors: ['A. Tarafdar', 'et al.'],
          title:
            'Biofilm development of Bacillus siamensis ATKU1 on pristine short chain low-density polyethylene: A case study on microbe-microplastics interaction',
          editorial: 'J. Hazard. Mater.',
          vol: '409',
          no: '124516',
          pages: [],
          yearPublication: '2021',
          link: 'https://doi.org/10.1016/j.jhazmat.2020.124516',
          dateAccess: '10-07-2023',
        },
        {
          authors: [
            'S. D. Khandare',
            'D. Agrawal',
            'N. Mehru',
            'D. R. Chaundhary',
          ],
          title:
            'Marine bacterial based enzymatic degradation of low-density polyethylene (LDPE) plastic',
          editorial: 'J. Environ. Chem. Eng.',
          vol: '10',
          no: '3',
          pages: ['107437'],
          yearPublication: '2022',
          link: 'https://doi.org/10.1016/j.jece.2022.107437 ',
          dateAccess: '10-07-2023',
        },
        {
          authors: ['J. Sharma', 'P. Agnihotri', 'K. Nandy ', 'A. K. Mitra'],
          title:
            'Isolation and Characterization of Plastic Degrading Bacteria from Soil Collected from the Dumping Grounds of an Industrial Area',
          editorial: 'Int. J. Adv. Innov Res.',
          vol: '3',
          no: '3',
          pages: ['225', '232'],
          yearPublication: '2014',
          link: 'https://www.researchgate.net/publication/279024937_Isolation_and_Characterization_of_Plastic_Degrading_Bacteria_from_Soil_Collected_from_the_Dumping_Grounds_of_an_Industrial_Area',
          dateAccess: '10-07-2023',
        },
        {
          authors: ['T. C. Ha Dang', 'et al.'],
          title:
            'Plastic degradation by thermophilic Bacillus sp. BCBT21 isolated from composting agricultural residual in Vietnam',
          editorial: 'Adv. Nat. Sci.: Nanosci. Nanotechnol.',
          vol: '9',
          no: '1',
          pages: ['11'],
          yearPublication: '2018',
          link: 'https://iopscience.iop.org/article/10.1088/2043-6254/aaabaf/meta',
          dateAccess: '10-07-2023',
        },
      ]" />
    </article>
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
import BacillusForm from "@/components/BacillusComponents/BacillusForm.vue";
import BacillusResults from "@/components/BacillusComponents/BacillusResults.vue";
import BacillusSimulation from "@/components/BacillusComponents/BacillusSimulation.vue";
import BacillusExplained from "@/components/BacillusComponents/BacillusExplained.vue";
import BacillusPDF from "@/components/BacillusComponents/BacillusPDF.vue";
import TableInformation from "@/components/TableInformation.vue";
import AwarenessSimulationSection from "@/components/AwarenessSimulationSection.vue";
import SectionReferences from "@/components/SectionReferences.vue";
import InfoSection from "@/components/InfoSection.vue";
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
    SectionReferences,
  },
  data() {
    return {
      defaultMicroplastics: 1000,
      defaultTimeUnits: 12,
      defaultPercentage: 34.55,
      defaultGrowthMedium: "mineral agar",
      defaultStrain: "B. carbonipphilus",
      svgData: null,
      disableFormButton: false,
      disableDefaultButton: false,
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
    handleButton1() {
      this.setShowReferences(false);
      this.$store.commit("setMicroplastics", "");
      this.$store.commit("setTimeUnits", "");
      this.$store.commit("setGrowthMedium", "");
      this.$store.commit("setStrain", "");
      this.$store.commit("setPercentage", "");
      this.$store.commit("setDegradatedValues", []);
      this.disableDefaultButton = false;
      this.disableFormButton = true;
    },
    handleButton2() {
      this.setShowReferences(false);
      this.$store.commit("setMicroplastics", this.defaultMicroplastics);
      this.$store.commit("setTimeUnits", this.defaultTimeUnits);
      this.$store.commit("setGrowthMedium", this.defaultGrowthMedium);
      this.$store.commit("setStrain", this.defaultStrain);
      this.$store.commit("setPercentage", this.defaultPercentage);
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
