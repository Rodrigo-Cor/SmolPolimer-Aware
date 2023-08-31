<template>
  <div class="container">
    <!-- Renglón para input de Cantidad inicial de Microplásticos -->
    <div class="row justify-content-center my-1">
      <!-- Columna para etiqueta -->
      <div class="col-12 my-1 text-center">
        <label for="values[0]">Cantidad inicial de Microplásticos</label>
        <span v-if="values[0] == 1">: {{ values[0] }} partícula</span>
        <span v-else>: {{ values[0] }} partículas</span>
      </div>
      <!-- Columna para input -->
      <div class="col-12 my-1 text-center">
        <input
          v-model="values[0]"
          @input="validateInitialQuantity"
          placeholder="Introduce un valor"
          id = "values[0]"
        />
        <p id= "myMsg" v-if="!isInputValid[0] && values[0] != null">{{ msg[0] }}</p>
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
          id="values[1]"
        />
        <p id= "myMsg" v-if="!isInputValid[1] && values[1] != null">{{ msg[1] }}</p>
        <p v-else>&nbsp;</p>
      </div>
    </div>
    <!-- Renglón para input de Tiempo -->
    <div class="row justify-content-center my-1">
      <!-- Columna para etiqueta -->
      <div class="col-12 my-1 text-center">
        <label for="values[2]">Tiempo</label>
        <span v-if= "values[2] == 1">: {{ values[2] }} Bimestre</span>
        <span v-else>: {{ values[2] }} Bimestres</span>
      </div>
      <!-- Columna para renglón -->
      <div class="col-12 my-1 text-center">
        <input
          v-model="values[2]"
          @input="validateTime"
          placeholder="Introduce un valor"
          id="values[2]"
        />
        <p id= "myMsg" v-if="!isInputValid[2] && values[2] != null">{{ msg[2] }}</p>
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
          id="values[3]"
        />
        <p id= "myMsg" v-if="!isInputValid[3] && values[3] != null">{{ msg[3] }}</p>
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
        "Introduce un número entre uno y 9999",
        "Introduce un número entre uno y noventa y nueve",
        "Introduce un número entre uno y doce",
        "Introduce un número entre uno y cien",
      ],
    };
  },
  methods: {
    /* Valida la Cantidad inicial de microplásticos */
    validateInitialQuantity() {
      this.isInputValid[0] = this.values[0] >= 1 && this.values[0] <= 9999;
    },
    /* Valida la temperatura */
    validateTemperature() {
      this.isInputValid[1] = this.values[1] >= 1 && this.values[1] <= 99;
    },
    /* Valida el tiempo */
    validateTime() {
      this.isInputValid[2] = this.values[2] >= 1 && this.values[2] <= 12;
    },
    /* Valida el porcentaje de degradación */
    validateDegradationPercentage() {
      this.isInputValid[3] = this.values[3] >= 1 && this.values[3] <= 100;;
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
	      title: '<span class="amarillo">Datos erróneos o faltantes</span>',
	      html: '<p class="justificado">Los datos que has ingresado son erróneos o has dejado campos sin llenar. Revisalos antes de poder continuar con la simulación.</p>',
	      background: '#1e1e1e',
        color: '#effffb',
	      icon: 'warning',
	      confirmButtonText: '<span class="negro">Aceptar</span>',
	      position: 'center',

	      allowOutsideClick: false,
      	allowEscapeKey: false,
	      allowEnterKey: false,
	      stopKeydownPropagation: false, //evitar comandos

	      showConfirmButton: true,
	      confirmButtonColor: '#50d890',
	      confirmButtonAriaLabel: 'Confirmar',

      	showCancelButton: false,
	      cancelButtonText: 'Cancelar',
	      cancelButtonAriaLabel: 'Cancelar',
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
/* 
#1e1e1e negro
#50d890 verde
#4f98ca azul
#effffb blanco
*/
input{
  border-width: 0.125rem;
  border-radius: 0.4rem;
  border-color: #4f98ca;
  transition: 0.5s;
  outline: none;
}
input:focus{
  border: 0.125rem solid #1e1e1e;
}
#myMsg{
  color: #d2704d; 
  font-size: 0.85rem;
  font-weight: bold;;
}
</style>
