<template>
  <div class="container p-3">
    <div class="row">
      <div class="col align-self-center">
        <template v-if="sideImage">
          <figure>
            <div class="d-flex justify-content-center">
              <img :src="img" class="img-thumbnail pic" alt="Imagen" />
            </div>
            <figcaption class="text-center fst-italic">
              {{ credits }}
            </figcaption>
          </figure>
        </template>
        <template v-else>
          <div v-for="paragraph in arrayText" :key="paragraph">
            <p class="text-center text-size">
              {{ paragraph }}
            </p>
          </div>
        </template>
      </div>
      <div class="col align-self-center">
        <template v-if="sideImage">
          <div v-for="paragraph in arrayText" :key="paragraph">
            <p class="text-center text-size">
              {{ paragraph }}
            </p>
          </div>
        </template>
        <template v-else>
          <figure>
            <div class="d-flex justify-content-center">
              <img :src="img" class="img-thumbnail pic" alt="Imagen" />
            </div>
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

<style>
.pic {
  max-width: 75%;
  height: auto;
}

@media (max-width: 576px) {
  .text-size {
    font-size: 1rem;
  }
}

@media (min-width: 576px) {
  .text-size {
    font-size: 1.15rem;
  }
}

@media (min-width: 992px) {
  .text-size {
    font-size: 1.3rem;
  }
}
</style>
