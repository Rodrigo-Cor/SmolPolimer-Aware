<template>
  <div class="container">
    <!-- Renglón para input de Cantidad inicial de Microplásticos -->
    <div class="row justify-content-center my-1">
      <div class="col-12 my-1 text-center">
        <h2>Formulario</h2>
      </div>
    </div>
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
          id = "values[0]"
        />
        <p id= "myMsg" v-if="!isInputValid[0] && showFormAlerts === true">{{ msg[0] }}</p>
      </div>
    </div>
    <!-- Renglón para input de Temperatura -->
    <div class="row justify-content-center my-1">
      <!-- Columna para etiqueta -->
      <div class="col-12 my-1 text-center">
        <label for="values[1]">Temperatura</label>
        <span>: {{ values[1] }}°C</span>
      </div>
      <!-- Columna para input -->
      <div class="col-12 my-1 text-center">
        <select
          class="form-select mx-auto"
          aria-label="Select de temperatura"
          v-model="values[1]"
          @change="validateTemperature"
          id="values[1]"
        >
        <option :value="15">15°C</option>
        <option :value="30">30°C</option>
        </select>
        <p id= "myMsg" v-if="!isInputValid[1] && showFormAlerts === true">{{ msg[1] }}</p>
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
      <!-- Columna para input -->
      <div class="col-12 my-1 text-center">
        <input
          v-model="values[2]"
          @input="validateTime"
          id="values[2]"
        />
        <p id= "myMsg" v-if="!isInputValid[2] && showFormAlerts === true">{{ msg[2] }}</p>
      </div>
    </div>
    <div class= "row justify-content-center my-1">
      <!-- Columna para indicaciones de botones -->
      <div class= "col-12 my-1 text-center">
        <span class= "myP">Mineral {{ mineral }}</span>
      </div>
    </div>
    <!-- Renglón para botones para escoger material -->
    <div class="row justify-content-center my-1">
      <!-- Columna para botones para escoger material -->
      <div class="col-12 text-center">
        <button @click="setAgar" class="btn btn-outline-primary btn-lg">Mineral Agar</button>
        <button @click="setBroth" class="btn btn-outline-secondary btn-lg">Mineral Broth</button>
      </div>
    </div>
    <!-- Renglón para input de Porcentaje de degradación -->
    <div class="row justify-content-center my-1">
      <!-- Columna para etiqueta -->
      <div v-if="this.buttonPressed" class="col-12 my-1 text-center">
        <label for="values[3]">Porcentaje de degradación</label>
        <span>: {{ values[3] }}%</span>
      </div>
      <!-- Columna para select -->
      <div v-if="this.buttonPressed" class="col-12 my-1 text-center">
        <select
          class="form-select mx-auto"
          v-model="values[3]"
          aria-label="Select de Porcentaje"
          @change="validateDegradationPercentage"
          id="values[3]"
        >
        <option :value="percentageOptions[0]">B. carbonipphilus</option>
        <option :value="percentageOptions[1]" >B. sporothermodurans</option>
        <option :value="percentageOptions[2]" >B. coagulans</option>
        <option :value="percentageOptions[3]" >B. neidei</option>
        <option :value="percentageOptions[4]" >B. smithii</option>
        <option :value="percentageOptions[5]" >B. megaterium</option>
        </select>
        <p id= "myMsg" v-if="!isInputValid[3] && showFormAlerts === true">{{ msg[3] }}</p>
      </div>
    </div>
    <!-- Renglón para botón para enviar-->
    <div class="row justify-content-center my-2">
      <div class="col-12 text-center my-2">
        <button @click="handleButton" class="btn btn-primary btn-lg">
          Enviar
        </button>
        <GenericAlert
          v-if = "this.showFormAlerts"
          :alertTitle="'Datos erróneos o campos sin llenar'"
          :alertText="'Revisa los datos antes de poder continuar con la simulación.'"
          :alertIcon="'warning'"
          ref="genericAlertRef"
        />
      </div>
    </div>
  </div> 
</template>

<script>
import GenericAlert from "@/components/GenericAlert.vue"

export default {
  name: "SimulationForm",
  components: {
    GenericAlert,
  },
  data() {
    return {
      exitValues: [null, null, null, null],
      values: [null, null, null, null],
      isInputValid: [false, false, false, false],
      mineralAgarValues: [34.55, 36.54, 18.37, 36.07, 16.40, 34.48],
      mineralBrothValues: [25, 21, 16, 14, 8, 21],
      percentageOptions: [null, null, null, null, null, null],
      showFormAlerts: false,
      buttonPressed: false,
      mineral: "",
      msg: [ 
        "Introduce una cantidad entre uno y 9999",
        "Selecciona una temperatura",
        "Introduce un tiempo entre uno y doce",
        "Selecciona una opción para determinar el porcentaje",
      ],
    };
  },
  methods: {
    setAgar() {
      this.percentageOptions = this.mineralAgarValues.slice();
      this.buttonPressed = true;
      this.values[3] = null;
      this.mineral = "Agar";
    },
    setBroth() {
      this.percentageOptions = this.mineralBrothValues.slice();
      this.buttonPressed = true;
      this.values[3] = null;
      this.mineral = "Broth";
    },
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
    handleButton() {
      if (this.isInputValid.every((element) => element)) {
        this.exitValues = this.values.slice();
        this.$emit("values-updated", this.exitValues);
      } else {
        this.showFormAlerts = true;
        const genericAlert = this.$refs.genericAlertRef;
        if (genericAlert){
          genericAlert.showAlert();
        }
      }
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
h2{
  font-size: 1.5rem;
  font-weight: bold;
  color: #50d890;
}
#myP{
  font-size: 1rem;
  font-weight: bold;
  color: #4f98ca;
}
label{
  font-size: 1rem;
  font-weight: bold;
  color: #4f98ca;
}
input{
  width: 20rem;
  padding: 1rem;
  border: 0.2rem solid #4f98ca;
  border-radius: 0.8rem;
  transition: 0.5s;
  outline: none;
}
input:focus{
  color: #effffb;
  font-weight: bold;
  border: 0.2rem solid #50d890;
  background-color: #50d890;
}
.form-select{
  border: 0.2rem solid #4f98ca;
  width: 20rem;
  padding: 1rem;
  border-radius: 0.8rem;
  outline: none;
}
#myMsg{
  margin: 1rem;
  color: #d2704d; 
  font-size: 0.85rem;
  font-weight: bold;
}
</style>
