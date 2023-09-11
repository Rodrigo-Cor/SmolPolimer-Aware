<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 my-2 text-center">
      <h2>Explicación de la Simulación</h2>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-12 my-2 text-center">
      <p>
        En la simulación gráfica, se ve reflejada la correspondencia entre la cantidad de microplásticos
        y el tiempo, bajo la fórmula: C(t) = n * (1 - p)^t, donde t es el tiempo, p es el porcentaje de
        limpieza y n es el número de microplásticos.
      </p>
    </div>
  </div>    
</div>
</template>
<style scoped>
h2{
  font-size: 1.5rem;
  font-weight: bold;
  color: #50d890;
}
p{
  text-align: justify;
  color: #1e1e1e;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
}
</style>
<script>
export default {
  name: "CalculatingResults",
  props: {
    values: {
      type: Array,
      required: true,
    },
    results: {
      type: Array,
      required: true,
    },
  }
};
</script>