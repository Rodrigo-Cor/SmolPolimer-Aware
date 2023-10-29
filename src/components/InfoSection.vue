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
          <p class="text-justify-custom">
            <template
              v-for="paragraph in arrayText"
              :key="paragraph"
              class="rounded p-2 mb-md-0 mb-2"
            >
              <template v-for="(value, key) in paragraph" :key="value">
                <span v-bind:class="{ 'fst-italic': key === 'italic' }">
                  {{ value }}
                </span>
              </template>
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
          <p class="text-justify-custom">
            <template
              v-for="paragraph in arrayText"
              :key="paragraph"
              class="rounded p-2 mb-md-0 mb-2"
            >
              <template v-for="(value, key) in paragraph" :key="value">
                <span v-bind:class="{ 'fst-italic': key === 'italic' }">
                  {{ value }}
                </span>
              </template>
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
};
</script>
