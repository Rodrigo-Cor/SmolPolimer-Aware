<template>
  <div>
      <div class="container-fluid text-justify-custom">
        Se han desarrollado diversos procesos para la limpieza, los cuales
        pueden ser clasificados en dos tipos: procesos de separación y procesos
        de degradación. En los procesos de separación, se incluyen técnicas como
        la filtración granular rápida, la filtración de disco, la filtración por
        membrana y la flotación por aire disuelto, todo éstos pueden eliminar al
        menos el 90% de microplásticos presentes en el agua.
        <h3 class="text-center">Procesos de separación</h3>
        <InfoSection
          :img="{
            src: require('@/assets/ivan-bandura-6wSevhW1Dzc-unsplash.jpg'),
            alt: 'Agua con filtro granular rápido',
            width: 350,
            height: 200,
          }"
          :sideImage="true"
          :arrayText="[
            `La filtración por medio de agentes granulares se da con el uso de la grava y la arena, son los filtros más económicos y eficientes para remover sólidos suspendidos. Funciona, una vez ingresada el agua, luego se limpia, pasando a través del medio granular utilizado en el proceso para obtener el agua filtrada de los sólidos suspendidos, éstos serán importantes para determinar la frecuencia con que se limpie el filtro.`,
          ]"
          :credits="{
            'Imagen de ': '',
            'Ivan Bandura ':
              'https://unsplash.com/es/@unstable_affliction?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
            'en ': '',
            Unsplash:
              'https://unsplash.com/es/fotos/6wSevhW1Dzc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          }"
        />

        <InfoSection
          :img="{
            src: require('@/assets/ivan-bandura-8QvN0G-zff0-unsplash.jpg'),
            alt: 'Filtración por disco',
            width: 350,
            height: 200,
          }"
          :sideImage="false"
          :arrayText="[
            `La filtración que utiliza discos retiene sólidos suspendidos en el agua, su funcionamiento consiste en apilar los discos para desembocar en un canal central, fluyendo el agua filtrada de los sólidos suspendidos y cada disco inicia con ranuras más abiertas en los perímetros exteriores para que sólidos más grandes queden atrapados y en el interior más estrechos para los sólidos pequeños. `,
          ]"
          :credits="{
            'Imagen de ': '',
            'Ivan Bandura ':
              'https://unsplash.com/es/@unstable_affliction?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
            'en ': '',
            Unsplash:
              'https://unsplash.com/es/fotos/6wSevhW1Dzc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          }"
        />

        <InfoSection
          :img="{
            src: require('@/assets/pawel-czerwinski-YoJFJLdiJw8-unsplash.jpg'),
            alt: 'Filtración por membrana',
            width: 350,
            height: 200,
          }"
          :sideImage="true"
          :arrayText="[
            `Una membrana se define como una barrera que separa dos fases entre sí, es decir, restringe el movimiento de los componentes que pases a través de ella. Por lo tanto, esta técnica se clasifica en dos tipos de membranas: orgánicas e inorgánicas, las cuales utilizarán el proceso de microfiltración para retener microplásticos entre sus poros, de tal modo que el tamaño de éstos será determinante para atrapar eficazmente a los microplásticos suspendidos. `,
          ]"
          :credits="{
            'Imagen de ': '',
            'Pawel Czerwinski ':
              'https://unsplash.com/es/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
            'en ': '',
            Unsplash:
              'https://unsplash.com/es/fotos/6wSevhW1Dzc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          }"
        />

        <InfoSection
          :img="{
            src: require('@/assets/DAF.jpg'),
            alt: 'Filtra por flotación por aire disuelto',
            width: 350,
            height: 200,
          }"
          :sideImage="false"
          :arrayText="[
            `La flotación por aire disuelto es una técnica que utiliza la adición de burbujas de aire finas, éstas harán que los sólidos suspendidos se trasladen a la parte superior, debajo de ellos el agua se habrá limpiado por completo. `,
          ]"
          :credits="{
            'Imagen cortesía de': '',
            'NetSol Water ':
              'https://www.netsolwater.com/daf-treatment-for-waste-activated-sludge-thickening.php?blog=1279',
          }"
        />
      </div>

      <router-link
        to="/tecnicas/filtracion"
        class="btn btn-primary m-3"
        role="button"
        >Ir al simulador</router-link
      >

      <div class="container-fluid text-justify-custom">
        <h3 class="text-center">Técnicas de degradación utilizando géneros de bacterias </h3>
        En los procesos de degradación, se da por medio de la tecnología
        <i>biofloc</i> que presentan géneros de bacterias heterótrofas tales
        como
        <i
          >Bacillus, Enterobacter, Pseudomonas, Staphylococcus, Klebsiella,
          Flavobacterium, Rhodococcus y Nocardia</i
        >.
        <TableInformation
          :information="[
            {
              type: 'Bacillus',
              description:
                'Considerada por ser el género de bacterias más benéfica en los sistemas acuícolas, por ser capaces de producir flóculos. Posee 6 cepas con notables porcentajes de degradación de polietileno de baja densidad, entre ellas se encuentran B. carbonipphilus, B. sporothermodurans, B. coagulans, B. neidei, B. smithii, B. megaterium con un porcentaje de 34.55%, 36.54 %, 18.37 %, 36.07 %, 16.0 % y 34.48%, respectivamente.',
            },
            {
              type: 'Enterobacter',
              description:
                'Este género de bacterias cuando se combina con otras cepas o incluso bacterias puede ser más efectiva en la degradación de polietileno de baja densidad en un 64% y polipropileno en un 63% dentro de un periodo de 160 días.',
            },
            {
              type: 'Pseudomonas',
              description:
                'Se caracteriza este género de bacterias se caracteriza por degradar polietileno de baja densidad en un 21% y policloruro de vinilo en un 8.70%.',
            },
            {
              type: 'Staphylococcus',
              description:
                'Para las bacterias de este género se encontró una cepa en específico llamada Staphylocccus epidermis, conocida por tener un alto grado de degradación en materiales envasado comerciales fabricados con polietileno de baja densidad.',
            },
            {
              type: 'Klebsiella',
              description:
                'El género de estas bacterias tiene la capacidad de degradar el polietileno de alta densidad en un 18.4%. Igualmente, se destaca por tener dos cepas, conocidas como como K. Pneumonia y Klebsiella sp. las cuales degradan PET y PVC, respectivamente.',
            },
            {
              type: 'Flavobacterium',
              description:
                'Para este género de bacterias se encontró que puede formar una biopelícula en la superficie de polietilenos de baja densidad causándoles rugosidad de la superficie. En cuanto a la degradación, éstas se centran en la degradación de fibras de nailon.',
            },
            {
              type: 'Rhodococcus',
              description:
                'Las bacterias de este género se caracterizan por degradar el PET y compuestos plásticos aromáticos.',
            },
            {
              type: 'Nocardia',
              description:
                'Usualmente este género de bacterias se puede encontrar en suelos con abundante materia orgánica. Se caracteriza por degradar eficazmente los plásticos, además de lograr una degradación del caucho natural y vulcanizado en un producto de menor volumen.',
            },
          ]"
          :headers="['Tipo', 'Características']"
        />
        <router-link
        to="/tecnicas/bacillus"
        class="btn btn-primary m-3"
        role="button"
        >Ir al simulador</router-link
      >

      <SectionReferences
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
            authors: ['Carbotecnia.info'],
            title:
              '¿Qué son los filtros de discos?',
            editorial: '',
            vol: '',
            no: '',
            pages: [],
            yearPublication: '',
            link: 'https://www.carbotecnia.info/aprendizaje/filtros-de-discos/que-son-los-filtros-de-discos/',
            dateAccess: '02-10-2023',
          },
          {
            authors: ['Novo Agua SA de CV'],
            title:
              'Filtros de discos',
            editorial: '',
            vol: '',
            no: '',
            pages: [],
            yearPublication: 'mayo 2019',
            link: 'https://novoagua.com/producto/filtros-de-discos/',
            dateAccess: '02-10-2023',
          },
          {
            authors: [
              'E. Obotey Ezugbe', 'S. Rathilal',
            ],
            title:
              'Tecnologías de membranas en el tratamiento de aguas residuales: una revisión',
            editorial: 'Membranas',
            vol: '10',
            no: '5',
            pages: ['89'],
            yearPublication: 'abril 2020',
            link: 'https://doi.org/10.3390/membranes10050089',
            dateAccess: '02-10-2023',
          },
          {
            authors: [
              'E. Moron.',
            ],
            title:
              '¿Qué es la filtración por membrana?',
            editorial: 'Hive',
            vol: '',
            no: '',
            pages: [],
            yearPublication: 'marzo 2022',
            link: 'https://hive.blog/hive-196387/@emiliomoron/que-es-la-filtracion-por-membrana',
            dateAccess: '02-10-2023',
          },
          {
            authors: [
              'T. Equipment',
            ],
            title:
              '¿Qué es la flotación por aire disuelto o DAF?',
            editorial: 'iaagua',
            vol: '',
            no: '',
            pages: [],
            yearPublication: 'noviembre 2018',
            link: 'https://www.iagua.es/noticias/toro-equipment/que-es-flotacion-aire-disuelto-o-daf',
            dateAccess: '02-10-2023',
          },
        ]"
      />
      </div>
  </div>
</template>

<script>
import InfoSection from "@/components/InfoSection.vue";
import TableInformation from "@/components/TableInformation.vue";
import SectionReferences from "@/components/SectionReferences.vue";
export default {
  name: "CleaningTechniquesView",
  components: {
    InfoSection,
    TableInformation,
    SectionReferences,
  },
};
</script>
