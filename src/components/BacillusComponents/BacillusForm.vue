<template>
  <div class="container-fluid animate__animated animate__bounceIn" style="background-color: #4f98ca1a; border-radius: 1rem;">
    <h2 class="section-subtitle text-center">Formulario</h2>
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-3 text-center my-1">
        <Popper
          class="popper-box"
          arrow
          content="Cantidad de microplasticos a degradar"
          placement="top"
          hover
        >
        <button class="btn btn-outline-info btn-sm"><i class= "bi bi-lightbulb"></i></button>
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
        <span class= "myAlert" v-if="quantity > 10000 || (!quantity && sendButtonPressed)">Mínimo 1, máximo 10000</span>
      </div>
      <div class="col-sm-12 col-md-3 text-center my-1">
        <Popper
          class="popper-box" 
          arrow 
          content="Cuántos bimestres van a estar degradándose"
          placement="top"
          hover
        >
        <button class="btn btn-outline-info btn-sm"><i class= "bi bi-lightbulb"></i></button>
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
        <span class= "myAlert" v-if="bimester > 12 || (!bimester && sendButtonPressed)">Mínimo 1, máximo 12</span>
      </div>
      <div class="col-sm-12 col-md-3 text-center my-1">
        <Popper
          class="popper-box"
          arrow
          content="Alimento para las bacterias, determina el porcentaje de degradación."
          placement="top"
          hover
        >
        <button class="btn btn-outline-info btn-sm"><i class= "bi bi-lightbulb"></i></button>
        </Popper>
        <br>
        <label class="my-label" for="mineralInput">Medio de cultivo:</label>
        <br>
        <select 
          class="my-select"
          v-model="mineral"
          aria-label="Select de mineral"
          id="mineralInput"
          name="mineralInput"
          @change="handleMaterialSelect"
        >
          <option :value="'mineral agar'">mineral agar</option>
          <option :value="'mineral broth'">mineral broth</option>
        </select>
        <br>
        <span class= "myAlert" v-if="!mineral && sendButtonPressed">Selecciona un medio de cultivo</span>
      </div>
      <div v-show="this.buttonPressed" class="col-sm-12 col-md-3 text-center my-1">
        <Popper
          class="popper-box" 
          arrow 
          content="La cepa define el porcentaje de degradación"
          placement="top"
          hover
        >
        <button class="btn btn-outline-info btn-sm"><i class= "bi bi-lightbulb"></i></button>
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
        <span class= "myAlert" v-if="!percentage && sendButtonPressed">Selecciona una cepa de bacteria</span>
      </div>
    </div>
    <div class="d-flex justify-content-center my-4">
      <button @click="handleSendButton" class="btn btn-info">
        Enviar
      </button>
    </div>
  </div> 
</template>
<style scoped>
.myAlert{
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
  height: 2rem;
  padding: 0.2rem;
  border: 0.2rem solid #4f98ca;
  border-radius: 0.8rem;
  background-color:#effffb;
  transition: 0.5s;
  outline: none;
}
.my-select {
  width: 8rem;
  height: 2rem;
  padding: 0.2rem;
  border: 0.2rem solid #4f98ca;
  border-radius: 0.8rem;
  background-color:#effffb;
  transition: 0.5s;
  outline: none;
}
.my-bacteria {
  height: 2rem;
  width: 13rem;
  padding: 0.2rem;
  border: 0.2rem solid #4f98ca;
  border-radius: 0.8rem;
  background-color:#effffb;
  transition: 0.5s;
  outline: none;
}
.my-input:focus{
  color: #effffb;
  font-weight: bold;
  border: 0.2rem solid #50d890;
  background-color: #50d890;
}
.btn-outline-info{
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
import { mapMutations } from 'vuex';
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
    ...mapMutations([
      "setBacillusValues",
      "setMicroplastics",
      "setTimeUnits",
      "setGrowthMedium",
      "setStrain",
      "setPercentage",
    ]),
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
      if (selectedValue === 'mineral agar') {
        this.percentageOptions = this.mineralAgarValues.slice();
        this.mineral = "mineral agar";
      } else if (selectedValue === 'mineral broth') {
        this.percentageOptions = this.mineralBrothValues.slice();
        this.mineral = "mineral broth";
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
    },
    handleSendButton() {
      this.sendButtonPressed = true;
      const isValid = [
        this.quantity >= 1 && this.quantity <= 10000,
        this.bimester >= 1 && this.bimester <= 12,
        this.percentage,
        this.mineral,
      ];
      if (isValid.every(element => element)) {
        this.$store.commit('setMicroplastics', this.quantity);
        this.$store.commit('setTimeUnits', this.bimester);
        this.$store.commit('setGrowthMedium', this.mineral);
        this.$store.commit('setStrain', this.strain);
        this.$store.commit('setPercentage', this.percentage);
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