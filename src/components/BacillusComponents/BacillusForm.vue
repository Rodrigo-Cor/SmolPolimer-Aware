<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 text-center mt-3">
        <h2 id="myTitle">Formulario</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-3 text-center my-1">
        <Popper
          class="popper-box"
          arrow
          content="Cantidad de microplasticos a degradar"
          placement="top"
          hover
        >
        <button class="btn btn-outline-warning btn-sm"><i class= "bi bi-lightbulb"></i></button>
        </Popper>
        <br>
        <label class= "my-label" for="quantityInput">Microplásticos:</label>
        <br>
        <input
          class="my-input"
          v-model="quantity"
          type="text"
          id="quantityInput"
          name="quantityInput"
          @keypress= "validateKeyPress"
        />
        <br>
        <span id= "myAlert" v-if="quantity > 10000 || (!quantity && sendButtonPressed)">Mínimo 1, máximo 10000</span>
      </div>
      <div class="col-sm-12 col-md-3 text-center my-1">
        <Popper
          class="popper-box"
          arrow
          content="La temperatura en la que se someterán los microplásticos"
          placement="top"
          hover
        >
        <button class="btn btn-outline-warning btn-sm"><i class= "bi bi-lightbulb"></i></button>
        </Popper>
        <br>
        <label class="my-label" for="temperatureInput">Temperatura: °C</label>
        <br>
        <select
          class="my-select mx-auto"
          aria-label="Select de temperatura"
          v-model="temperature"
          id="temperatureInput"
          name="temperatureInput"
        >
          <option :value="15">15°C</option>
          <option :value="30">30°C</option>
        </select>
        <br>
        <span id= "myAlert" v-if="!temperature && sendButtonPressed">Selecciona una temperatura</span>
      </div>
      <div class="col-sm-12 col-md-3 text-center my-1">
        <Popper
          class="popper-box" 
          arrow 
          content="Cuántos bimestres van a estar degradándose"
          placement="top"
          hover
        >
        <button class="btn btn-outline-warning btn-sm"><i class= "bi bi-lightbulb"></i></button>
        </Popper>
        <br>
        <label class="my-label" for="bimestersInput">Bimestres:</label>
        <br>
        <input
          class="my-input"
          v-model="bimester"
          type="text"
          id="bimestersInput"
          name="bimestersInput"
          @keypress= "validateKeyPress"
        />
        <br>
        <span id= "myAlert" v-if="bimester > 12 || (!bimester && sendButtonPressed)">Mínimo 1, máximo 12</span>
      </div>
      <div class="col-sm-12 col-md-3 text-center my-1">
        <Popper
          class="popper-box"
          arrow
          content="Escoge un material para escoger el porcentaje"
          placement="top"
          hover
        >
        <button class="btn btn-outline-warning btn-sm"><i class= "bi bi-lightbulb"></i></button>
        </Popper>
        <br>
        <label class="my-label" for="mineralInput">Mineral:</label>
        <br>
        <select 
          class="my-select mx-auto"
          v-model="mineral"
          aria-label="Select de mineral"
          id="mineralInput"
          name="mineralInput"
          @change="handleMaterialSelect"
        >
          <option :value="'Agar'">Agar</option>
          <option :value="'Broth'">Broth</option>
        </select>
        <br>
        <span id= "myAlert" v-if="!mineral && sendButtonPressed">Selecciona un mineral</span>
      </div>
    </div>
    <div v-if="this.buttonPressed" class="row justify-content-center">
      <div class="col-12 text-center my-1">
        <Popper
          class="popper-box" 
          arrow 
          content="Cada cepa de bacteria tiene su porcentaje"
          placement="top"
          hover
        >
        <button class="btn btn-outline-warning btn-sm"><i class= "bi bi-lightbulb"></i></button>
        </Popper>
        <br>
        <label class="my-label" for="percentageInput">Porcentaje de degradación</label>
        <span>: {{ percentage }}%</span>
        <br>
        <select
          class="my-bacteria mx-auto"
          v-model="percentage"
          aria-label="Select de Porcentaje"
          id="percentageInput"
          name="percentageInput"
          @change = "setBacillusStrain"
        >
          <option :value="percentageOptions[0]">B. carbonipphilus</option>
          <option :value="percentageOptions[1]" >B. sporothermodurans</option>
          <option :value="percentageOptions[2]" >B. coagulans</option>
          <option :value="percentageOptions[3]" >B. neidei</option>
          <option :value="percentageOptions[4]" >B. smithii</option>
          <option :value="percentageOptions[5]" >B. megaterium</option>
        </select>
        <br>
        <span id= "myAlert" v-if="!percentage && sendButtonPressed">Selecciona una cepa de bacteria</span>
      </div>
    </div>
    <div class="row justify-content-center my">
      <div class="col-12 text-center my-4">
        <button @click="handleSendButton" class="btn btn-info">
          Enviar
        </button>
      </div>
    </div>
  </div> 
</template>
<style scoped>

