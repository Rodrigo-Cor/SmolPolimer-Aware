<template>
  <InfoSection
    :txt="`Desde 2016, se ha registrado un alarmante aumento en el uso de plásticos, especialmente productos de un solo uso, que han provocado la acumulación masiva en el medio ambiente.`"
    :img="require('../assets/WaterPlasticPollution.jpg')"
  ></InfoSection>
  <!--
  <InfoSectionAlt
    :txt="Los productos etiquetados biodegradables u oxo-degradables no han disminuido la cantidad de plástico que llega al agua ni su impacto ambiental."
    :img="~@/assets/Biodegradable.jpg"
  ></InfoSectionAlt>
  <InfoSection
    txt="Los plásticos se degradan con el tiempo, sometiéndose a erosión tanto física como química, descomponiéndose en fragmentos más pequeños conocidos como microplásticos."
    img="~@/assets/Microplastics.jpg"
  ></InfoSection>
  <InfoSectionAlt
    txt="En 2008, la National Oceanic and Atmospheric Administration (NOAA) estableció que el tamaño límite de los materiales para ser considerados microplásticos sería de 5 milímetros."
    img=""
  ></InfoSectionAlt>
  <InfoSection
    txt="La European Chemicals Agency (ECHA), además del tamaño, abarca en su definición criterios como el tipo de material, estado físico (sólido o semisólido) y morfología (las formas que pueden presentar, como esferas, fibras o láminas)."
    img=""
  ></InfoSection>
  <InfoSectionAlt
    txt="¿Cómo afecta a los organismos que los consumen? Son ingeridos por una amplia variedad de organismos acuáticos, adhiriéndose a sus estructuras, afectando a su biología."
    img=""
  ></InfoSectionAlt>
  <InfoSection
    txt="Afectan la calidad de recursos hídricos, utilizados para el consumo humano. En 2020, el INECC informó que los microplásticos representan entre el 60 y el 80% de los residuos que se encuentran en el mar."
    img=""
  ></InfoSection>
--></template>
<script>
import InfoSection from "@/components/InfoSection.vue";
import InfoSectionAlt from "@/components/InfoSectionAlt.vue";
export default {
  name: "AboutView",
  components: {
    InfoSection,
    InfoSectionAlt,
  },
};
</script>
