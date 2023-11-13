<template>
  <div class="container-fluid">
    <h2 class="section-subtitle text-center animate__animated animate__flash">Formulario</h2>
    <form class="row g-3" @submit="handleSubmit">
      <div class="col-md-4 col-12 text-center">
        <Popper class="popper-box" arrow content="Cantidad de microplasticos a degradar" placement="top" hover>
          <button class="btn btn-bd-info btn-sm mb-2" type="button"><i class="bi bi-lightbulb"></i></button>
        </Popper>
        <div class="input-group mb-3">
          <div class="form-floating">
            <input type="text" class="form-control" v-model="quantity.value" id="quantityInput" name="quantityInput"
              placeholder="Microplásticos" aria-label="Microplásticos" aria-describedby="basic-addon1">
            <label for="quantityInput">Microplásticos</label>
          </div>
          <span class="input-group-text" id="basic-addon1">mg</span>
        </div>
        <span class="myAlert" v-if="!quantity.validate"><i class="bi bi-exclamation-diamond-fill"></i> Mínimo 1, máximo
          10000</span>
      </div>
      <div class="col-md-4 col-12 text-center">
        <Popper class="popper-box" arrow content="Cuántos bimestres van a estar degradándose" placement="top" hover>
          <button class="btn btn-bd-info btn-sm mb-2" type="button"><i class="bi bi-lightbulb"></i></button>
        </Popper>
        <div class="input-group mb-3">
          <div class="form-floating">
            <input type="text" class="form-control" v-model="bimester.value" id="bimestersInput" name="bimestersInput"
              placeholder="Tiempo" aria-label="Tiempo" aria-describedby="basic-addon2">
            <label for="bimestersInput">Tiempo</label>
          </div>
          <span class="input-group-text" id="basic-addon2">{{ bimester != 1 ? "bimestres" : "bimestre" }}</span>
        </div>
        <span class="myAlert" v-if="!bimester.validate"><i class="bi bi-exclamation-diamond-fill"></i> Mínimo 1, máximo
          12</span>
      </div>
      <div class="col-md-4 col-12 text-center">
        <Popper class="popper-box" arrow content="Alimento para las bacterias, determina el porcentaje de degradación."
          placement="top" hover>
          <button class="btn btn-bd-info btn-sm mb-2" type="button"><i class="bi bi-lightbulb"></i></button>
        </Popper>
        <div class="input-group mb-3">
          <div class="form-floating">
            <select class="form-select" v-model="mineral.value" id="mineralInput" name="mineralInput"
              aria-label="Select de mineral" @change="handleMaterialSelect">
              <option :value="'mineral agar'">mineral agar</option>
              <option :value="'mineral broth'">mineral broth</option>
            </select>
            <label for="mineralInput">Medio de cultivo</label>
          </div>
        </div>
        <span class="myAlert" v-if="!mineral.validate"><i class="bi bi-exclamation-diamond-fill"></i>
          Selecciona un medio de cultivo</span>
      </div>
      <div class="col-md-4 offset-md-4 col-12 text-center">
        <Popper class="popper-box" arrow content="La cepa define el porcentaje de degradación" placement="top" hover>
          <button type="button" class="btn btn-bd-info btn-sm mb-2"><i class="bi bi-lightbulb"></i></button>
        </Popper>
        <div class="input-group mb-3">
          <div class="form-floating">
            <select class="form-select" v-model="percentage.value" id="percentageInput" aria-label="Select de Porcentaje"
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
          <span class="input-group-text" id="basic-addon3">{{ percentage.value }}%</span>
        </div>
        <span class="myAlert" v-if="!percentage.validate"><i class="bi bi-exclamation-diamond-fill"></i>
          Selecciona una cepa de bacteria</span>
      </div>
      <div class="d-flex justify-content-center my-4">
        <button type="submit" class="btn btn-bd-primary" :disabled="!quantity.validate ||
          !bimester.validate ||
          !percentage.validate ||
          !mineral.validate ||
          !strain.validate
          ">
          <i class="bi bi-check-circle"></i> Calcular
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
import Popper from "vue3-popper";
export default {
  name: "BacillusForm",
  components: {
    Popper
  },
  data() {
    return {
      quantity: {
        value: 1000,
        validate: true,
      },
      bimester: {
        value: 12,
        validate: true,
      },
      percentage: {
        value: 34.55,
        validate: true,
      },
      mineral: {
        value: "mineral agar",
        validate: true,
      },
      strain: {
        value: "B. carbonipphilus",
        validate: true,
      },
      mineralAgarValues: [34.55, 36.54, 18.37, 36.07, 16.40, 34.48],
      mineralBrothValues: [25.00, 21.00, 16.00, 14.00, 8.00, 21.00],
      percentageOptions: [34.55, 36.54, 18.37, 36.07, 16.40, 34.48],
    };
  },
  watch: {
    "quantity.value"(val) {
      this.quantity.validate = val >= 1 && val <= 10000;
    },
    "bimester.value"(val) {
      this.bimester.validate = val >= 1 && val <= 12;
    },
    "percentage.value"(val) {
      this.percentage.validate = val != null;
    },
    "mineral.value"(val) {
      this.mineral.validate = val != null;
    },
    "strain.value"(val) {
      this.strain.validate = val != null;
    },
  },
  methods: {
    ...mapMutations({
      setMicroplastics: "setMicroplastics",
      setTimeUnits: "setTimeUnits",
      setGrowthMedium: "setGrowthMedium",
      setStrain: "setStrain",
      setPercentage: "setPercentage",
    }),
    handleSubmit(event) {
      event.preventDefault();
      this.setMicroplastics(this.quantity.value);
      this.setTimeUnits(this.bimester.value);
      this.setGrowthMedium(this.mineral.value);
      this.setStrain(this.strain.value);
      this.setPercentage(this.percentage.value);
      setTimeout(() => {
        this.scrollVisualizationResults();
      }, 340);
    },
    handleMaterialSelect(event) {
      const selectedValue = event.target.value;
      if (selectedValue === 'mineral agar') {
        this.percentageOptions = this.mineralAgarValues.slice();
        this.mineral.value = "mineral agar";
      } else if (selectedValue === 'mineral broth') {
        this.percentageOptions = this.mineralBrothValues.slice();
        this.mineral.value = "mineral broth";
      }
      this.percentage.value = null;
    },
    setBacillusStrain(event) {
      const selectedValue = parseFloat(event.target.value);
      if (selectedValue === this.percentageOptions[0]) {
        this.strain.value = "B. carbonipphilus";
      } else if (selectedValue === this.percentageOptions[1]) {
        this.strain.value = "B. sporothermodurans";
      } else if (selectedValue === this.percentageOptions[2]) {
        this.strain.value = "B. coagulans";
      } else if (selectedValue === this.percentageOptions[3]) {
        this.strain.value = "B. neidei";
      } else if (selectedValue === this.percentageOptions[4]) {
        this.strain.value = "smithii";
      } else if (selectedValue === this.percentageOptions[5]) {
        this.strain.value = "B. megaterium";
      }
    },
    scrollVisualizationResults() {
      const resultsSection = document.getElementById("results-section");
      if (resultsSection) {
        resultsSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    },
  },
};
</script>
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