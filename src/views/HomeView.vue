<template>
  <div class="home">
    <NavbarHome />
    <router-view v-if="isHomeView">
      <CarouselHome />
      <AwarenessHomeSection />

      <div class="container-fluid text-justify-custom">
        El uso excesivo de productos plásticos ha brindado múltiples beneficios
        en la vida cotidiana, pero también ha llevado a consecuencias no
        deseadas. Uno de los más grandes problemas es la formación de
        microplásticos, los cuales representan una amenaza global debido a su
        persistencia y amplia distribución en la vida silvestre y los seres
        humanos.
        <CollapseInformation
          :typeCollapse="'caracteristicas'"
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
      </div>
      <div class="container-fluid text-justify-custom">
        En cuanto a su origen, se pueden clasificar en primarios y secundarios.
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
                'Imagen de ': '',
                'Robert Laursoo  ':
                  'https://unsplash.com/es/@robineero?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
                'en ': '',
                Unsplash:
                  'https://unsplash.com/es/fotos/qq-8dpdlBsY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
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
                'Imagen de ': '',
                'Brian Yurasits ':
                  'https://unsplash.com/es/@brian_yuri?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
                'en ': '',
                Unsplash:
                  'https://unsplash.com/es/fotos/qq-8dpdlBsY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
              },
            },
          ]"
          :headers="['Tipo', 'Características']"
          :img="true"
        />
      </div>

      <div class="container-fluid text-justify-custom">
        <h3 class="text-center">Curiosidades de los microplásticos</h3>
        Estas partículas provienen de muchas partes, en especial de objetos de
        uso cotidiano y con el paso del tiempo se van degastando, ocasionando un
        desprendimiento de fibras que van directamente al agua. Esto significa
        una gran fuente de contaminación, pero como todo problema ambiental,
        siempre tiene sus datos curiosos, en cuanto a propiedades, su
        descubrimiento y donde más se han encontrado.
        <CollapseInformation
          :typeCollapse="'curiosidades'"
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
      </div>
      <div class="container-fluid text-justify-custom">
        <h3 class="text-center">Efectos de los microplásticos en organismos</h3>
        Los microplásticos son un problema en crecimiento a nivel global que
        tiene como característica principal el diminuto tamaño de los plásticos,
        provocando así una probabilidad demasiado alta de ingesta en organismo
        acuáticos, afectando su biología. Al igual que, afectar la calidad de
        recursos hídricos y alimentos de consumo humano, ya que su propagación
        se puede dar cualquier cuerpo de agua.
        <InformationPages
          :infoComponent="[
            {
              img: {
                src: require('@/assets/naja-bertolt-jensen-BJUoZu0mpt0-unsplash.jpg'),
                alt: 'Plástico en el mar',
              },
              sideImage: true,
              credits: {
                'Imagen de ': '',
                'Naja Bertolt Jensen ':
                  'https://unsplash.com/es/@naja_bertolt_jensen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
                'en ': '',
                Unsplash:
                  'https://unsplash.com/es/fotos/qq-8dpdlBsY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
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
                'Imagen de ': '',
                'Tim Mossholder ':
                  'https://unsplash.com/es/@timmossholder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
                'en ': '',
                Unsplash:
                  'https://unsplash.com/es/fotos/qq-8dpdlBsY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
              },
              arrayText: [
                `Una vez que los ingieren, el primer gran efecto en organismos acuáticos son las obstrucciones intestinales, ocurriendo en el tracto digestivo, en el cual, puede tener dos desenlaces, el primero es que sean expulsados, o bien, retenidas.`,
              ],
            },
            {
              img: {
                src: require('@/assets/sebastian-pena-lambarri-YV593oyMKmo-unsplash.jpg'),
                alt: 'Multitud de peces',
              },
              sideImage: true,
              credits: {
                'Imagen de ': '',
                'Sebastian Pena Lambarri ':
                  'https://unsplash.com/es/@sebaspenalambarri?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
                'en ': '',
                Unsplash:
                  'https://unsplash.com/es/fotos/qq-8dpdlBsY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
              },
              arrayText: [
                `El segundo grande efecto es la disminución de la ingesta de nutrientes, afectando las tasas de crecimiento, junto a la reproducción. Teniendo un riesgo de desequilibrio en la cadena alimenticia acuática.`,
              ],
            },
            {
              img: {
                src: require('@/assets/naja-bertolt-jensen-4cLzLiILddg-unsplash.jpg'),
                alt: 'Peces con microplásticos en su interior',
              },
              sideImage: true,
              credits: {
                'Imagen de ': '',
                'Naja Bertolt Jensen ':
                  'https://unsplash.com/es/@naja_bertolt_jensen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
                'en ': '',
                Unsplash:
                  'https://unsplash.com/es/fotos/qq-8dpdlBsY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
              },
              arrayText: [
                `Aunado a lo anterior, también existen afectaciones graves en su proceso de reproducción, a causa de que los microplásticos pueden simular ser hormonas repercutiendo en la etapa de gestación e inicios de desarrollo.`,
              ],
            },
            {
              img: {
                src: require('@/assets/naja-bertolt-jensen-V8EdKmpj974-unsplash.jpg'),
                alt: 'Ropa flotando en el mar',
              },
              sideImage: true,
              credits: {
                'Imagen de ': '',
                'Naja Bertolt Jensen ':
                  'https://unsplash.com/es/@naja_bertolt_jensen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
                'en ': '',
                Unsplash:
                  'https://unsplash.com/es/fotos/qq-8dpdlBsY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
              },
              arrayText: [
                `Finalmente, existe una especifica interacción entre los microplásticos y los seres humanos, siendo el consumo de mariscos y pescados. Sin embargo, el tracto digestivo no es común ingerirlo, por lo que la posibilidad de comer microplásticos es baja.`,
              ],
            },
          ]"
        />
      </div>

      <SectionRecomendation />

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
            title:
              'El Caribe y su contaminación por microplásticos',
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

      <!--
      <AccordionInformation
        :informationAccordion="[
          {
            title: '',
            paragraph:
              '',
          },
          {
            title: '',
            paragraph:
              '',
          },
          {
            title: '',
            paragraph:
              '',
          },
        ]"
        :typeAccordion="''"
        :titleAccordion="''"
      />
      -->

      <!--
    
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
    -->
    </router-view>
    <router-view v-else />

    <FooterHome />
  </div>
</template>

<script>
import NavbarHome from "@/components/NavbarHome.vue";
import CarouselHome from "@/components/CarouselHome.vue";
import SectionRecomendation from "@/components/SectionRecomendation.vue";
import AwarenessHomeSection from "@/components/AwarenessHomeSection.vue";
import SectionReferences from "@/components/SectionReferences.vue";
import AccordionInformation from "@/components/AccordionInformation.vue";
import InfoSection from "@/components/InfoSection.vue";
import InformationPages from "@/components/InformationPages.vue";
import CollapseInformation from "@/components/CollapseInformation.vue";
import ForumText from "@/components/ForumText.vue";
import FooterHome from "@/components/FooterHome.vue";
import TableInformation from "@/components/TableInformation.vue";
export default {
  name: "HomeView",
  components: {
    NavbarHome,
    CarouselHome,
    SectionRecomendation,
    AwarenessHomeSection,
    InfoSection,
    InformationPages,
    CollapseInformation,
    SectionReferences,
    AccordionInformation,
    ForumText,
    TableInformation,
    FooterHome,
  },
  computed: {
    isHomeView() {
      return this.$route.name === "HomeView";
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
