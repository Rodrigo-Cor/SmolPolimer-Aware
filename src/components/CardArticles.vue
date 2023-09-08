<template>
  <div class="row">
    <div class="d-flex flex-column col-6">
      <div
        id="list-references"
        class="list-group"
        v-for="(card, index) in referencesData"
        :key="index"
      >
        <a
          class="list-group-item list-group-item-action text-size text-sm-end menu-body p-3"
          :href="'#list-item-' + index"
          >{{ card.title }}</a
        >
      </div>
    </div>

    <div class="col-6">
      <div
        data-bs-spy="scroll"
        data-bs-target="#list-references"
        data-bs-smooth-scroll="true"
        class="scrollspy-example"
        tabindex="0"
        v-for="(card, index) in referencesData"
        :key="index"
      >
        <div class="card-body p-2 text-center m-2 text-size">
          <p :id="'list-item-' + index">{{ card.title }}</p>
          <p>Autores: {{ card.author }}</p>
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
  methods: {
    ...mapActions({
      fetchReferences: "fetchReferences",
    }),
  },
};
</script>

<style scoped>
.card-body {
  background-image: linear-gradient(to bottom, #4f98ca, #50d890);
}

.menu-body {
  background-image: linear-gradient(to bottom, #EFFFFB, #4F98CA);
}

</style>
