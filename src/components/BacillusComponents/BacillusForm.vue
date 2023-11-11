<template>
  <div class="container-fluid">
    <h2 class="section-subtitle text-center animate__animated animate__flash" id="form-section">Formulario</h2>
    <form class="row g-3">
      <div class="col-md-4 col-12 text-center">
        <Popper class="popper-box" arrow content="Cantidad de microplasticos a degradar" placement="top" hover>
          <button class="btn btn-bd-info btn-sm mb-2"><i class="bi bi-lightbulb"></i></button>
        </Popper>
        <div class="input-group mb-3">
          <div class="form-floating">
            <input type="text" class="form-control" v-model="quantity" id="quantityInput" name="quantityInput"
              placeholder="Microplásticos" aria-label="Microplásticos" aria-describedby="basic-addon1"
              @keypress="validateKeyPress">
            <label for="quantityInput">Microplásticos</label>
          </div>
          <span class="input-group-text" id="basic-addon1">mg</span>
        </div>
        <span class="myAlert" v-if="quantity > 10000 || (!quantity && sendButtonPressed)"><i
            class="bi bi-exclamation-diamond-fill"></i> Mínimo 1, máximo 10000</span>
      </div>
      <div class="col-md-4 col-12 text-center">
        <Popper class="popper-box" arrow content="Cuántos bimestres van a estar degradándose" placement="top" hover>
          <button class="btn btn-bd-info btn-sm mb-2"><i class="bi bi-lightbulb"></i></button>
        </Popper>
        <div class="input-group mb-3">
          <div class="form-floating">
            <input type="text" class="form-control" v-model="bimester" id="bimestersInput" name="bimestersInput"
              placeholder="Tiempo" aria-label="Tiempo" aria-describedby="basic-addon2" @keypress="validateKeyPress">
            <label for="bimestersInput">Tiempo</label>
          </div>
          <span class="input-group-text" id="basic-addon2">{{ bimester != 1 ? "bimestres" : "bimestre" }}</span>
        </div>
        <span class="myAlert" v-if="bimester > 12 || (!bimester && sendButtonPressed)"><i
            class="bi bi-exclamation-diamond-fill"></i> Mínimo 1, máximo 12</span>
      </div>
      <div class="col-md-4 col-12 text-center">
        <Popper class="popper-box" arrow content="Alimento para las bacterias, determina el porcentaje de degradación."
          placement="top" hover>
          <button class="btn btn-bd-info btn-sm mb-2"><i class="bi bi-lightbulb"></i></button>
        </Popper>
        <div class="input-group mb-3">
          <div class="form-floating">
            <select class="form-select" v-model="mineral" id="mineralInput" name="mineralInput"
              aria-label="Select de mineral" @change="handleMaterialSelect">
              <option :value="'mineral agar'">mineral agar</option>
              <option :value="'mineral broth'">mineral broth</option>
            </select>
            <label for="mineralInput">Medio de cultivo</label>
          </div>
        </div>
        <span class="myAlert" v-if="!mineral && sendButtonPressed"><i class="bi bi-exclamation-diamond-fill"></i>
          Selecciona un medio de cultivo</span>
      </div>
      <div class="col-md-4 offset-md-4 col-12 text-center" v-show="this.mediumSelected">
        <Popper class="popper-box" arrow content="La cepa define el porcentaje de degradación" placement="top" hover>
          <button class="btn btn-bd-info btn-sm mb-2"><i class="bi bi-lightbulb"></i></button>
        </Popper>
        <div class="input-group mb-3">
          <div class="form-floating">
            <select class="form-select" v-model="percentage" id="percentageInput" aria-label="Select de Porcentaje"
              aria-describedby="basic-addon3" name="percentageInput" @change="setBacillusStrain">
              <option :value="percentageOptions[0]">B. carbonipphilus</option>
              <option :value="percentageOptions[1]">B. sporothermodurans</option>
              <option :value="percentageOptions[2]">B. coagulans</option>
              <option :value="percentageOptions[3]">B. neidei</option>
              <option :value="percentageOptions[4]">B. smithii</option>
              <option :value="percentageOptions[5]">B. megaterium</option>
            </select>
            <label for="percentageInput">% degradación</label>
          </div>
          <span class="input-group-text" id="basic-addon3">{{ percentage }}%</span>
        </div>
        <span class="myAlert" v-if="!percentage && sendButtonPressed"><i class="bi bi-exclamation-diamond-fill"></i>
          Selecciona una cepa de bacteria</span>
      </div>
    </form>
    <div class="d-flex justify-content-center my-4">
      <button @click="handleSendButton" class="btn btn-bd-primary">
        <i class="bi bi-check-circle"></i> Calcular
      </button>
    </div>
  </div>
</template>
<style scoped>
.myAlert {
  margin: 1rem;
  color: #f41b35;
  font-size: 0.85rem;
  font-weight: bold;
}

.form-control:focus {
  box-shadow: none;
}

.form-select:focus {
  box-shadow: none;
}

.input-group-text {
  background-color: #50d890;
}

.btn-bd-info {
  --bs-btn-border-radius: 2rem;
  --bs-btn-color: #50d890;
  --bs-btn-bg: #272727;
  --bs-btn-border-color: #272727;
  --bs-btn-hover-color: #272727;
  --bs-btn-hover-bg: #50d890;
  --bs-btn-hover-border-color: #50d890;
  --bs-btn-active-color: #272727;
  --bs-btn-active-bg: #50d890;
  --bs-btn-active-border-color: #50d890;
}

.btn-bd-primary {
  --bs-btn-border-radius: 2rem;
  --bs-btn-font-weight: bold;
  --bs-btn-color: #effffb;
  --bs-btn-bg: #4f98ca;
  --bs-btn-border-color: #4f98ca;
  --bs-btn-hover-color: #effffb;
  --bs-btn-hover-bg: #50d890;
  --bs-btn-hover-border-color: #50d890;
  --bs-btn-active-color: #effffb;
  --bs-btn-active-bg: #50d890;
  --bs-btn-active-border-color: #50d890;
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
  components: {
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
      mediumSelected: false,
      sendButtonPressed: false,
    };
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
  mounted() {
    this.scrollVisualization();
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
      this.mediumSelected = true;
      this.percentage = null;
    },
    setBacillusStrain(event) {
      const selectedValue = parseFloat(event.target.value);
      if (selectedValue === this.percentageOptions[0]) {
        this.strain = "B. carbonipphilus";
      } else if (selectedValue === this.percentageOptions[1]) {
        this.strain = "B. sporothermodurans";
      } else if (selectedValue === this.percentageOptions[2]) {
        this.strain = "B. coagulans";
      } else if (selectedValue === this.percentageOptions[3]) {
        this.strain = "B. neidei";
      } else if (selectedValue === this.percentageOptions[4]) {
        this.strain = "smithii";
      } else if (selectedValue === this.percentageOptions[5]) {
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
    scrollVisualization() {
      const currentScrollY = window.scrollY;
      const resultsSection = document.getElementById("form-section");
      setTimeout(() => {
        if (!resultsSection) window.scrollTo(0, currentScrollY);
        else if (resultsSection) {
          resultsSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 340);
    },
  },
};
</script>