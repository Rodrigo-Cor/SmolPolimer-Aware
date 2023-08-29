<template>
  <div class="container">
    <!-- Renglón para input de Cantidad inicial de Microplásticos -->
    <div class="row justify-content-center my-1">
      <!-- Columna para etiqueta -->
      <div class="col-12 my-1 text-center">
        <label for="values[0]">Cantidad inicial de Microplásticos</label>
        <span>: {{ values[0] }} partículas</span>
      </div>
      <!-- Columna para input -->
      <div class="col-12 my-1 text-center">
        <input
          v-model="values[0]"
          @input="validateInitialQuantity"
          placeholder="Introduce un valor"
        />
        <p v-if="!isInputValid[0] && values[0] != null">{{ msg[0] }}</p>
        <p v-else>&nbsp;</p>
      </div>
    </div>
    <!-- Renglón para input de Temperatura -->
    <div class="row justify-content-center my-1">
      <!-- Columna para etiqueta -->
      <div class="col-12 my-1 text-center">
        <label for="values[1]">Temperatura</label>
        <span>: {{ values[1] }} °C</span>
      </div>
      <!-- Columna para input -->
      <div class="col-12 my-1 text-center">
        <input
          v-model="values[1]"
          @input="validateTemperature"
          placeholder="Introduce un valor"
        />
        <p v-if="!isInputValid[1] && values[1] != null">{{ msg[1] }}</p>
        <p v-else>&nbsp;</p>
      </div>
    </div>
    <!-- Renglón para input de Tiempo -->
    <div class="row justify-content-center my-1">
      <!-- Columna para etiqueta -->
      <div class="col-12 my-1 text-center">
        <label for="values[2]">Tiempo</label>
        <span>: {{ values[2] }} Meses</span>
      </div>
      <!-- Columna para renglón -->
      <div class="col-12 my-1 text-center">
        <input
          v-model="values[2]"
          @input="validateTime"
          placeholder="Introduce un valor"
        />
        <p v-if="!isInputValid[2] && values[2] != null">{{ msg[2] }}</p>
        <p v-else>&nbsp;</p>
      </div>
    </div>
    <!-- Renglón para input de Porcentaje de degradación -->
    <div class="row justify-content-center my-1">
      <!-- Columna para etiqueta -->
      <div class="col-12 my-1 text-center">
        <label for="values[3]">Porcentaje de degradación</label>
        <span>: {{ values[3] }}%</span>
      </div>
      <!-- Columna para input -->
      <div class="col-12 my-1 text-center">
        <input
          v-model="values[3]"
          @input="validateDegradationPercentage"
          placeholder="Introduce un valor"
        />
        <p v-if="!isInputValid[3] && values[3] != null">{{ msg[3] }}</p>
        <p v-else>&nbsp;</p>
      </div>
    </div>
    <!-- Renglón para botón para enviar-->
    <div class="row justify-content-center my-2">
      <div class="col-12 text-center my-2">
        <button @click="handleButton" class="btn btn-outline-primary btn-lg">
          Aceptar
        </button>
      </div>
    </div>

    <!-- Mostrar resultado de la simulación -->
    <div
      v-if="results.length > 0 && !calculating"
      class="row justify-content-center"
    >
      <div class="col-12 text-center">
        <p>Resultados de la simulación:</p>
        <div class="row">
          <div class="col-12 my-2">
            <div v-for="(result, index) in results" :key="index">
              C(t{{ index }}) = {{ result }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      calculating: false,
      values: [null, null, null, null],
      results: [], // Arreglo para almacenar los resultados de la simulación en cada intervalo de tiempo
      isInputValid: [false, false, false, false],
      msg: [
        "Introduce un número entero mayor o igual a uno, de hasta 5 dígitos",
        "Introduce un número entero mayor o igual a uno, de hasta 4 dígitos",
        "Introduce un número entero mayor o igual a uno, de hasta 2 dígitos",
        "Introduce un número entero entre uno y cien",
      ],
    };
  },
  methods: {
    /* Valida la Cantidad inicial de microplásticos */
    validateInitialQuantity() {
      const valuePattern = /^[1-9]\d{0,3}$/;
      this.isInputValid[0] = valuePattern.test(this.values[0]);
    },
    /* Valida la temperatura */
    validateTemperature() {
      const valuePattern = /^[1-9]\d{0,3}$/;
      this.isInputValid[1] = valuePattern.test(this.values[1]);
    },
    /* Valida el tiempo */
    validateTime() {
      const valuePattern = /^[1-9]\d{0,1}$/;
      this.isInputValid[2] = valuePattern.test(this.values[2]);
    },
    /* Valida el porcentaje de degradación */
    validateDegradationPercentage() {
      const valuePattern = /^(100|[0-9]{1,2})$/;
      this.isInputValid[3] = valuePattern.test(this.values[3]);
    },
    /* Hace el cálculo de la degradación */
    calculateDegradation() {
      //Bandera
      this.calculating = true;
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
      this.calculating = false;
    },
    handleButton() {
      if (this.isInputValid.every((element) => element)) {
        this.sendValues();
      } else this.showAlert();
    },
    showAlert() {
      Swal.fire({
        title: "Valores inválidos del formulario",
        text: "Presiona 'OK' para corregir los campos antes de continuar",
        icon: "warning",
        confirmButtonText: "OK",
      });
    },
    sendValues() {
      // Realizar el cálculo de degradación antes de emitir los valores
      this.calculateDegradation();
      // Emite un evento con el arreglo de valores
      this.$emit("values-updated", this.values);
      // Emite un evento con el arreglo de los resultados
      this.$emit("results-updated", this.results);
    },
  },
};
</script>

<style scoped>
/* .my-input {}
.my-label{}
.my-msg{} */
</style>
