<template>
  <CarouselHome />
  <main class="container-fluid text-justify-custom">
    <article id="section-question">
      <AwarenessHomeSection />
    </article>
    <article>
      <section class="my-2">
        <InfoSection
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
          :sideImage="true"
          :arrayText="[
            [
              {
                value:
                  'Desde el año 2016, se ha registrado un alarmante aumento en el uso de plásticos en la sociedad, lo cual ha generado uno de los más grandes problemas, que es la formación de microplásticos, representando una amenaza global debido a su persistencia y amplia distribución en la vida silvestre y en los seres humanos',
                key: '',
                link: [
                  {
                    text: '[1]',
                    id: 'home1',
                  },
                  {
                    text: '[2].',
                    id: 'home2',
                  },
                ],
              },
            ],
            [
              {
                value:
                  'En el 2008 fue la primera vez que se estableció un tamaño límite de los microplásticos, durante el evento de la Primera Jornada Internacional sobre la Aparición, Efectos y Destino de los desechos marinos de microplásticos: son partículas sólidas sintéticas con un rango de tamaño que comprende de 1 µm hasta 5 mm. Se pueden encontrar en forma de esferas, fragmentos irregulares, fibras, gránulos, microperlas películas.',
                key: '',
              },
            ],
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
              'Son fabricados intencionalmente para artículos como cosméticos, pinturas, exfoliantes, pasta de dientes, junto con productos de limpieza.',
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
              'Son derivados de procesos como la fragmentación, involucrando acciones mecánicas y fricciones con el ambiente. El otro proceso es la degradación, implicando la pérdida de peso molecular mediante cinco diferentes mecanismos: biodegradación, fotodegradación, degradación oxidativa, degradación térmica e hidrólisis.',
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
      <InfoSection
        :img="{
          src: require('@/assets/fly-d-NXyXNl5LTqM-unsplash.jpg'),
          alt: 'Popotes de plástico',
        }"
        :sideImage="false"
        :arrayText="[
          [
            {
              value:
                'Estas partículas provienen de muchas partes, en especial de objetos de uso cotidiano y con el paso del tiempo se van degastando, ocasionando un desprendimiento de fibras que van directamente al agua. Esto significa una gran fuente de contaminación, pero como todo problema ambiental, siempre tiene sus datos curiosos, en cuanto a propiedades, su descubrimiento y dondemás se han encontrado.',
              key: '',
            },
          ],
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
    </article>
    <article>
      <h3 class="text-center fw-semibold section-title">
        Efectos en organismos
      </h3>
      Pueden adsorber y transferir contaminantes orgánicos debido a su capacidad
      por repeler el agua. Sumado a eso, su diminuto tamaño aumenta
      considerablemente la probabilidad de ingesta en organismos acuáticos,
      perjudicando su biología. Por otra parte, afectan la calidad de recursos
      hídricos y alimentos de consumo humano, ya que su propagación se puede dar
      en cualquier cuerpo de agua.
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
              [
                {
                  value:
                    'Los microplásticos representan una amenaza física y química para los ecosistemas y organismos, puesto que, se pueden llegar a confundir con alimento por diferentes especies como ',
                },
                {
                  value:
                    'mariscos, peces, aves marinas, tortugas marinas y mamíferos.',
                  key: 'bold',
                },
              ],
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
              [
                {
                  value:
                    'Una vez que los ingieren, el primer gran efecto en organismos acuáticos son las ',
                },
                {
                  value: 'obstrucciones intestinales, ',
                  key: 'bold',
                },
                {
                  value:
                    'ocurriendo en el tracto digestivo, en el cual, puede tener dos desenlaces, el primero es que sean expulsados, o bien, retenidos.',
                },
              ],
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
              [
                {
                  value: 'El segundo gran efecto es la ',
                },
                {
                  value: 'disminución de la ingesta de nutrientes, ',
                  key: 'bold',
                },
                {
                  value:
                    'afectando las tasas de crecimiento, junto a la reproducción. Teniendo un riesgo de desequilibrio en la cadena alimenticia acuática.',
                },
              ],
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
              [
                {
                  value:
                    'Aunado a lo anterior, también existen afectaciones graves en su proceso de reproducción, a causa de que ',
                },
                {
                  value: 'los microplásticos pueden simular ser hormonas, ',
                  key: 'bold',
                },
                {
                  value:
                    'repercutiendo en la etapa de gestación e inicios de desarrollo.',
                },
              ],
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
              [
                {
                  value:
                    'Finalmente, existe una especifica interacción entre los microplásticos y los seres humanos, siendo esta el ',
                },
                {
                  value: 'consumo de mariscos y pescados. ',
                  key: 'bold',
                },
                {
                  value:
                    'Sin embargo, el tracto digestivo no es común ingerirlo, por lo que la posibilidad de comer microplásticos es baja.',
                },
              ],
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
        Toda la información presentada se utilizaron las siguientes referencias.
      </section>
      <SectionReferences
        :view="'home'"
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
