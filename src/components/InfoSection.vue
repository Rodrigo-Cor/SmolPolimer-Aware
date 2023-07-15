<template>
  <div class="container">
    <div class="row">
      <div class="col align-self-center">
        <template v-if="sideImage">
          <img :src="img" class="img-fluid" alt="Imagen" />
        </template>
        <template v-else>
          <p class="text-justify-custom custom-font">
            {{ txt }}
          </p>
        </template>
      </div>
      <div class="col align-self-center">
        <template v-if="sideImage">
          <p class="text-justify-custom custom-font">
            {{ txt }}
          </p>
        </template>
        <template v-else>
          <img :src="img" class="img-fluid" alt="Imagen" />
        </template>
      </div>
    </div>
  </div>
</template>

<style>
.text-justify-custom {
  text-align: justify;
  text-justify: inter-word;
}
.custom-column {
  border: 1px solid rgba(80, 216, 144, 0.1);
  border-radius: 8px;
  background-color: rgb(
    80,
    216,
    144,
    0.1
  ); /* #50D890, el verde de la paleta de colores */
}
.custom-font {
  font-family: Arial, sans-serif;
  font-size: 20px;
  color: #4f98ca;
}
</style>
<script>
export default {
  name: "InfoSection",
  props: {
    txt: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    sideImage: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
