<template>
  <div class="container">
    <div class="row mb-3">
      <div class="col align-self-center">
        <img :src="img" class="img-fluid" alt="Imagen" />
      </div>
      <div class="col align-self-center custom-primary custom-column">
        <p class="text-justify-custom custom-font">
          {{ txt }}
        </p>
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
  },
};
</script>
