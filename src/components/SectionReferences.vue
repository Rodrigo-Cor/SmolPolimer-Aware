<template>
  <div class="my-2">
    <button
      @click="() => (showReferences = !showReferences)"
      v-bind:class="{
        'btn btn-dark': isHovered,
        'btn btn-outline-dark': !isHovered,
      }"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <i v-if="!showReferences" class="bi bi-eye-fill"></i>
      <i v-else class="bi bi-eye-slash-fill"></i>
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
      isHovered: false,
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
