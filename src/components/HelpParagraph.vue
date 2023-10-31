<template>
  <div class="my-1">
    <template v-for="({ value }, key) in text" :key="key">
      <span>{{ value === "" ? key : "" }}
        <button type="button" v-if="value !== ''" @click="() =>
        (concept = {
          value: text[key].value,
          meaning: text[key].meaning,
        })
          " class="btn btn-link p-0 m-0 fst-italic">
          {{ value }}
        </button>
      </span>
    </template>
    <TableInformation v-if="concept.value !== '' || concept.meaning !== ''" :information="[{
      type: concept.value, description: concept.meaning, links: findReferences(concept.value)
    }]" :headers="['Concepto', 'Definición',]" />
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
        'plástico': {
          text: '[1]',
          id: 'home0'
        },
        fragmentos: {
          text: '[2]',
          id: 'home4'
        },
        'erosionándose con el ambiente': {
          text: '[3]',
          id: 'home7'
        },
        'prenda sintética': {
          text: '[4]',
          id: 'home3'
        },
        'fibras de poliéster': {
          text: '[5]',
          id: 'home4'
        },
        'flora y fauna marina': {
          text: '[6]',
          id: 'home5'
        },
        'tracto digestivo': {
          text: '[7]',
          id: 'home6'
        },
        'tracto digestivo': {
          text: '[8]',
          id: 'home7'
        },
        'tracto digestivo': {
          text: '[9]',
          id: 'home8'
        },
      },
      objectReferences: {},
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
  methods: {
    findReferences(value) {
      console.log("El valor a buscar es: " + value)
      const reference = Object.keys(this.referencesMeaning).map(meaning => {
        if (meaning === value) {
          return this.referencesMeaning[meaning]
        }
        else {
          return "";
        }
      });
      return reference.filter((r) => r !== "");
    }

  },
};
</script>

<style scoped>
.text-justify-custom {
  text-align: justify;
}
</style>
