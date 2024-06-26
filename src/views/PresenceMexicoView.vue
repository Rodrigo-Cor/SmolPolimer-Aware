<template>
  <main class="container-fluid text-justify-custom">
    <article>
      <section class="my-2">
        <InfoSection
          :img="{
            src: require('@/assets/naja-bertolt-jensen-GncNA7EKS8U-unsplash.jpg'),
            alt: 'Botella con basura en la playa',
          }"
          :credits="{
            'Foto de ': '',
            'Naja Bertolt Jensen ':
              'https://unsplash.com/es/@naja_bertolt_jensen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
            'en ': '',
            Unsplash:
              'https://unsplash.com/es/fotos/GncNA7EKS8U?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
          }"
          :sideImage="false"
          :arrayText="[
            [
              {
                value:
                  'Existe una falta significativa tanto de divulgación como de cobertura científica en México, ya que solo se tienen registradas 19 investigaciones documentales, en su mayoría realizadas en estados costeros como en el centro del país',
                key: '',
                link: [
                  {
                    text: '[1].',
                    id: 'presence0',
                  },
                ],
              },
            ],
            [
              {
                value:
                  'La escasez de información y conocimiento sobre este tema crucial, limita la capacidad para abordar eficazmente los efectos negativos de los microplásticos, tanto en el medio ambiente como en la salud humana.',
                key: '',
              },
            ],
          ]"
        />
      </section>
    </article>

    <article>
      <section>
        En México, solo 2 institutos se enfocan en abordar el problema de la
        contaminación por microplásticos en el agua:
      </section>
      <section>
        <TableInformation
          :information="[
            {
              type: 'IMTA',
              description:
                'El Instituto Mexicano de Tecnología del Agua fue fundado en 1986, está ubicado en Jiutepec, Morelos. Se enfoca en el desarrollo de metodologías confiables para obtener resultados cuantitativos sobre los materiales plásticos presentes en el agua, desde el muestreo hasta el análisis',
              link: [
                {
                  text: '[2].',
                  id: 'presence1',
                },
              ],
            },
            {
              type: 'INECC',
              description:
                'El Instituto Nacional de Ecología y Cambio Climático fue creado en 2013, ubicándose en la Ciudad de México. Su objetivo es combinar la investigación técnica, al igual que la científica en relación con la ecología y cambio climático para apoyar la toma de decisiones en esos ámbitos',
              link: [
                {
                  text: '[3],',
                  id: 'presence2',
                },
                {
                  text: '[4].',
                  id: 'presence3',
                },
              ],
            },
          ]"
          :headers="['Instituto', 'Características']"
        />
      </section>
    </article>

    <article>
      <section class="mb-1">
        A continuación, se presentan los estudios destacados y divulgados por
        parte del IMTA e INECC.
      </section>
      <section>
        <InformationPages
          :infoComponent="[
            {
              img: {
                src: require('@/assets/naja-bertolt-jensen-S3dd_XtdMwY-unsplash.jpg'),
                alt: 'Tenedor en la playa',
              },
              sideImage: true,
              credits: {
                'Foto de ': '',
                'Naja Bertolt Jensen ':
                  'https://unsplash.com/es/@naja_bertolt_jensen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
                'en ': '',
                Unsplash:
                  'https://unsplash.com/es/fotos/S3dd_XtdMwY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
              },
              arrayText: [
                [
                  {
                    value: `En el 2019, el IMTA realizó un estudio sobre el análisis microscópico de partículas que podrían ser de plástico derivado, tomando como base a muestras de agua de dos plantas potabilizadoras ubicadas en Valle de Bravo, Estado de México y el Lago de Chapala, Jalisco, así como de sus fuentes de abastecimiento`,
                    link: [
                      {
                        text: '[2].',
                        id: 'presence1',
                      },
                    ],
                  },
                ],
              ],
            },
            {
              img: {
                src: require('@/assets/naja-bertolt-jensen-S3dd_XtdMwY-unsplash.jpg'),
                alt: 'Tenedor en la playa',
              },
              sideImage: true,
              credits: {
                'Foto de ': '',
                'Naja Bertolt Jensen ':
                  'https://unsplash.com/es/@naja_bertolt_jensen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
                'en ': '',
                Unsplash:
                  'https://unsplash.com/es/fotos/S3dd_XtdMwY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
              },
              arrayText: [
                [
                  {
                    value: `En 2020, el INECC informó durante su intervención en Diálogos Ambientales, un evento organizado por la Secretaría de Medio Ambiente y Recursos Naturales (SEMARNAT), que los microplásticos representan entre el 60% y el 80% de los residuos que se encuentran en los océanos que rodean a México`,
                    link: [
                      {
                        text: '[3],',
                        id: 'presence2',
                      },
                      {
                        text: '[4].',
                        id: 'presence3',
                      },
                    ],
                  },
                ],
              ],
            },
            {
              img: {
                src: require('@/assets/naja-bertolt-jensen-S3dd_XtdMwY-unsplash.jpg'),
                alt: 'Tenedor en la playa',
              },
              sideImage: true,
              credits: {
                'Foto de ': '',
                'Naja Bertolt Jensen ':
                  'https://unsplash.com/es/@naja_bertolt_jensen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
                'en ': '',
                Unsplash:
                  'https://unsplash.com/es/fotos/S3dd_XtdMwY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
              },
              arrayText: [
                [
                  {
                    value: `La presencia de microplásticos está relacionada con las actividades realizadas en cada región. Un ejemplo son las playas turísticas, en donde se encontraron fragmentos rígidos y fibras, producto de la degradación de cubiertos desechables y bolsas plásticas. Aunado a lo anterior, se hallaron microplásticos en las costas del océano Pacifico, golfo de California, golfo de México, en el mar Caribe, además de un río en Puebla en conjunto con otro en Tijuana`,
                    link: [
                      {
                        text: '[1].',
                        id: 'presence0',
                      },
                    ],
                  },
                ],
              ],
            },
          ]"
        />
      </section>
    </article>
    <article>
      <section class="mb-1">
        No sólo existen concentración de microplásticos en zonas costeras o ríos
        como se explicó, sino también en las fuentes públicas de agua potable de
        la Ciudad de México.
      </section>
      <section>
        <InfoSection
          :img="{
            src: require('@/assets/javier-santos-guzman-S2uQGZvAP_8-unsplash.jpg'),
            alt: 'Metro de la Ciudad de México',
          }"
          :sideImage="false"
          :arrayText="[
            [
              {
                value:
                  'En los meses de julio y agosto del 2019, investigadores del Centro Mexicano para la Producción Más Limpia y del Centro de Investigación y de Estudios Avanzados del Instituto Politécnico Nacional realizaron un estudio para evaluar la presencia de microplásticos en las fuentes públicas gratuitas de agua potable del Sistema de Transporte Colectivo de la Ciudad de México. Las estaciones seleccionadas para recolectar muestras de agua de un litro fueron San Lázaro, por su importancia como nodo de transporte público y Garibaldi, por su relevancia turística.',
                key: '',
              },
            ],
            [
              {
                value:
                  'Los resultados arrojaron un total de 770 partículas microplásticas, de las cuales se identificaron en su mayoría con forma de fragmentos irregulares y fibras. Con relación a los rangos de tamaño se encontraron menores a 500 μm, 0.5 a 1 mm, 1 a 2 mm y 3 a 5 mm, representando respectivamente un 50%, 25%, 22% y 3% de las partículas microplásticas captadas',
                key: '',
                link: [
                  {
                    text: '[5].',
                    id: 'presence4',
                  },
                ],
              },
            ],
          ]"
          :credits="{
            'Foto de ': '',
            'Javier Santos Guzmán ':
              'https://unsplash.com/es/@javisaurio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
            'en ': '',
            Unsplash:
              'https://unsplash.com/es/fotos/S2uQGZvAP_8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
          }"
        />
      </section>
    </article>

    <article class="text-justify-custom mt-2">
      <section class="fw-bold">
        Toda la información presentada fue obtenida de las siguientes referencias.
      </section>
      <SectionReferences
        :view="'presence'"
        :references="[
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
            authors: ['I. M. de T. del Agua'],
            title: 'Contaminación por microplásticos',
            editorial: 'gob.mx',
            vol: '',
            no: '',
            pages: [],
            yearPublication: 'abril 2020',
            link: 'https://www.gob.mx/imta/articulos/contaminacion-por-microplasticos',
            dateAccess: '02-10-2023',
          },
          {
            authors: ['I.N.E.C.C.'],
            title: '¿Qué hacemos?',
            editorial: 'gob.mx',
            vol: '',
            no: '',
            pages: [],
            yearPublication: 'abril 2020',
            link: 'https://www.gob.mx/inecc/que-hacemos',
            dateAccess: '02-10-2023',
          },
          {
            authors: ['A. Enciso'],
            title:
              'Entre 60% y 80% de residuos en el mar son microplásticos: Inecc',
            editorial: 'La Jornada',
            vol: '',
            no: '',
            pages: [],
            yearPublication: 'abril 2020',
            link: 'https://www.jornada.com.mx/2020/06/09/politica/013n1pol',
            dateAccess: '02-10-2023',
          },
          {
            authors: [
              'V. C. Shruti',
              'F. Pérez-Guevara',
              'G. Kutralam-Muniasamy',
            ],
            title:
              'Metro station free drinking water fountain- A potential ‘microplastics hotspot’ for human consumption',
            editorial: 'Environmental Pollution',
            vol: '261',
            no: '114227',
            pages: ['14', '21'],
            yearPublication: '2020',
            link: 'https://doi.org/10.1016/j.envpol.2020.114227',
            dateAccess: '02-10-2023',
          },
        ]"
      />
    </article>
  </main>
</template>

<script>
import CollapseInformation from "@/components/CollapseInformation.vue";
import TableInformation from "@/components/TableInformation.vue";
import InformationPages from "@/components/InformationPages.vue";
import InfoSection from "@/components/InfoSection.vue";
import SectionReferences from "@/components/SectionReferences.vue";
import ReferencesAuthors from "@/components/ReferencesAuthors.vue";

export default {
  name: "PresenceMexicoView",
  components: {
    CollapseInformation,
    TableInformation,
    InformationPages,
    InfoSection,
    SectionReferences,
    ReferencesAuthors,
  },
};
</script>
