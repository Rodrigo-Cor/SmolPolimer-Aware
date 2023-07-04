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
</style>
