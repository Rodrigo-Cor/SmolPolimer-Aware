<template>
  <div>
    <div
      id="carouselHome"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="5000"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselHome"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselHome"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselHome"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active c-item">
          <img
            src="../assets/rawpixel2.jpg"
            class="d-block w-100 c-img"
            alt="..."
          />
          <div class="carousel-caption top-0 mt-4">
            <p class="mt-5 mb-3 text-uppercase text-size">
              Los plásticos se degradan con el tiempo, erosionándose y
              descomponiéndose
            </p>
            <p class="position-absolute bottom-0 end-0 p-3 text-credits fst-italic">
              <a target="_blank" href="https://www.rawpixel.com/image/2318943"
                >Image</a
              >
              by
              <a target="_blank" href="https://www.rawpixel.com/"
                >rawpixel.com</a
              >
            </p>
          </div>
        </div>
        <div class="carousel-item c-item">
          <img
            src="../assets/rawpixel1.jpg"
            class="d-block w-100 c-img"
            alt="..."
          />
          <div class="carousel-caption top-0 mt-4">
            <p class="mt-5 mb-3 text-uppercase text-size">
              Aumento preocupante de plásticos de un sólo uso desde 2016
            </p>
            <p class="position-absolute bottom-0 end-0 p-3 text-credits fst-italic">
              <a target="_blank" href="https://www.rawpixel.com/image/2904065"
                >Image</a
              >
              by
              <a target="_blank" href="https://www.rawpixel.com/"
                >rawpixel.com</a
              >
            </p>
          </div>
        </div>
        <div class="carousel-item c-item">
          <img
            src="../assets/5gyres-microplastic-fish.jpg"
            class="d-block w-100 c-img"
            alt="Pez con microplásticos"
          />
          <div class="carousel-caption top-0 mt-4">
            <p class="mt-5 mb-3 text-uppercase text-size">
              El 59% de los peces en costas mexicanas tiene microplásticos en
              sus estómagos
            </p>
            <p class="position-absolute bottom-0 end-0 p-3 fst-italic text-credits">
              Image Courtesy of
              <a target="_blank" href="https://www.5gyres.org/publications"
                >THE 5 GYRES INSTITUTE</a
              >
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselHome"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselHome"
        data-bs-slide="next"
      >
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
  height: 25rem;
}

.c-img {
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
}
</style>
