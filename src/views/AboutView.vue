<template>
  <InfoSection
    txt="Desde 2016, se ha registrado un alarmante aumento en el uso de plásticos, especialmente productos de un solo uso, que han provocado la acumulación masiva en el medio ambiente."
    img= "../assets/WaterPlasticPollution.jpg"
  ></InfoSection>
</template>
<script>
import InfoSection from "@/components/InfoSection.vue";
export default {
  name: "AboutView",
  components: {
    InfoSection,
  },
};
</script>
