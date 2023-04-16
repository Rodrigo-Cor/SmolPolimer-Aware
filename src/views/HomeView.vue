<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CardArticles/>
  </div>
</template>

<script>
// @ is an alias to /src
import CardArticles from '@/components/CardArticles.vue';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    CardArticles
  }
}
</script>
