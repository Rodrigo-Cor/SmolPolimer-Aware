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
      filtro.
    </section>
    <section class="text-justify-custom my-2">
      Para acceder a la simulación, deberás interactuar con el formulario, en el 
      que ya se te presentan en cada uno de los campos, valores recomendados para simular: 
      se introducen 29 mg de microplásticos que durante 9 días se estarán filtrando, 
      al mismo tiempo que se indican 9 mg de residuos microplásticos para los cálculos. 
      También tienes la posibilidad de introducir tus propios valores, procurando que no 
      excedan los 40 mg de microplásticos, 20 mg de residuos y un máximo de 24 días; se recomienda
      introducir una cantidad alta de días, ya que dentro de estas restricciones el simulador 
      muestra el comportamiento deseado. Si los datos introducidos son válidos, se mostrará un 
      resumen de los campos llenados, a la vez que los resultados, la simulación gráfica y 
      finalmente una explicación de ésta, sumado a la opción de descargar un archivo PDF 
      con todo lo mencionado previamente.
    </section>
    <FiltracionForm />
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

    <AwarenessSimulationSection
      v-if="
        !isAnswered &&
        onFilterValues.length > 0 &&
        releasedValues.length > 0 &&
        svgData
      "
    />
    <article class="mt-2">
      <section class="fw-bold">
        Toda la información presentada fue obtenida de las siguientes referencias.
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
      svgData: null,
      disableFormButton: false,
      disableDefaultButton: false,
    };
  },
  computed: {
    ...mapGetters({
      microplastics: "getMicroplastics",
      residues: "getResidues",
      timeUnits: "getTimeUnits",
      onFilterValues: "getOnFilterValues",
      releasedValues: "getReleasedValues",
      isAnswered: "getIsAnswered",
    }),
  },
  methods: {
    obtainSVG(svg) {
      this.svgData = svg;
    },
    ...mapMutations({
      setShowReferences: "setShowReferences",
      setMicroplastics: "setMicroplastics",
      setResidues: "setResidues",
      setTimeUnits: "setTimeUnits",
      setOnFilterValues: "setOnFilterValues",
      setReleasedValues: "setReleasedValues",
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