#myTitle{
  border-style: solid;
  border-color: #4f98ca;
  border-radius: 1rem;
  font-size: 1.7rem;
  font-weight: bold;
  color: #4f98ca;
}
#myP{
  font-size: 1rem;
  font-weight: bold;
  color: #4f98ca;
}
#myAlert{
  margin: 1rem;
  color: #50d890; 
  font-size: 0.85rem;
  font-weight: bold;
}
.my-label{
  font-size: 1rem;
  font-weight: bold;
  color: #4f98ca;
}
.my-input{
  width: 8rem;
  padding: 0.2rem;
  border: 0.2rem solid #4f98ca;
  border-radius: 0.8rem;
  transition: 0.5s;
  outline: none;
}
.my-select {
  width: 8rem;
  padding: 0.2rem;
  border: 0.2rem solid #4f98ca;
  border-radius: 0.8rem;
  transition: 0.5s;
  outline: none;
}
.my-bacteria {
  width: 14rem;
  padding: 0.2rem;
  border: 0.2rem solid #4f98ca;
  border-radius: 0.8rem;
  transition: 0.5s;
  outline: none;
}
.my-input:focus{
  color: #effffb;
  font-weight: bold;
  border: 0.2rem solid #50d890;
  background-color: #50d890;
}
.btn-outline-warning{
  --bs-btn-border-radius: 1rem;
  --bs-btn-border-color: #272727;
  --bs-btn-bg: #272727;
}
.popper-box {
    --popper-theme-background-color: #272727;
    --popper-theme-background-color-hover: #272727;
    --popper-theme-text-color: #effffb;
    --popper-theme-border-width: 0rem;
    --popper-theme-border-style: solid;
    --popper-theme-border-radius: 1rem;
    --popper-theme-padding: 0.8rem;
    --popper-theme-box-shadow: 0 0.375rem 1.875rem -0.375rem rgba(39, 39, 39, 0.25);
  }
</style>
<script>
import { mapGetters, mapMutations } from 'vuex';
import Swal from "sweetalert2";
import Popper from "vue3-popper";
export default {
  name: "BacillusForm",
  components : {
    Popper
  },
  data() {
    return {
      quantity: null,
      temperature: null,
      bimester: null,
      percentage: null,
      mineral: null,
      strain: null,

      mineralAgarValues: [34.55, 36.54, 18.37, 36.07, 16.40, 34.48],
      mineralBrothValues: [25.00, 21.00, 16.00, 14.00, 8.00, 21.00],
      percentageOptions: [],
      buttonPressed: false,
      sendButtonPressed: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      const popoverTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="popover"]')
      );
      popoverTriggerList.map(function (popoverTriggerEl) {
        return new Popover(popoverTriggerEl);
      });
    });
  },
  computed: {
    ...mapGetters(['getBacillusValues']),
    ...mapMutations(['setBacillusValues']),
  },
  methods: {
    validateKeyPress(event) {
      const pattern = /[0-9\b]/
      if (
        !pattern.test(event.key)
      ) event.preventDefault();
      const inputValue = event.target.value;
      if (inputValue.length === 0 && event.key === '0') {
        event.preventDefault();
        return;
      }
      if (inputValue.length >= 5) {
        event.preventDefault();
        return;
      }
    },
    handleMaterialSelect(event) {
      this.mineral = null;
      const selectedValue = event.target.value;
      if (selectedValue === 'Agar') {
        this.percentageOptions = this.mineralAgarValues.slice();
        this.mineral = "Agar";
      } else if (selectedValue === 'Broth') {
        this.percentageOptions = this.mineralBrothValues.slice();
        this.mineral = "Broth";
      }
      this.buttonPressed = true;
      this.percentage = null;
    },
    setBacillusStrain(event) {
      const selectedValue = parseFloat(event.target.value);
      if(selectedValue === this.percentageOptions[0]) {
        this.strain = "B. carbonipphilus";
      } else if (selectedValue === this.percentageOptions[1]) {
        this.strain = "B. sporothermodurans";
      } else if (selectedValue === this.percentageOptions[2]) {
        this.strain = "B. coagulans";
      } else if (selectedValue === this.percentageOptions[3]) {
        this.strain = "B. neidei";
      } else if(selectedValue === this.percentageOptions[4]) {
        this.strain = "smithii";
      } else if(selectedValue === this.percentageOptions[5]) {
        this.strain = "B. megaterium";
      }
      console.log(this.strain)
    },
    handleSendButton() {
      this.sendButtonPressed = true;
      const isValid = [
        this.quantity >= 1 && this.quantity <= 10000,
        this.temperature,
        this.bimester >= 1 && this.bimester <= 12,
        this.percentage,
        this.mineral,
      ];
      if (isValid.every(element => element)) {
        this.$store.commit('setBacillusValues', [this.quantity, this.temperature, this.bimester, this.percentage, this.mineral, this.strain]);
      } else {
        Swal.fire({
          title: "Campos sin llenar o valores inválidos",
          text: "Haz clic en 'Confirmar' y llena los campos adecuadamente.",
          background: "#1e1e1e",
          color: "#effffb",
          icon: "warning",
          position: "center",
    
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          stopKeydownPropagation: false,
    
          showConfirmButton: true,
          confirmButtonText: "Confirmar",
          confirmButtonColor: "#50d890",
          confirmButtonAriaLabel: "Confirmar",
    
          showCancelButton: false,
          cancelButtonText: "Cancelar",
          cancelButtonAriaLabel: "Cancelar",
        })
      }
    },
  },
};
</script>