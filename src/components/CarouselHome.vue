<template>
  <div>
    <div id="carouselHome" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="0" class="active" aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active c-item"> 
          <img src="../assets/unsplash2.svg" class="d-block w-100 c-img" alt="..." />
          <div class="carousel-caption top-0 mt-4">
            <p class="mt-5 mb-3 fs-4 text-uppercase">
              Los plásticos se degradan con el tiempo, erosionándose y
              descomponiéndose
            </p>
            <p class="position-absolute bottom-0 end-0 p-3 fs-6 fst-italic">
              Foto de Naja Bertolt Jensen en Unsplash
            </p>
          </div>
        </div>
        <div class="carousel-item c-item"> 
          <img src="../assets/pexelsCatherineSheila.svg" class="d-block w-100 c-img" alt="..." />
          <div class="carousel-caption top-0 mt-4">
            <p class="mt-5 mb-3 fs-4 text-uppercase">
              Aumento preocupante de plásticos de un solo uso desde 2016
            </p>
            <p class="position-absolute bottom-0 end-0 p-3 fs-6 fst-italic">
              Image courtesy from Catherine Sheila
            </p>
          </div>
        </div>
        <div class="carousel-item c-item">
          <img src="../assets/Animal2.svg" class="d-block w-100 c-img" alt="..." />
          <div class="carousel-caption top-0 mt-4">
            <p class="mt-5 mb-3 fs-4 text-uppercase">
              El 59% de los peces en costas mexicanas tiene microplásticos en sus estómagos
            </p>
            <p class="position-absolute bottom-0 end-0 p-3 fs-6 fst-italic">
              Image courtesy of the 5 Gyres Institute
            </p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselHome" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselHome" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselHome",
};
</script>

<style scoped>
.c-item {
  height: 45rem;
}

.c-img {
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
}
</style>
