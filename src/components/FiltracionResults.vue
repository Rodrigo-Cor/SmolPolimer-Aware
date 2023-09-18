<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 text-center">
        <h2 id="myTitle">Resultados</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Tratamiento</th>
              <th scope="col">MP en filtro</th>
              <th scope="col">MP en río</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <th scope="row">1</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <hr>
      </div>
    </div>
  </div>
</template>
<style scoped>
#myTitle{
  font-size: 1.7rem;
  font-weight: bold;
  color: #50d890;
}

</style>
<script>
export default {
  name: "FiltracionResults",
  mounted () {
    this.calculateCleansing()
    },
  props: {
    values: {
        type: Array,
        required: true,
    }
  },
  data() {
    return {

    };
  },
  watch: {
    values: {
        handler: "calculateCleansing",
        deep: true,
        immediate: true,
    },
  },
  methods: {
    calculateCleansing() {
    },
  },
}
</script>
