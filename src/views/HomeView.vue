<template>
  <!--
  <div class="container-fluid">
    <p>Color: {{ color[0] }}</p>
    <button class="btn" @click="showColor('blue', 'light', 1)">
      Generar colores
    </button>
  </div>
   -->

  <CarouselHome />
  <main class="container-fluid text-justify-custom color-home">
    <article id="section-question">
      <AwarenessHomeSection />
    </article>
    <article class="row">
      <section class="my-2 col-md-6 col-12">
        El uso excesivo de productos plásticos ha brindado múltiples beneficios
        en la vida cotidiana, pero también ha llevado a consecuencias no
        deseadas. Uno de los más grandes problemas es la formación de
        microplásticos, los cuales representan una amenaza global debido a su
        persistencia y amplia distribución en la vida silvestre y los seres
        humanos.
        <ReferencesAuthors
          :img="{
            src: require('@/assets/image-from-rawpixel-id-5901973-jpeg.jpg'),
            alt: 'Botella flotando en el mar',
          }"
          :credits="{
            'Image ':
              'https://www.rawpixel.com/image/5901973/photo-image-cloud-public-domain-blue',
            'by ': '',
            rawpixel: 'https://www.rawpixel.com/',
          }"
        />
      </section>
      <section class="col-md-6 col-12">
        <CollapseInformation
          :informationCollapse="[
            {
              information:
                'Desde el año 2016, se ha registrado un alarmante aumento en el uso de plásticos en la sociedad.',
              title: 'Causa',
              isOpen: false,
            },
            {
              information:
                'Diversos factores físicos y químicos provocan que los plásticos se fragmentes, resultando así los microplásticos.',
              title: 'Consecuencia',
              isOpen: false,
            },
            {
              information:
                'Los microplásticos son partículas sólidas sintéticas con un rango de tamaño que comprende de 1 µm hasta 5 mm.',
              title: 'Definición',
              isOpen: false,
            },
            {
              information:
                'Se identifican como esferas, fragmentos irregulares, fibras, gránulos, microperlas y películas.',
              title: 'Formas',
              isOpen: false,
            },
          ]"
        />
      </section>
    </article>

    <article>
      <span
        >En cuanto a su origen, se pueden clasificar en primarios y
        secundarios.</span
      >
      <TableInformation
        :information="[
          {
            type: 'Primarios',
            description:
              'Son los fabricados intencionalmente para artículos como cosméticos, pinturas, exfoliantes, pasta de dientes, junto con productos de limpieza.',
            imgData: {
              src: require('@/assets/robert-laursoo-m-cTm7EWlGI-unsplash.jpg'),
              alt: 'Microplásticos primarios',
            },
            credits: {
              'Foto de ': '',
              'Robert Laursoo  ':
                'https://unsplash.com/es/@robineero?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
              'en ': '',
              Unsplash:
                'https://unsplash.com/es/fotos/m-cTm7EWlGI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
            },
          },
          {
            type: 'Secundarios',
            description:
              'Son derivados de procesos como la fragmentación, significando acciones mecánicas y fricciones con el ambiente. El otro proceso es la degradación, implicando la pérdida de peso molecular mediante cinco diferentes mecanismos: biodegradación, fotodegradación, degradación oxidativa, degradación térmica e hidrólisis.',
            imgData: {
              src: require('@/assets/brian-yurasits-2W603t4Q76M-unsplash.jpg'),
              alt: 'Gaviota con microplásticos en su pico',
            },
            credits: {
              'Foto de ': '',
              'Brian Yurasits ':
                'https://unsplash.com/es/@brian_yuri?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
              'en ': '',
              Unsplash:
                'https://unsplash.com/es/fotos/2W603t4Q76M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
            },
          },
        ]"
        :headers="['Tipo', 'Características']"
        :img="true"
      />
    </article>

    <article>
      <h3 class="text-center fw-semibold section-title">
        Curiosidades de los microplásticos
      </h3>
      <InfoSection
        :img="{
          src: require('@/assets/fly-d-NXyXNl5LTqM-unsplash.jpg'),
          alt: 'Popotes de plástico',
        }"
        :sideImage="false"
        :arrayText="[
          `Estas partículas provienen de muchas partes, en especial de objetos de uso
        cotidiano y con el paso del tiempo se van degastando, ocasionando un
        desprendimiento de fibras que van directamente al agua. Esto significa una
        gran fuente de contaminación, pero como todo problema ambiental, siempre
        tiene sus datos curiosos, en cuanto a propiedades, su descubrimiento y donde
        más se han encontrado.`,
        ]"
        :credits="{
          'Foto de ': '',
          'FLY:D ':
            'https://unsplash.com/es/@flyd2069?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          'en ': '',
          Unsplash:
            'https://unsplash.com/es/fotos/NXyXNl5LTqM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        }"
      />
      <CollapseInformation
        :informationCollapse="[
          {
            information:
              'Al tener diversas densidades significando que su propagación sobre el ecosistema acuático es mucho mayor.',
            title: 'Densidad',
            isOpen: false,
          },
          {
            information:
              'En el 2008 fue la primera vez que se estableció un tamaño límite de los microplásticos, durante el evento de la Primera Jornada Internacional sobre la Aparición, Efectos y Destino de los desechos marinos de microplásticos.',
            title: 'Hallazgo',
            isOpen: false,
          },
          {
            information:
              'Los microplásticos pueden adsorber y transferir contaminantes orgánicos debido a su capacidad por repeler el agua.',
            title: 'Propiedades',
            isOpen: false,
          },
          {
            information:
              'Se han encontrado cantidades considerables de microplásticos, gracias a los procesos de envasado.',
            title: 'Agua embotellada',
            isOpen: false,
          },
        ]"
      />
    </article>

    <article>
      <h3 class="text-center fw-semibold section-title animate__bounce">
        Efectos de los microplásticos en organismos
      </h3>
      Los microplásticos son un problema en crecimiento a nivel global que tiene
      como característica principal el diminuto tamaño de los plásticos,
      provocando así una probabilidad demasiado alta de ingesta en organismo
      acuáticos, afectando su biología. Al igual que, afectar la calidad de
      recursos hídricos y alimentos de consumo humano, ya que su propagación se
      puede dar cualquier cuerpo de agua.
      <InformationPages
        :infoComponent="[
          {
            img: {
              src: require('@/assets/tim-mossholder-qq-8dpdlBsY-unsplash.jpg'),
              alt: 'Gaviota con microplásticos en su pico',
            },
            sideImage: true,
            credits: {
              'Foto de ': '',
              'Tim Mossholder ':
                'https://unsplash.com/es/@timmossholder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
              'en ': '',
              Unsplash:
                'https://unsplash.com/es/fotos/qq-8dpdlBsY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
            },
            arrayText: [
              `Los microplásticos representan una amenaza física y química para los ecosistemas y organismos, puesto que, se pueden llegar a confundir con alimento por diferentes especies como mariscos, peces, aves marinas, tortugas marinas y mamíferos.`,
            ],
          },
          {
            img: {
              src: require('@/assets/tim-mossholder-qq-8dpdlBsY-unsplash.jpg'),
              alt: 'Gaviota con microplásticos en su pico',
            },
            sideImage: true,
            credits: {
              'Foto de ': '',
              'Tim Mossholder ':
                'https://unsplash.com/es/@timmossholder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
              'en ': '',
              Unsplash:
                'https://unsplash.com/es/fotos/qq-8dpdlBsY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
            },
            arrayText: [
              `Una vez que los ingieren, el primer gran efecto en organismos acuáticos son las obstrucciones intestinales, ocurriendo en el tracto digestivo, en el cual, puede tener dos desenlaces, el primero es que sean expulsados, o bien, retenidas.`,
            ],
          },
          {
            img: {
              src: require('@/assets/tim-mossholder-qq-8dpdlBsY-unsplash.jpg'),
              alt: 'Gaviota con microplásticos en su pico',
            },
            sideImage: true,
            credits: {
              'Foto de ': '',
              'Tim Mossholder ':
                'https://unsplash.com/es/@timmossholder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
              'en ': '',
              Unsplash:
                'https://unsplash.com/es/fotos/qq-8dpdlBsY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
            },
            arrayText: [
              `El segundo grande efecto es la disminución de la ingesta de nutrientes, afectando las tasas de crecimiento, junto a la reproducción. Teniendo un riesgo de desequilibrio en la cadena alimenticia acuática.`,
            ],
          },
          {
            img: {
              src: require('@/assets/tim-mossholder-qq-8dpdlBsY-unsplash.jpg'),
              alt: 'Gaviota con microplásticos en su pico',
            },
            sideImage: true,
            credits: {
              'Foto de ': '',
              'Tim Mossholder ':
                'https://unsplash.com/es/@timmossholder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
              'en ': '',
              Unsplash:
                'https://unsplash.com/es/fotos/qq-8dpdlBsY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
            },
            arrayText: [
              `Aunado a lo anterior, también existen afectaciones graves en su proceso de reproducción, a causa de que los microplásticos pueden simular ser hormonas repercutiendo en la etapa de gestación e inicios de desarrollo.`,
            ],
          },
          {
            img: {
              src: require('@/assets/tim-mossholder-qq-8dpdlBsY-unsplash.jpg'),
              alt: 'Gaviota con microplásticos en su pico',
            },
            sideImage: true,
            credits: {
              'Foto de ': '',
              'Tim Mossholder ':
                'https://unsplash.com/es/@timmossholder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
              'en ': '',
              Unsplash:
                'https://unsplash.com/es/fotos/qq-8dpdlBsY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
            },
            arrayText: [
              `Finalmente, existe una especifica interacción entre los microplásticos y los seres humanos, siendo el consumo de mariscos y pescados. Sin embargo, el tracto digestivo no es común ingerirlo, por lo que la posibilidad de comer microplásticos es baja.`,
            ],
          },
        ]"
      />
    </article>

    <article>
      <SectionRecomendation />
    </article>

    <article class="mt-2">
      <section class="fw-bold">
        Toda la información presentada se utilizaron las siguientes referencias
      </section>

      <SectionReferences
        :references="[
          {
            authors: ['United Nations Environment Programme'],
            title:
              'Marine Plastic Debris and Microplastics: Global Lessons and Research to Inspire Action and Guide Policy Change',
            editorial: '',
            vol: '',
            no: '',
            pages: [],
            yearPublication: '2016',
            link: 'https://wedocs.unep.org/20.500.11822/7720 ',
            dateAccess: '26-09-2023',
          },
          {
            authors: ['United Nations Environment Programme'],
            title:
              'Biodegradable Plastics and Marine Litter: Misconceptions, Concerns and Impacts on Marine Environments',
            editorial: '',
            vol: '',
            no: '',
            pages: [],
            yearPublication: '2015',
            link: 'https://wedocs.unep.org/20.500.11822/7468  ',
            dateAccess: '26-09-2023',
          },
          {
            authors: ['G. Acosta', 'D. V. Carillo', 'J. A. Caballero'],
            title: 'Microplásticos en agua y organismos',
            editorial: 'ciencia',
            vol: '73',
            no: '2',
            pages: ['14', '21'],
            yearPublication: 'abril-junio 2022',
            link: 'https://www.revistaciencia.amc.edu.mx/images/revista/73_2/PDF/Ciencia_73-2.pdf',
            dateAccess: '26-09-2023',
          },
          {
            authors: [
              'G. Catañeta',
              'A. F. Gutiérrez',
              'F. Nacaratte',
              'C. A. Manzano',
            ],
            title:
              'Microplásticos: un contaminante que crece en todas las esferas ambientales, sus características y posibles riesgos para la salud pública por exposición',
            editorial: 'Rev. Bol. Quim.',
            vol: '37',
            no: '3',
            pages: ['14', '21'],
            yearPublication: 'diciembre 2020',
            link: 'https://doi.org/10.34098/2078-3949.37.3.4',
            dateAccess: '26-09-2023',
          },
          {
            authors: ['D. Aldana', 'M. Enríquez', 'V. Castillo'],
            title: 'El Caribe y su contaminación por microplásticos',
            editorial: 'ciencia',
            vol: '73',
            no: '2',
            pages: ['8', '13'],
            yearPublication: 'abril-junio 2022',
            link: 'https://www.revistaciencia.amc.edu.mx/images/revista/73_2/PDF/Ciencia_73-2.pdf',
            dateAccess: '26-09-2023',
          },
          {
            authors: ['W. Cai', 'L. A. Tremblay', 'L. An'],
            title:
              'Enhancing consumption responsibility to address global plastic pollution',
            editorial: 'Mar. Pollut. Bull.',
            vol: '183',
            no: '114089',
            pages: [],
            yearPublication: '2022',
            link: 'https://doi.org/10.1016/j.marpolbul.2022.114089',
            dateAccess: '26-09-2023',
          },
          {
            authors: ['Arthur C.', 'J. Baker', 'H. Bamford'],
            title:
              'Proceedings of the International Research Workshop on the Occurrence, Effects and Fate of Microplastic Marine Debris. USA: NOAA Technical Memorandum NOS-OR&R-30',
            editorial: '',
            vol: '',
            no: '',
            pages: [],
            yearPublication: '2008',
            link: 'https://marinedebris.noaa.gov/proceedings-international-research-workshop-microplastic-marine-debris',
            dateAccess: '26-09-2023',
          },
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
            authors: [
              'I. Gambino',
              'F. Bagordo',
              'T. Grassi',
              'A. Panico',
              'A. De Donno',
            ],
            title:
              'Occurrence of microplastics in tap and bottled water: Current knowledge',
            editorial: 'Int. J. Environ. Res. Public Health',
            vol: '19',
            no: '9',
            pages: [],
            yearPublication: '2022',
            link: 'https://doi.org/10.3390/ijerph19095283',
            dateAccess: '26-09-2023',
          },
        ]"
      />
    </article>
  </main>
</template>

<script>
import CarouselHome from "@/components/CarouselHome.vue";
import SectionRecomendation from "@/components/SectionRecomendation.vue";
import AwarenessHomeSection from "@/components/AwarenessHomeSection.vue";
import SectionReferences from "@/components/SectionReferences.vue";
import InformationPages from "@/components/InformationPages.vue";
import CollapseInformation from "@/components/CollapseInformation.vue";
import TableInformation from "@/components/TableInformation.vue";
import InfoSection from "@/components/InfoSection.vue";
import ReferencesAuthors from "@/components/ReferencesAuthors.vue";

export default {
  name: "HomeView",
  components: {
    CarouselHome,
    SectionRecomendation,
    AwarenessHomeSection,
    InformationPages,
    CollapseInformation,
    SectionReferences,
    TableInformation,
    InfoSection,
    ReferencesAuthors,
  },
};
</script>
