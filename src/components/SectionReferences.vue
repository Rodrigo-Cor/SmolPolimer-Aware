<template>
  <div>
    <div
      class="container-fluid text-size border border-info pt-2 bg-success bg-opacity-50 bg-gradient"
    >
      ¿Quieres conocer más? Selecciona el tema de tu interés
      <div class="row">
        <div class="col">
          <button
            v-bind:class="{
              btn: true,
              'btn-outline-primary': !buttonStates['water care'],
              'btn-secondary':
                buttonStates['water care'] && referencesData.length > 0,
            }"
            type="button"
            @click="navigate('water care')"
            :disabled="buttonStates['water care'] && referencesData.length > 0"
          >
            Cuidado del agua
          </button>
        </div>
        <div class="col">
          <button
            v-bind:class="{
              btn: true,
              'btn-outline-primary': !buttonStates['microplastics water'],
              'btn-secondary':
                buttonStates['microplastics water'] &&
                referencesData.length > 0,
            }"
            type="button"
            @click="navigate('microplastics water')"
            :disabled="
              buttonStates['microplastics water'] && referencesData.length > 0
            "
          >
            Microplásticos en el agua
          </button>
        </div>
        <div class="col">
          <button
            v-bind:class="{
              btn: true,
              'btn-outline-primary': !buttonStates['microplastic effects'],
              'btn-secondary':
                buttonStates['microplastic effects'] &&
                referencesData.length > 0,
            }"
            type="button"
            @click="navigate('microplastic effects')"
            :disabled="
              buttonStates['microplastic effects'] && referencesData.length > 0
            "
          >
            Efectos de los microplásticos
          </button>
        </div>
      </div>
      <div v-if="!stateRequest">
        <CardArticles />
      </div>
      <div v-else>
        <div class="progress" role="progressbar" style="height: 30px">
          <div class="progress-bar" style="width: 75%">Cargando...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardArticles from "@/components/CardArticles.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SectionReferences",
  components: {
    CardArticles,
  },
  data() {
    return {
      buttonValue: "",
      buttonStates: {
        "water care": false,
        "microplastics water": false,
        "microplastic effects": false,
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

<style scoped>
.btn {
  margin: 1em;
}

#sectionReferences {
  background-color: #343a40;
}
</style>
