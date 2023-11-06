<template>
  <div class="container-fluid">
    <h2 class="section-subtitle text-center animate__animated animate__flash">Formulario</h2>
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-4 text-center my-1">
        <Popper
          class="popper-box" 
          arrow 
          content="Cantidad de microplasticos a filtrar"
          placement="top"
          hover
        >
        <button class="btn btn-bd-info btn-sm"><i class= "bi bi-lightbulb"></i></button>
        </Popper>
        <br>
        <label class="my-label" for="microplasticInput">Microplásticos</label>
        <br>
        <input
          class="my-input"
          v-model="microplastic"
          type="text"
          id="microplasticInput"
          name="microplasticInput"
          @keypress = "validateKeyPress"
        />
        <br>
        <span class="myAlert"  v-if="microplastic > 70 || (!microplastic && sendButtonPressed)">Mínimo 1, máximo 70</span>
      </div>
      <div class="col-sm-12 col-md-4 text-center my-1">
        <Popper
            class="popper-box" 
            arrow 
            content="Cantidad de residuos de microplásticos"
            placement="top"
            hover
          >
          <button class="btn btn-bd-info btn-sm"><i class= "bi bi-lightbulb"></i></button>
        </Popper>
        <br>
        <label class="my-label" for="residueInput">Residuos</label>
        <br>
        <input
          class="my-input"
          v-model="residue"
          type="text"
          id="residueInput"
          name="residueInput"
          @keypress = "validateKeyPress"
        />
        <br>
        <span class="myAlert" v-if="residue > 20 || (!residue && sendButtonPressed)">Mínimo 1, máximo 20</span>
      </div>
      <div class="col-sm-12 col-md-4 text-center my-1">
        <Popper
            class="popper-box" 
            arrow 
            content="Cuántos días van a pasar por el filtro"
            placement="top"
            hover
          >
          <button class="btn btn-bd-info btn-sm"><i class= "bi bi-lightbulb"></i></button>
        </Popper>
        <br>
        <label class="my-label" for="treatmentInput">Días</label>
        <br>
        <input
          class="my-input"
          v-model="treatment"
          type="text"
          id="treatmentInput"
          name="treatmentInput"
          @keypress = "validateKeyPress"
        />
        <br>
        <span class="myAlert"  v-if="treatment == 1 || treatment >= 25  || (!treatment && sendButtonPressed)">Mínimo 2, máximo 24</span>
      </div>
    </div>
    <div class="d-flex justify-content-center my-4">
      <button type= "button" @click="handleSendButton" class="btn btn-bd-primary">
        <i class="bi bi-check-circle"></i> Calcular
      </button>
    </div>
  </div>
</template>
<style scoped>
.myAlert{
  color: #50d890; 
  font-size: 1rem;
  font-weight: bold;
}
.my-label {
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
.custom-input:focus{
  box-shadow: none; 
  outline: none;
}
.my-input:focus{
  color: #effffb;
  font-weight: bold;
  border: 0.2rem solid #50d890;
  background-color: #50d890;  
}
.btn-bd-info{
--bs-btn-border-radius: 2rem;
--bs-btn-color: #50d890;
--bs-btn-bg: #272727;
--bs-btn-border-color: #272727;
--bs-btn-hover-color: #272727;;
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
--bs-btn-hover-color: #effffb;;
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
    components : {
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
          this.microplastic >= 1 && this.microplastic <= 70,
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
    },
  }
</script>
