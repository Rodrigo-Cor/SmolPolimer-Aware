<template>
  <div class="container-fluid py-md-0 py-2">
    <div class="row">
      <div
        class="align-self-center"
        v-bind:class="{
          'col-md-4 offset-md-1 col-12': sideImage,
          'col-md-6 offset-md-1 col-12': !sideImage,
        }"
      >
        <template v-if="sideImage">
          <ReferencesAuthors :img="img" :credits="credits" />
        </template>
        <template v-else>
          <p
            v-for="(paragraph, index) in arrayText"
            :key="index"
            class="text-justify-custom p-2 mb-md-0 mb-2"
          >
            <template
              v-for="({ value, key, link }, index) in paragraph"
              :key="index"
            >
              <span
                :class="
                  key === 'italic'
                    ? 'fst-italic'
                    : key === 'bold'
                    ? 'fw-bold'
                    : null
                "
                v-if="value !== ''"
              >
                {{ value }}
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
            </template>
          </p>
        </template>
      </div>
      <div
        class="align-self-center"
        v-bind:class="{
          'col-md-6 col-12': sideImage,
          'col-md-4 col-12': !sideImage,
        }"
      >
        <template v-if="sideImage">
          <p
            v-for="(paragraph, index) in arrayText"
            :key="index"
            class="text-justify-custom p-2 mb-md-0 mb-2"
          >
            <template
              v-for="({ value, key, link }, index) in paragraph"
              :key="index"
            >
              <span
                :class="
                  key === 'italic'
                    ? 'fst-italic'
                    : key === 'bold'
                    ? 'fw-bold'
                    : null
                "
                v-if="value !== ''"
              >
                {{ value }}
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
            </template>
          </p>
        </template>
        <template v-else>
          <ReferencesAuthors :img="img" :credits="credits" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ReferencesAuthors from "./ReferencesAuthors.vue";
import { mapMutations } from "vuex";
export default {
  name: "InfoSection",
  components: {
    ReferencesAuthors,
  },
  props: {
    img: {
      type: Object,
      required: true,
    },
    sideImage: {
      type: Boolean,
      required: true,
    },
    credits: {
      type: Object,
      required: true,
    },
    arrayText: {
      type: Array,
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
