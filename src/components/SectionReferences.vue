<template>
  <div>
    <div class="container">
      ¿Quieres conocer más? Aquí te dejamos algunas referencias
      <div class="row g-2">
        <div class="col-6">
          <div>
            <button
              v-bind:class="{
                btn: true,
                'btn-outline-info': !buttonStates['water care'],
                'btn btn-info': buttonStates['water care'],
              }"
              type="button"
              @click="navigate('water care')"
            >
              Cuidado del agua
            </button>
          </div>
        </div>
        <div class="col-6">
          <div>
            <button
              v-bind:class="{
                btn: true,
                'btn-outline-info': !buttonStates['microplastics water'],
                'btn btn-info': buttonStates['microplastics water'],
              }"
              type="button"
              @click="navigate('microplastics water')"
            >
              Microplásticos en el agua
            </button>
          </div>
        </div>
        <div class="col-12">
          <div>
            <button
              v-bind:class="{
                btn: true,
                'btn-outline-info': !buttonStates['microplastic effects'],
                'btn btn-info': buttonStates['microplastic effects'],
              }"
              type="button"
              @click="navigate('microplastic effects')"
            >
              Efectos de los microplásticos
            </button>
          </div>
        </div>
      </div>
      <CardArticles />
    </div>
  </div>
</template>

<script>
import CardArticles from "@/components/CardArticles.vue";
import { mapActions } from "vuex";

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
