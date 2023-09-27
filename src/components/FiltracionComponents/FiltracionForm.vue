<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 text-center mt-3">
      <h2 id="myTitle">Formulario</h2>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-sm-12 col-md-4 text-center my-1">
      <Popper 
          arrow 
          content="Introduce una cantidad de microplasticos a filtrar"
          placement="top"
          hover
        >
        <button class="btn btn-outline-warning btn-sm"><i class= "bi bi-lightbulb"></i></button>
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
      <span id="myAlert"  v-if="microplastic > 70 || (!microplastic && sendButtonPressed)">Mínimo 1, máximo 70</span>
    </div>
    <div class="col-sm-12 col-md-4 text-center my-1">
      <Popper 
          arrow 
          content="Introduce una cantidad de microplasticos extra"
          placement="top"
          hover
        >
        <button class="btn btn-outline-warning btn-sm"><i class= "bi bi-lightbulb"></i></button>
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
      <span id="myAlert" v-if="residue > 20 || (!residue && sendButtonPressed)">Mínimo 1, máximo 20</span>
    </div>
    <div class="col-sm-12 col-md-4 text-center my-1">
      <Popper 
          arrow 
          content="Introduce cuántos días se van a pasar por el filtro los microplásticos"
          placement="top"
          hover
        >
        <button class="btn btn-outline-warning btn-sm"><i class= "bi bi-lightbulb"></i></button>
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
#myIconButton{
  border: none;
  background-color: transparent;
}
#myAlert{
  color: #50d890; 
  font-size: 0.85rem;
  font-weight: bold;
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
:deep(.popper) {
    background: #272727;
    padding: 1rem;
    border-radius: 1rem;
    color: #effffb;
    font-weight: bold;
}
:deep(.popper #arrow::before) {
    background: #272727;
}
</style>
<script>
import { mapGetters, mapMutations } from 'vuex';
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
