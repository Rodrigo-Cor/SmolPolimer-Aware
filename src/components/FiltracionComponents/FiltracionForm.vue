<template>
  <div class="container-fluid">
    <h2 class="section-subtitle text-center animate__animated animate__flash" id="form-section">Formulario</h2>
    <form class="row g-3">
      <div class="col-md-4 col-12 text-center">
        <Popper class="popper-box" arrow content="Cantidad de microplasticos a filtrar" placement="top" hover>
          <button class="btn btn-bd-info btn-sm mb-2"><i class="bi bi-lightbulb"></i></button>
        </Popper>
        <div class="input-group mb-3">
          <div class="form-floating">
            <input type="text" class="form-control" v-model="microplastic" id="microplasticInput" name="microplasticInput"
              placeholder="Microplásticos" aria-label="Microplásticos" aria-describedby="basic-addon1"
              @keypress="validateKeyPress">
            <label for="microplasticInput">Microplásticos</label>
          </div>
          <span class="input-group-text" id="basic-addon1">mg</span>
        </div>
        <span class="myAlert" v-if="microplastic > 40 || (!microplastic && sendButtonPressed)"><i class="bi bi-exclamation-diamond-fill"></i> Mínimo 1, máximo 40</span>
      </div>
      <div class="col-md-4 col-12 text-center">
        <Popper class="popper-box" arrow content="Cantidad de residuos microplásticos" placement="top" hover>
          <button class="btn btn-bd-info btn-sm mb-2"><i class="bi bi-lightbulb"></i></button>
        </Popper>
        <div class="input-group mb-3">
          <div class="form-floating">
            <input type="text" class="form-control" v-model="residue" id="residueInput" name="residueInput"
              placeholder="Residuos" aria-label="Residuos" aria-describedby="basic-addon2" @keypress="validateKeyPress">
            <label for="residueInput">Residuos</label>
          </div>
          <span class="input-group-text" id="basic-addon2">mg</span>
        </div>
        <span class="myAlert" v-if="residue > 20 || (!residue && sendButtonPressed)"><i class="bi bi-exclamation-diamond-fill"></i> Mínimo 1, máximo 20</span>
      </div>
      <div class="col-md-4 col-12 text-center">
        <Popper class="popper-box" arrow content="Cuántos días van a pasar por el filtro" placement="top" hover>
          <button class="btn btn-bd-info btn-sm mb-2"><i class="bi bi-lightbulb"></i></button>
        </Popper>
        <div class="input-group mb-3">
          <div class="form-floating">
            <input type="text" class="form-control" v-model="treatment" id="treatmentInput" name="treatmentInput"
              placeholder="Tiempo" aria-label="Tiempo" aria-describedby="basic-addon3"
              @keypress="validateKeyPress">
            <label for="treatmentInput">Tiempo</label>
          </div>
          <span class="input-group-text" id="basic-addon3">días</span>
        </div>
        <span class="myAlert" v-if="treatment == 1 || treatment >= 25 || (!treatment && sendButtonPressed)"><i class="bi bi-exclamation-diamond-fill"></i> Mínimo 2,
          máximo 24</span>
      </div>
    </form>
    <div class="d-flex justify-content-center my-4">
      <button type="button" @click="handleSendButton" class="btn btn-bd-primary">
        <i class="bi bi-check-circle"></i> Calcular
      </button>
    </div>
  </div>
</template>
<style scoped>
.myAlert {
  color: #f41b35;
  font-size: 1rem;
  font-weight: bold;
}
.form-control:focus {
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
  ;
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
  name: "FiltracionForm",
  components: {
    Popper
  },
  data() {
    return {
      microplastic: null,
      residue: null,
      treatment: null,
      sendButtonPressed: false,
    };
  },
  computed: {
    ...mapMutations([
      "setMicroplastics",
      "setTimeUnits",
      "setResidues",
    ]),
  },
  methods: {
    handleSendButton() {
      this.sendButtonPressed = true;
      const isValid = [
        this.microplastic >= 1 && this.microplastic <= 40,
        this.residue >= 1 && this.residue <= 20,
        this.treatment >= 2 && this.treatment <= 24,
      ];
      if (isValid.every(element => element)) {
        this.$store.commit('setMicroplastics', this.microplastic);
        this.$store.commit('setResidues', this.residue);
        this.$store.commit('setTimeUnits', this.treatment);
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
      if (inputValue.length >= 2) {
        event.preventDefault();
        return;
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
}
</script>
