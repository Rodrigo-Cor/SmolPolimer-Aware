<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav a.router-link-exact-active.nav-link,
nav a.router-link-exact-active.navbar-brand {
  color: #50d890;
}

.section-title {
  background-image: linear-gradient(to bottom, #02787c, #4f98ca);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.section-subtitle {
  background-image: linear-gradient(to bottom, #50d8d4, #4f5bca);
  -webkit-background-clip: text;
  background-clip: text;
  font-size: 1.7rem;
  color: transparent;
  font-weight: bold;
}
.section-sub-subtitle{
  font-size: 1.5rem;
  font-weight: bold;
  background-image: linear-gradient(to bottom, #4fcabe, #272727);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

@media (max-width: 576px) {
  .text-size {
    font-size: 1rem;
  }
  .img-size{
    width: 100%;
    height: 50%;
  }
}

@media (min-width: 576px) {
  .text-size {
    font-size: 1.15rem;
    .img-size{
      width: 75%;
    }
  }
}

@media (min-width: 992px) {
  .text-size {
    font-size: 1.3rem;
  }
  .img-size{
    width: 50%;
    height: auto;
  }
}

.text-justify-custom {
  text-align: justify;
}

.text-card {
  font-size: 0.8rem;
}

.text-credits {
  font-size: 0.6rem;
}

.text-button {
  font-size: 0.8rem;
}
.text-green-box {
  text-align: justify;
  border-radius: 1rem;
  background-color: #50d8901a;
  padding: 0.6rem;
}
.text-blue-box {
  text-align: justify;
  border-radius: 1rem;
  background-color: #4f98ca1a;
  padding: 0.6rem;
}
</style>
