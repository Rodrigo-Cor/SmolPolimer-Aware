<template>
  <div class="my-1">
    <template v-for="({ value }, key) in text" :key="key">
      <span
        >{{ value === "" ? key : "" }}
        <button
          type="button"
          v-if="value !== ''"
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
          {{ value }}
        </button>
      </span>
    </template>
    <TableInformation
      v-if="concept.value !== '' || concept.meaning !== ''"
      :information="[
        {
          type: concept.value,
          description: concept.meaning,
          link: [this.referencesMeaning[concept.value]],
        },
      ]"
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
      referencesMeaning: {
        plástico: {
          text: "[1].",
          id: "home0",
        },
        fragmentos: {
          text: "[2].",
          id: "home1",
        },
        "erosionándose con el ambiente": {
          text: "[3].",
          id: "home2",
        },
        "prenda sintética": {
          text: "[4].",
          id: "home3",
        },
        "fibras de poliéster": {
          text: "[5].",
          id: "home4",
        },
        "flora y fauna marina": {
          text: "[6].",
          id: "home5",
        },
        "tracto digestivo": {
          text: "[7].",
          id: "home6",
        },
        polímero: {
          text: "[8].",
          id: "home7",
        },
        "organismos acuáticos": {
          text: "[9].",
          id: "home8",
        },
        "cadena trófica": {
          text: "[10].",
          id: "home9",
        },
        "procesos de separación": {
          text: "[11].",
          id: "home10",
        },
        "procesos de degradación": {
          text: "[12].",
          id: "home11",
        },
        biodegradables: {
          text: "[13].",
          id: "home12",
        },
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
