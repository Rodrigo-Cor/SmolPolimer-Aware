<template>
  <div class="container">
    <div class="row justify-content-center my-2">
      <div
        class="col-12 my-2 text-center"
        v-for="index in values.length"
        :key="'input' + index"
      >
        <label v-if="index !== 0">
          {{ inputLabels[index - 1] }}
          <select
            v-if="index === 4"
            class="form-control my-input"
            v-model="values[index - 1]"
            @change="calculateDegradation"
          >
            <option
              v-for="option in percentageOptions"
              :key="option"
              :value="option"
            >
              {{ option }} %
            </option>
          </select>
          <input
            v-else
            type="number"
            class="form-control my-input"
            v-model="values[index - 1]"
            input="validateInput(index - 1)"
          />
        </label>
      </div>
      <div class="row justify-content-center my-4">
        <div class="col-12 text-center my-4">
          <button @click="sendValues" class="btn btn-outline-primary btn-lg">
            Aceptar
          </button>
        </div>
      </div>
    </div>

    <!-- Mostrar resultado de la simulación -->
    <div v-if="results.length > 0" class="row justify-content-center">
      <div class="col-12 text-center">
        <p>Resultados de la simulación:</p>
        <ul>
          <li v-for="(result, index) in results" :key="index">
            C(t{{ index }}) = {{ result }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      values: [null, null, null, null],
      inputLabels: [
        "Cantidad inicial de Microplásticos",
        "Temperatura",
        "Tiempo",
        "Porcentaje de degradación",
      ],
      percentageOptions: [0, 25, 50, 75, 100],
      results: [], // Arreglo para almacenar los resultados de la simulación en cada intervalo de tiempo
    };
  },
  methods: {
    validateInput(index) {
      if (this.values[index] < 0) {
        this.values[index] = 0;
      } else if (this.values[index] > 100) {
        this.values[index] = 100;
      }
    },
    calculateDegradation() {
      // Limpiamos el arreglo de resultados antes de hacer una nueva simulación
      this.results = [];

      // Realizar cálculo de degradación basado en los valores ingresados
      const n = this.values[0]; // Cantidad inicial de microplásticos
      const percentage = this.values[3] / 100; // Porcentaje de degradación en decimal
      const t = this.values[2]; // Tiempo

      // Realizamos la simulación en intervalos de tiempo y almacenamos los resultados en el arreglo 'results'
      for (let i = 0; i <= t; i++) {
        const result = n * Math.pow(1 - percentage, i); // Aplicar la fórmula C(t) = n * (1 - p)^t
        this.results.push(result);
      }
    },
    sendValues() {
      // Realizar el cálculo de degradación antes de emitir los valores
      this.calculateDegradation();

      // Emite un evento con el arreglo de valores
      this.$emit("values-updated", this.values);
    },
  },
};
</script>
