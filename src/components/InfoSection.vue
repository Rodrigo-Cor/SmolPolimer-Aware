<template>
  <div class="container p-3">
    <div class="row">
      <div class="col align-self-center">
        <template v-if="sideImage">
          <figure>
            <img :src="img" class="img-fluid" alt="Imagen" />
            <figcaption class="text-center fst-italic">
              {{ credits }}
            </figcaption>
          </figure>
        </template>
        <template v-else>
          <div v-for="paragraph in arrayText" :key="paragraph">
            <p class="text-center">
              {{ paragraph }}
            </p>
          </div>
        </template>
      </div>
      <div class="col align-self-center">
        <template v-if="sideImage">
          <div v-for="paragraph in arrayText" :key="paragraph">
            <p class="text-center">
              {{ paragraph }}
            </p>
          </div>
        </template>
        <template v-else>
          <figure>
            <img :src="img" class="img-fluid" alt="Imagen" />
            <figcaption class="text-center fst-italic">
              {{ credits }}
            </figcaption>
          </figure>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoSection",
  props: {
    img: {
      type: String,
      required: true,
    },
    sideImage: {
      type: Boolean,
      required: true,
    },
    credits: {
      type: String,
      required: true,
    },
    arrayText: {
      type: Array,
    },
  },
};
</script>


