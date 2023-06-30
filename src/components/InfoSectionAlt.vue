<template>
  <div class="container">
    <div class="row">
      <div class="col align-self-center">
        <p class="text-justify">
          {{ txt }}
        </p>
      </div>
      <div class="col align-self-center">
        <img :src="img" class="img-fluid" alt="Imagen" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoSectionAlt",
  props: {
    txt: String,
    img: String,
  },
};
</script>
