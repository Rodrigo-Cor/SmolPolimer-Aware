<template>
  <div class="mt-4 text-justify-custom">
    <template v-for="(value, key, index) in text" :key="index">
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
    <table class="table" v-if="concept.value !== '' || concept.meaning !== ''">
      <thead>
        <tr>
          <th scope="col">Concepto</th>
          <th scope="col">Definición</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">{{ concept.value }}</td>
          <td>{{ concept.meaning }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import MeaningTable from "./MeaningTable.vue";
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
    MeaningTable,
  },
};
</script>

<style scoped>
.text-justify-custom {
  text-align: justify;
}
</style>
