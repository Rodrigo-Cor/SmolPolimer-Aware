<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 text-center">
      <h2 id="myTitle">Formulario</h2>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-sm-12 col-md-4 text-center my-1">
      <button
        type="button"
        class="btn btn-info"
        data-bs-toggle="popover"
        data-bs-content="Introduce una cantidad inicial de microplásticos a filtrar, máximo 70."
      >
        <i class="bi bi-lightbulb-fill"></i>
      </button>
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
      <span id="myAlert"  v-if="microplastic > 70 || (!microplastic && sendButtonPressed)">Mínimo 1, máximo 70</span>
    </div>
    <div class="col-sm-12 col-md-4 text-center my-1">
      <button
        type="button"
        class="btn btn-info"
        data-bs-toggle="popover"
        data-bs-content="Introduce una cantidad de microplásticos extra a filtrar, máximo 20."
      >
        <i class="bi bi-lightbulb-fill"></i>
      </button>
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
      <span id="myAlert" v-if="residue > 20 || (!residue && sendButtonPressed)">Mínimo 1, máximo 20</span>
    </div>
    <div class="col-sm-12 col-md-4 text-center my-1">
      <button
        type="button"
        class="btn btn-info"
        data-bs-toggle="popover"
        data-bs-content="Introduce cuántas veces se estará pasando por el filtro a los microplásticos, máximo 24."
      >
        <i class="bi bi-lightbulb-fill"></i>
      </button>
      <br>
      <label class="my-label" for="treatmentInput">Tratamientos</label>
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
      <span id="myAlert"  v-if="treatment > 24 || (!treatment && sendButtonPressed)">Mínimo 1, máximo 24</span>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-12 text-center my-4">
      <button @click="handleSendButton" class="btn btn-info">
        Enviar
      </button>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <hr>
    </div>
  </div>
</div>
</template>
<style scoped>
#myTitle{
  font-size: 1.7rem;
  font-weight: bold;
  color: #50d890;
}
#myIconButton{
  border: none;
  background-color: transparent;
}
.my-label {
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
#myAlert{
  color: #50d890; 
  font-size: 0.85rem;
  font-weight: bold;
}
.my-input:focus{
  color: #effffb;
  font-weight: bold;
  border: 0.2rem solid #50d890;
  background-color: #50d890;  
}
</style>
<script>
import { mapGetters, mapMutations } from 'vuex';
import Swal from "sweetalert2";
export default {
  name: "FiltracionForm",
  data() {
    return {
      microplastic: null,
      residue: null,
      treatment: null,
      sendButtonPressed: false,
    };
  },
  computed: {
    ...mapGetters(['getFiltracionValues']),
    ...mapMutations(['setFiltracionValues']),
  },
  methods: {
    handleSendButton() {
      this.sendButtonPressed = true;
      const isValid = [
        this.microplastic >= 1 && this.microplastic <= 70,
        this.residue >= 1 && this.residue <= 20,
        this.treatment >= 1 && this.treatment <= 24,
      ];
      if (isValid.every(element => element)) {
        this.$store.commit('setFiltracionValues', [this.microplastic, this.residue, this.treatment]);
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
    