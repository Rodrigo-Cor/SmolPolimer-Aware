<template>
  <div
    class="accordion p-1"
    :id="'accordion' + typeAccordion"
    v-for="({ paragraph, link, author, title }, index) in informationAccordion"
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
        <div class="accordion-body color-home">
          <p class="fw-bolder text-title">
            {{ title }}
          </p>
          <section
            v-bind:class="{ 'text-card': typeAccordion === 'references' }"
          >
            <template v-if="typeAccordion === 'references'">
              <p class="text-body-secondary fs-6">Autores: {{ author }}</p>
              <a target="_blank" :href="link" class="btn btn-dark"
                >Ir al articulo</a
              >
            </template>
            <template v-else>
              <p class="text-body-secondary fs-6">
                {{ paragraph }}
                <span>
                  <template v-for="({ text, id }, index) in link" :key="index">
                    <button
                      @click="() => goReferences(id)"
                      type="button"
                      class="btn btn-link btn-sm p-0 m-0"
                    >
                      {{ text }}
                    </button>
                  </template>
                </span>
              </p>
            </template>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

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
  methods: {
    ...mapMutations({
      setShowReferences: "setShowReferences",
    }),
    goReferences(id) {
      this.setShowReferences(true);
      setTimeout(() => {
        const reference = document.getElementById(id);
        if (reference) {
          reference.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 200);
    },
  },
};
</script>

<style scoped>
.text-title {
  color: #160c7f;
}
</style>
