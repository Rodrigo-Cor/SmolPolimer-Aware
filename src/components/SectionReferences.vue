<template>
  <div>
    <div
      class="container-fluid text-size border border-info pt-2 bg-success bg-opacity-50 bg-gradient"
    >
      ¿Quieres conocer más? Selecciona el tema de tu interés
      <div class="row">
        <div
          class="col-6 col-md-4 mt-2"
          v-for="(value, key) in buttonValues"
          :key="key"
        >
          <button
            v-bind:class="{
              'm-1 text-break btn': true,
              'btn-outline-primary': !buttonStates[key],
              'btn-secondary': buttonStates[key] && referencesData.length !== 0,
            }"
            type="button"
            @click="navigate(key)"
            :disabled="buttonStates[key] && referencesData.length !== 0"
          >
            {{ value }}
          </button>
        </div>
      </div>
      <template v-if="!stateRequest">
        <AccordionInformation
          :informationAccordion="referencesData"
          :typeAccordion="'references'"
          :titleAccordion="'Recomendación'"
        />
      </template>
      <template v-else>
        <button class="btn btn-primary" type="button" disabled>
          <span
            class="spinner-border spinner-border-sm"
            aria-hidden="true"
          ></span>
          <span role="status">Cargando...</span>
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import AccordionInformation from "./AccordionInformation.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SectionReferences",
  components: {
    AccordionInformation,
  },
  data() {
    return {
      buttonValue: "",
      buttonStates: {
        "water care": false,
        "microplastics water": false,
        "microplastic effects": false,
      },
      buttonValues: {
        "water care": "Cuidado del agua",
        "microplastics water": "Microplásticos en el agua",
        "microplastic effects": "Efectos de los microplásticos",
      },
    };
  },
  computed: {
    ...mapGetters({
      referencesData: "getReferences",
      stateRequest: "getStateRequest",
    }),
  },
  methods: {
    ...mapActions({
      fetchReferences: "fetchReferences",
    }),
    navigate(buttonValue) {
      this.buttonValue = buttonValue;
      for (let key in this.buttonStates) {
        if (key === buttonValue) this.buttonStates[key] = true;
        else this.buttonStates[key] = false;
      }
      const data = {
        searchTerm: buttonValue,
        articlesNum: 3,
      };
      this.fetchReferences(data);
    },
  },
};
</script>

