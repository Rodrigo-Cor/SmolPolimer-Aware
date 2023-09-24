<template>
  <figure>
    <div class="d-flex justify-content-center">
      <img :src="img" class="img-thumbnail img-info" alt="Imagen" />
    </div>
    <figcaption class="text-center fst-italic">
      <template v-for="(credit, index) in credits" :key="index">
        <template v-for="(value, key) in credit">
          <a target="_blank" :href="value" v-if="value !== ''">{{ key }}</a>
          <template v-else>{{ key }}</template>
        </template>
      </template>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "ReferencesAuthors",
  props: {
    img: {
      type: String,
      required: true,
    },
    credits: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>