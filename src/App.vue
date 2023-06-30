<template>
  <nav
    class="navbar bg-body-tertiary navbar-expand-lg navbar-dark"
    data-bs-theme="dark"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          class="img-fluid mx-auto"
          id="logotipo"
          src="/img/smolpolimeraware.svg"
          alt="Logo"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/about"
              >Los microplásticos</router-link
            >
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/about"
              >Filtración granular rápida</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about"
              >Degradación por bacterias Bacillus</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
  <footer class="text-lg-start">
    <div class="text-center p-3 text-light">Referencias</div>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#logotipo {
  width: 7em;
}

nav {
  padding: 30px;
}

.navbar-brand a {
  font-weight: bold;
  color: red;
}

nav a.router-link-exact-active.nav-link,
nav a.router-link-exact-active.navbar-brand {
  color: #50d890;
}

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #2b3035;
}
</style>
