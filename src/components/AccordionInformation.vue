<template>
  <div
    class="accordion text-size"
    :id="'accordion' + typeAccordion"
    v-for="(info, index) in informationAccordion"
    :key="index"
  >
    <div class="accordion-item m-2">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + titleAccordion + index"
          :aria-expanded="index === 0 ? 'true' : 'false'"
          :aria-controls="'collapse' + titleAccordion + index"
        >
          {{ titleAccordion }} {{ index + 1 }}
        </button>
      </h2>
      <div
        :id="'collapse' + titleAccordion + index"
        v-bind:class="{
          'accordion-collapse collapse show': index === 0,
          'accordion-collapse collapse': index !== 0,
        }"
        :data-bs-parent="'#accordion' + typeAccordion"
      >
        <div class="accordion-body card-body">
          <p>{{ info.title }}</p>
          <section v-bind:class="{'text-card': typeAccordion === 'references'}">
            <template v-if="typeAccordion === 'references'">
              <p class="text-body-secondary">Autores: {{ info.author }}</p>
              <a target="_blank" :href="info.link" class="btn btn-dark"
                >Ir al articulo</a
              >
            </template>
            <template v-else>
              <p>{{ info.paragraph }}</p>
            </template>
          </section>
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
    titleAccordion: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-body {
  background-image: linear-gradient(to bottom, #50d890, #4f98ca);
}
</style>
