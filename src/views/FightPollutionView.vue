<template>
  <main class="container-fluid text-justify-custom color-home">
    Para combatir este problema es necesario fomentar el cuidado del medio
    ambiente, con ayuda de tres enfoques prácticos. El primero es la educación
    ambiental, el segundo es la comunicación efectiva del problema, y el tercero
    la participación comunitaria en la solución de problemas ambientales.
    <article>
      <section>
        <h3 class="fw-semibold text-center section-title">The Ocean Cleanup</h3>
        <InfoSection
          :img="{
            src: require('@/assets/ocg-saving-the-ocean-uXfYLTmF6fo-unsplash.jpg'),
            alt: 'Oceans Cleanup Group 1',
          }"
          :sideImage="true"
          :arrayText="[
            [
              {
                value:
                  'Fundación sin fines de lucro creada en 2013 y ubicada en los Países Bajos. Su objetivo principal es limpiar 90% del plástico en el mar para 2040, utilizando soluciones tecnológicas especializadas para océanos y ríos, a la par que investigaciones',
                link: [
                  {
                    text: '[1].',
                    id: 'fight0',
                  },
                ],
              },
            ],
          ]"
          :credits="{
            'Foto de ': '',
            'OCG Saving The Ocean ':
              'https://unsplash.com/es/@oceancleanupgroup?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
            'en ': '',
            Unsplash:
              'https://unsplash.com/es/fotos/uXfYLTmF6fo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
          }"
        />

        <h4 class="fw-semibold text-center section-title">Notable acción</h4>
        <InfoSection
          :img="{
            src: require('@/assets/ocg-saving-the-ocean-_1j7_atc0z8-unsplash.jpg'),
            alt: 'Oceans Cleanup Group 2',
          }"
          :sideImage="false"
          :arrayText="[
            [
              {
                value:
                  'En 2021, “The Ocean Cleanup” desplegó un sistema de limpieza en “La Gran Mancha de Basura del Pacífico”, caracterizada por cubrir de plástico un área de 1.6 millones de kilómetros cuadrados. El funcionamiento del sistema estaba compuesto por una barrera en forma de “U” y mallas, que arrastrarían el plástico hasta la costa para reciclarlo',
                link: [
                  {
                    text: '[1].',
                    id: 'fight0',
                  },
                ],
              },
            ],
          ]"
          :credits="{
            'Foto de ': '',
            'OCG Saving The Ocean ':
              'https://unsplash.com/es/@oceancleanupgroup?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
            'en ': '',
            Unsplash:
              'https://unsplash.com/es/fotos/_1j7_atc0z8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
          }"
        />
      </section>

      <section class="mt-2">
        <h3 class="fw-semibold text-center section-title">
          Plastic Oceans International
        </h3>
        <InfoSection
          :img="{
            src: require('@/assets/volodymyr-hryshchenko-LHE9c_va1f8-unsplash.jpg'),
            alt: 'Plastic Oceans International 1',
          }"
          :sideImage="true"
          :arrayText="[
            [
              {
                value:
                  'Organización sin fines de lucro, que tiene el objetivo de acabar con la contaminación por plástico, por medio de programas educativos, campañas sociales, investigaciones documentales y audiovisuales para invitar a más personas en involucrarse en la reducción de contaminación por plástico',
                link: [
                  {
                    text: '[2].',
                    id: 'fight1',
                  },
                ],
              },
            ],
          ]"
          :credits="{
            'Foto de ': '',
            'Volodymyr Hryshchenko ':
              'https://unsplash.com/es/@lunarts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
            'en ': '',
            Unsplash:
              'https://unsplash.com/es/fotos/LHE9c_va1f8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
          }"
        />

        <h4 class="fw-semibold text-center section-title">Notable acción</h4>
        <InfoSection
          :img="{
            src: require('@/assets/brian-yurasits-7lzc2Yg-oVM-unsplash.jpg'),
            alt: 'Plastic Oceans International 2',
          }"
          :sideImage="false"
          :arrayText="[
            [
              {
                value:
                  'Durante el 2019, se desarrolló el programa educativo “Rethink. Refill”, que consistió en brindar botellas reutilizables y estaciones de rellenado, para todas aquellas escuelas con deficiencias en el servicio de agua potable. De esta forma, invitaba a los jóvenes a participar en la lucha contra el problema de la contaminación por plástico en el agua. Cabe destacar que participaron dos escuelas de Quintana Roo, México',
                link: [
                  {
                    text: '[2].',
                    id: 'fight1',
                  },
                ],
              },
            ],
          ]"
          :credits="{
            'Foto de ': '',
            'Brian Yurasits ':
              'https://unsplash.com/es/@brian_yuri?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
            'en ': '',
            Unsplash:
              'https://unsplash.com/es/fotos/7lzc2Yg-oVM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
          }"
        />
      </section>
    </article>
    <article class="mt-4 row">
      <section class="col-md-6 col-12">
        <section class="mb-2">
          Una vez revisada la información, es fundamental e indispensable que
          forme parte del nuestro conocimiento sobre el entorno, contribuyendo a
          la protección de la naturaleza y sus elementos, de diferentes maneras.
        </section>
        <section>
          <ReferencesAuthors
            :img="{
              src: require('@/assets/guillaume-de-germain-6Xw9wMJyHus-unsplash.jpg'),
              alt: 'Planeta Tierra en el pasto',
            }"
            :credits="{
              'Foto de ': '',
              'Guillaume de Germain ':
                'https://unsplash.com/es/@guillaumedegermain?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
              'en ': '',
              Unsplash:
                'https://unsplash.com/es/fotos/6Xw9wMJyHus?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
            }"
          />
        </section>
      </section>
      <section class="col-md-6 col-12">
        <AccordionInformation
          :informationAccordion="[
            {
              title: 'Productos cotidianos',
              paragraph:
                'Procura comprar cosméticos, jabones y artículos de higiene personal de origen natural',
              link: [
                {
                  text: '[3],',
                  id: 'fight2',
                },
                {
                  text: '[4].',
                  id: 'fight3',
                },
              ],
            },
            {
              title: 'Empaquetados',
              paragraph:
                'Trata de comprar productos a granel, un ejemplo pueden ser productos de limpieza',
              link: [
                {
                  text: '[3],',
                  id: 'fight2',
                },
                {
                  text: '[4].',
                  id: 'fight3',
                },
              ],
            },
            {
              title: 'Reutiliza',
              paragraph:
                'Toma conciencia sobre nuestro impacto en el ambiente y cambia tu actitud como consumidor',
              link: [
                {
                  text: '[3],',
                  id: 'fight2',
                },
                {
                  text: '[4].',
                  id: 'fight3',
                },
              ],
            },
            {
              title: 'Educación ambiental',
              paragraph:
                'Participa en campañas ambientales y mantente constantemente informado sobre este problema ambiental progresivo',
              link: [
                {
                  text: '[3],',
                  id: 'fight2',
                },
                {
                  text: '[4].',
                  id: 'fight3',
                },
              ],
            },
          ]"
          :typeAccordion="'acciones'"
          :titleAccordion="'Acción'"
        />
      </section>
    </article>

    <article class="mt-2">
      <section class="fw-bold">
        Toda la información presentada se utilizaron las siguientes referencias.
      </section>
      <SectionReferences
        :view="'fight'"
        :references="[
          {
            authors: ['Oceans • The Ocean Cleanup'],
            title: 'The Ocean Cleanup',
            editorial: '',
            vol: '',
            no: '',
            pages: [],
            yearPublication: '',
            link: 'https://theoceancleanup.com',
            dateAccess: '02-10-2023',
          },
          {
            authors: ['PlasticOceans.org '],
            title: 'Ending Plastic Pollution & Fostering Sustainability',
            editorial: '',
            vol: '',
            no: '',
            pages: [],
            yearPublication: '',
            link: 'https://plasticoceans.org/',
            dateAccess: '02-10-2023',
          },
          {
            authors: ['ekoala_admin'],
            title:
              '10 consejos para reducir los microplásticos en tu día a día',
            editorial: '',
            vol: '',
            no: '',
            pages: [],
            yearPublication: '',
            link: 'https://e-koala.com/tips/consejos-reducir-microplastico/',
            dateAccess: '02-10-2023',
          },
          {
            authors: ['RTVE.es'],
            title:
              '¿Qué son los microplásticos y qué medidas se pueden adoptar para reducirlos?',
            editorial: '',
            vol: '',
            no: '',
            pages: [],
            yearPublication: '',
            link: 'https://www.rtve.es/noticias/20190816/son-microplasticos-medidas-se-pueden-adoptar-para-reducirlos/1977222.shtml',
            dateAccess: '02-10-2023',
          },
        ]"
      />
    </article>
  </main>
</template>

<script>
import InfoSection from "@/components/InfoSection.vue";
import AccordionInformation from "@/components/AccordionInformation.vue";
import SectionReferences from "@/components/SectionReferences.vue";
import ReferencesAuthors from "@/components/ReferencesAuthors.vue";

export default {
  name: "FightPollutionView",
  components: {
    InfoSection,
    AccordionInformation,
    SectionReferences,
    ReferencesAuthors,
  },
};
</script>
