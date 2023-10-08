<template>
  <div class="my-2">
    <button
      @click="() => (showReferences = !showReferences)"
      class="btn btn-dark"
    >
      {{ showReferences ? "Ocultar " : "Ver " }}referencias consultadas
    </button>
    <InformationReference v-if="showReferences" :references="references" />
  </div>
</template>

<script>
import InformationReference from "./InformationReference.vue";

export default {
  name: "SectionReferences",
  components: {
    InformationReference,
  },
  data() {
    return {
      showReferences: false,
    };
  },
  props: {
    references: {
      type: Array,
      required: true,
    },
  },
};
</script>
