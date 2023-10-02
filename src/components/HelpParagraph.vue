<template>
  <div class="mt-4 text-justify-custom">
    <template v-for="(value, key) in text" :key="key">
      <span
        >{{ value.value === "" ? key : "" }}
        <button
          type="button"
          v-if="value.value !== ''"
          @click="
            () =>
              (concept = {
                value: text[key].value,
                meaning: text[key].meaning,
              })
          "
          @blur="concept = { value: '', meaning: '' }"
          class="btn btn-link p-0 m-0 fst-italic"
        >
          {{ value.value }}
        </button>
      </span>
    </template>
    <TableInformation
      v-if="concept.value !== '' || concept.meaning !== ''"
      :information="[{ type: concept.value, description: concept.meaning }]"
      :headers="['Concepto', 'Definición']"
    />
  </div>
</template>

<script>
import TableInformation from "./TableInformation.vue";
export default {
  name: "HelpParagraph",
  data() {
    return {
      concept: {
        value: "",
        meaning: "",
      },
    };
  },
  computed: {
    filteredText() {
      const filtered = {};
      for (const key in this.text) {
        if (this.text[key].value !== "") {
          filtered[key] = this.text[key];
        }
      }
      return filtered;
    },
  },
  props: {
    text: {
      type: Object,
      required: true,
    },
  },
  components: {
    TableInformation,
  },
};
</script>

<style scoped>
.text-justify-custom {
  text-align: justify;
}
</style>
