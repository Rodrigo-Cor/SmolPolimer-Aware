<template>
  <div class="home">
    <NavbarHome />
    <router-view />
    <FooterHome />
  </div>
</template>

<script>
import NavbarHome from "@/components/NavbarHome.vue";
import FooterHome from "@/components/FooterHome.vue";

export default {
  components: {
    NavbarHome,
    FooterHome,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
