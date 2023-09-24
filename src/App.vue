<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar-brand a {
  font-weight: bold;
  color: red;
}

nav a.router-link-exact-active.nav-link,
nav a.router-link-exact-active.navbar-brand {
  color: #50d890;
}

@media (max-width: 576px) {
  .text-size {
    font-size: 1rem;
  }
  .img-info {
    width: 100%;
  }
}

@media (min-width: 576px) {
  .text-size {
    font-size: 1.15rem;
  }
  .img-info {
    width: 75%;
  }
}

@media (min-width: 992px) {
  .text-size {
    font-size: 1.3rem;
  }
  .img-info {
    width: 50%;
  }
}
</style>
