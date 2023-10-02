<template>
  <figure>
    <div class="d-flex justify-content-center">
      <img
        :src="img.src"
        class="w-50 h-50"
        :alt="img.alt"
      />
    </div>
    <figcaption class="text-center fst-italic text-credits">
      <template v-for="(value, key) in credits">
        <a target="_blank" :href="value" v-if="value !== ''">{{ key }}</a>
        <template v-else>{{ key }}</template>
      </template>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "ReferencesAuthors",
  props: {
    img: {
      type: Object,
      required: true,
    },
    credits: {
      type: Object,
      required: true,
    },
  },
};
</script>
