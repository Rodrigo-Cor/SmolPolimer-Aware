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
.color-home {
  background-color: #5cd2e655;
}

.section-title {
  background-image: linear-gradient(to bottom, #02787c, #4f98ca);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
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
</style>
