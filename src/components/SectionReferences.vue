<template>
  <div class="my-2">
    <button
      @click="() => setShowReferences(!showReferences)"
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
    <InformationReference
      v-if="showReferences"
      :references="references"
      :view="view"
    />
  </div>
</template>

<script>
import InformationReference from "./InformationReference.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "SectionReferences",
  components: {
    InformationReference,
  },
  data() {
    return {
      isHovered: false,
    };
  },
  computed: {
    ...mapGetters({
      showReferences: "getShowReferences",
    }),
  },
  methods: {
    ...mapMutations({
      setShowReferences: "setShowReferences",
    }),
  },
  props: {
    references: {
      type: Array,
      required: true,
    },
    view: {
      type: String,
    },
  },
};
</script>
