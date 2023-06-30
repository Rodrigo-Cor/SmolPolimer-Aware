<template>
  <div class="home">
    <SectionReferences />
  </div>
</template>

<script>
// @ is an alias to /src
//import CardArticles from '@/components/CardArticles.vue';
import SectionReferences from "@/components/SectionReferences.vue";

export default {
  name: "HomeView",
  components: {
    SectionReferences,
  },
};
</script>
