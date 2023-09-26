<template>
  <NavbarHome />
  <router-view v-if="isHomeView">
    <CarouselHome />
    <AwarenessHomeSection />
    <CollapseInformation
      :typeCollapse="'caracteristicas'"
      :informationCollapse="[
        {
          information:
            'Partículas sólidas sintéticas, poliméricas con forma regular o irregular y tienen un rango de tamaño que comprende de 1 mm hasta 5 mm.',
          title: 'Título de la página 1',
        },
        {
          information:
            'Se clasifican por su forma, tales como esferas, fragmentos irregulares, fibras, gránulos, microperlas y pellets.',
          title: 'Título de la página 2',
        },
        {
          information:
            'Se clasifican por su forma, tales como esferas, fragmentos irregulares, fibras, gránulos, microperlas y pellets.',
          title: 'Título de la página 3',
        },
        {
          information:
            'Se clasifican por su forma, tales como esferas, fragmentos irregulares, fibras, gránulos, microperlas y pellets.',
          title: 'Título de la página 4',
        },
      ]"
    />

    <InformationPages
      :informationPages="[
        {
          paragraph: 'Contenido de la página 1',
          img: '../naja-bertolt-jensen-FxnqdmKBJps-unsplash.jpg',
        },
        { paragraph: 'Contenido de la página 2', img: '#' },
        { paragraph: 'Contenido de la página 3', img: '#' },
        { paragraph: 'Contenido de la página 4', img: '#' },
        { paragraph: 'Contenido de la página 5', img: '#' },
        { paragraph: 'Contenido de la página 5', img: '#' },
        { paragraph: 'Contenido de la página 6', img: '#' },
      ]"
    />
    <!--
    <InfoSection
      :img="require('@/assets/TheOceanCleanup3.jpg')"
      :sideImage="true"
      :credits="[{ 'Foto cortesía de The Ocean Cleanup': '' }]"
      :arrayText="[
        `En 2008, la National Oceanic and Atmospheric Administration (NOAA) estableció que el tamaño límite de los materiales para ser considerados microplásticos sería de 5 milímetros.`,
      ]"
    />
    <SectionReferences />
    <p>References de Bacillus</p>
    <InformationReference
      :references="[
        {
          authors: ['S. Hossain', 'et al.'],
          title:
            'Microplastics biodegradation by biofloc-producing bacteria: An inventive biofloc technology approach',
          editorial: 'Microbiol. Res.',
          vol: '266',
          no: '127239',
          pages: ['127239'],
          yearPublication: '2023',
          link: 'https://doi.org/10.1016/j.micres.2022.127239',
          dateAccess: '17-07-2023',
        },
      ]"
    />
    <p>References de Bacillus para la simulación</p>
    <InformationReference
      :references="[
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
      ]"
    />
    <p>References de filtración granular rápida</p>
    <InformationReference
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
          pages: ['112374'],
          yearPublication: '2021',
          link: 'https://doi.org/10.1016/j.marpolbul.2021.112374',
          dateAccess: '21-02-2023',
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
          dateAccess: '04-03-2023',
        },
      ]"
    />
    <p>References de filtración granular rápida para la simulación</p>
    <InformationReference
      :references="[
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
          pages: ['111211'],
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
    -->
  </router-view>
  <router-view v-else />
  <FooterHome />
</template>

<script>
import NavbarHome from "@/components/NavbarHome.vue";
import CarouselHome from "@/components/CarouselHome.vue";
import InfoSection from "@/components/InfoSection.vue";
import SectionReferences from "@/components/SectionReferences.vue";
import AwarenessHomeSection from "@/components/AwarenessHomeSection.vue";
import InformationReference from "@/components/InformationReference.vue";
import InformationPages from "@/components/InformationPages.vue";
import CollapseInformation from "@/components/CollapseInformation.vue";
import ScrollspyInformation from "@/components/ScrollspyInformation.vue";
import ForumText from "@/components/ForumText.vue";
import FooterHome from "@/components/FooterHome.vue";

export default {
  name: "HomeView",
  components: {
    NavbarHome,
    CarouselHome,
    InfoSection,
    SectionReferences,
    AwarenessHomeSection,
    InformationReference,
    InformationPages,
    CollapseInformation,
    ScrollspyInformation,
    ForumText,
    FooterHome,
  },
  computed: {
    isHomeView() {
      return this.$route.name === "HomeView";
    },
  },
};
</script>
