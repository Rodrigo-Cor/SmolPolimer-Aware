<template>
  <div class="container-fluid">
    Para combatir este problema es necesario fomentar el cuidado del medio
    ambiente, esto puede ser ayuda con tres enfoques prácticos. El primero es la
    educación ambiental, el segundo es la comunicación efectiva del problema, y
    el tercero la participación comunitaria en la solución de problemas
    ambientales.
    <div class="text-justify-custom">
      <h1 class="display-6 text-center">The Ocean Cleanup</h1>
      <InfoSection
        :img="{
          src: require('@/assets/ocg-saving-the-ocean-uXfYLTmF6fo-unsplash.jpg'),
          alt: 'Oceans Cleanup Group 1',
        }"
        :sideImage="true"
        :arrayText="[
          `Fundación sin fines de lucro, creada en 2013 y ubicada en los Países Bajos. Su objetivo principal es limpiar 90% del plástico en el mar para 2040, a través de investigaciones, así como, soluciones tecnológicas especializadas para océanos y ríos.`,
        ]"
        :credits="{
          'Imagen de ': '',
          'OCG Saving The Ocean ':
            'https://unsplash.com/es/@oceancleanupgroup?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          'en ': '',
          Unsplash:
            'https://unsplash.com/es/fotos/6wSevhW1Dzc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        }"
      />
    </div>
    <div class="text-justify-custom">
      <h1 class="display-6 text-center">Notable acción</h1>
      <InfoSection
        :img="{
          src: require('@/assets/ocg-saving-the-ocean-_1j7_atc0z8-unsplash.jpg'),
          alt: 'Oceans Cleanup Group 2',
        }"
        :sideImage="false"
        :arrayText="[
          `En 2021, “The Ocean Cleanup” desplegó un sistema de limpieza en “La Gran Mancha de Basura del Pacífico”, caracterizada por cubrir de plástico un área de 1.6 millones km2. El funcionamiento del sistema estaba compuesto por una barrera en forma de “U” y mallas, éstas arrastrarían el plástico hasta la costa para reciclarlo.`,
        ]"
        :credits="{
          'Imagen de ': '',
          'OCG Saving The Ocean ':
            'https://unsplash.com/es/@oceancleanupgroup?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          'en ': '',
          Unsplash:
            'https://unsplash.com/es/fotos/6wSevhW1Dzc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        }"
      />
    </div>
    <div class="text-justify-custom">
      <h1 class="display-6 text-center">Plastic Oceans International</h1>
      <InfoSection
        :img="{
          src: require('@/assets/volodymyr-hryshchenko-LHE9c_va1f8-unsplash.jpg'),
          alt: 'Stop Pollution 1',
        }"
        :sideImage="true"
        :arrayText="[
          `Organización sin fines de lucro, que tiene el objetivo de acabar con la contaminación por plástico, por medio de programas educativos, campañas sociales, investigaciones documentales y audiovisuales para invitar a más personas en involucrarse en la reducción de contaminación por plástico.`,
        ]"
        :credits="{
          'Imagen de ': '',
          'Volodymyr Hryshchenko ':
            'https://unsplash.com/es/@lunarts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          'en ': '',
          Unsplash:
            'https://unsplash.com/es/fotos/6wSevhW1Dzc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        }"
      />
    </div>
    <div class="text-justify-custom">
      <h1 class="display-6 text-center">Notable acción</h1>
      <InfoSection
        :img="{
          src: require('@/assets/brian-yurasits-7lzc2Yg-oVM-unsplash.jpg'),
          alt: 'Stop Pollution 2',
        }"
        :sideImage="false"
        :arrayText="[
          `Durante el 2019, se desarrolló el programa educativo “Rethink. Refill”, consistió en brindar botellas reutilizables y estaciones de rellenado, para todas aquellas escuelas con deficiencias en el servicio de agua potable. De esta forma, invitaba a los jóvenes a participar en la lucha contra el problema de la contaminación por plástico en el agua. Cabe destacar que, participaron dos escuelas de Quintana Roo, México.`,
        ]"
        :credits="{
          'Imagen de ': '',
          'Brian Yurasits ':
            'https://unsplash.com/es/@brian_yuri?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          'en ': '',
          Unsplash:
            'https://unsplash.com/es/fotos/6wSevhW1Dzc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        }"
      />
    </div>

    <div class="text-justify-custom">
      Una vez revisada la información, es fundamental e indispensable que forme
      parte del conocimiento sobre nuestro entorno, de tal forma que
      contribuyamos a la protección de la naturaleza y sus elementos, de
      diferentes maneras:
      <AccordionInformation
        :informationAccordion="[
          {
            title: 'Productos cotidianos',
            paragraph:
              'Procura comprar cosméticos, jabones y artículos de higiene personal de origen natural.',
          },
          {
            title: 'Empaquetados',
            paragraph:
              'Trata de comprar productos a granel, un ejemplo pueden ser productos de limpieza.',
          },
          {
            title: 'Reutiliza',
            paragraph:
              'Toma conciencia sobre nuestro impacto en el ambiente y cambia tu actitud como consumidor.',
          },
          {
            title: 'Educación ambiental',
            paragraph:
              'Participa en campañas ambientales y mantente constantemente informado sobre este problema ambiental progresivo.',
          },
        ]"
        :typeAccordion="'acciones'"
        :titleAccordion="'Acción'"
      />
    </div>
    <SectionReferences
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
          title: '10 consejos para reducir los microplásticos en tu día a día',
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
  </div>
</template>

<script>
import InfoSection from "@/components/InfoSection.vue";
import AccordionInformation from "@/components/AccordionInformation.vue";
import SectionReferences from "@/components/SectionReferences.vue";
export default {
  name: "FightPollutionView",
  components: {
    InfoSection,
    AccordionInformation,
    SectionReferences,
  },
};
</script>
