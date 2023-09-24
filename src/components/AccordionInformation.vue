<template>
  <div
    class="accordion text-size"
    :id="'accordion' + typeAccordion"
    v-for="(info, index) in informationAccordion"
    :key="index"
  >
    <div class="accordion-item m-4">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + index"
          :aria-expanded="index === 0 ? 'true' : 'false'"
          :aria-controls="'collapse' + index"
        >
          {{ titleAccordion }} {{ index + 1 }}
        </button>
      </h2>
      <div
        :id="'collapse' + index"
        v-bind:class="{
          'accordion-collapse collapse show': index === 0,
          'accordion-collapse collapse': index !== 0,
        }"
        :data-bs-parent="'#accordion' + typeAccordion"
      >
        <div class="accordion-body menu-body">
          <p>{{ info.title }}</p>
          <template v-if="typeAccordion === 'references'">
            <p class="text-body-secondary">Autores: {{ info.author }}</p>
            <a target="_blank" :href="info.link" class="btn btn-dark"
              >Ir al articulo</a
            >
          </template>
          <template v-else>
            <p>{{ info.paragraph }}</p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionInformation",
  props: {
    informationAccordion: {
      type: Array,
      required: true,
    },
    typeAccordion: {
      type: String,
      required: true,
    },
    titleAccordion:{
      type: String,
      required: true,
    }
  },
};
</script>

<style scoped>
.card-body {
  background-image: linear-gradient(to bottom, #4f98ca, #50d890);
}

.menu-body {
  background-image: linear-gradient(to bottom, #effffb, #4f98ca);
}
</style>
