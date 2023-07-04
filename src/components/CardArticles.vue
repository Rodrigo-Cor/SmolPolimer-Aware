<template>
  <div class="container text-center">
    <div v-if="referencesData.length === 0">
      Selecciona alguna opción para ver recomendaciones
    </div>
    <div v-else class="row justify-content-around">
      <div
        class="card col-4 m-2 p-0"
        v-for="card in referencesData"
        :key="card.id"
      >
        <div class="card-body">
          <h5 class="card-title">{{ card.title }}</h5>
          <p class="card-text">Autores: {{ card.author }}</p>
          <a target="_blank" :href="card.link" class="btn btn-info"
            >Ir al articulo</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CardArticles",
  computed: {
    ...mapGetters({
      referencesData: "getReferences",
    }),
  },
  data() {
    return {
      cardsData: [],
    };
  },
  methods: {
    ...mapActions({
      fetchReferences: "fetchReferences",
    }),
  },
};
</script>

<style scoped>
.card-body {
  /*background-color: #4F98CA;*/
  background-image: linear-gradient(to bottom, #4f98ca, #50d890);
}

.card {
  width: 18rem;
}
</style>
