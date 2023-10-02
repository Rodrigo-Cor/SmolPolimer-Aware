<template>
  <div class="container p-3">
    <div class="row">
      <div class="col-md-6 col-12 align-self-center">
        <template v-if="sideImage">
          <ReferencesAuthors :img="img" :credits="credits" />
        </template>
        <template v-else>
          <div v-for="paragraph in arrayText" :key="paragraph">
            <p class="text-justify-custom">
              {{ paragraph }}
            </p>
          </div>
        </template>
      </div>
      <div class="col-md-6 col-12 align-self-center">
        <template v-if="sideImage">
          <div v-for="paragraph in arrayText" :key="paragraph">
            <p class="text-justify-custom">
              {{ paragraph }}
            </p>
          </div>
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
