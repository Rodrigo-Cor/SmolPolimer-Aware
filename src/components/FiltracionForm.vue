<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 text-center">
      <h2 id="myTitle">Formulario</h2>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-sm-12 col-md-4 text-center">
      <button id="myIconButton">
        <i class="bi bi-question-circle"></i>
      </button>
      <br>
      <label id="myLabel" for="microplastic">Cantidad</label>
      <span v-if="microplastic == 1">: {{ microplastic }} microplástico</span>
      <span v-else>: {{ microplastic }} microplásticos</span>
      <br>
      <input
        class="my-input"
        v-model="getFiltracionValues[0]"
        type="text"
        id="input1"
        @keypress = "validateKeyPress"
      />
      <br>
      <span id="myAlert"  v-if="getFiltracionValues[0] > 70">No exceder valor de 70 </span>
    </div>
    <div class="col-sm-12 col-md-4 text-center">
      <button id="myIconButton">
        <i class="bi bi-question-circle"></i>
      </button>
      <br>
      <label id="myLabel" for="residue">Residuos</label>
      <span>: {{ residue }}</span>
      <br>
      <input
        class="my-input"
        v-model="getFiltracionValues[1]"
        type="text"
        id="input2"
        @keypress = "validateKeyPress"
      />
      <br>
      <span id="myAlert" v-if="getFiltracionValues[1] > 20">No exceder valor de 20 </span>
    </div>
    <div class="col-sm-12 col-md-4 text-center">
      <button id="myIconButton">
        <i class="bi bi-question-circle"></i>
      </button>
      <br>
      <label id="myLabel" for="treatment">Tratamientos</label>
      <span>: {{ treatment }}</span>
      <br>
      <input
        class="my-input"
        v-model="getFiltracionValues[2]"
        type="text"
        id="input3"
        @keypress = "validateKeyPress"
      />
      <br>
      <span id="myAlert"  v-if="getFiltracionValues[2] > 24">No exceder valor de 24</span>
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
      <div>
        <p>Filtracion Values: {{ getFiltracionValues }}</p>
        <p>Input is Valid: {{ getInputIsValid }}</p>
      </div>
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
#myLabel {
  font-size: 1rem;
  font-weight: bold;
  color: #4f98ca;
}
#myAlert{
  color: #50d890; 
  font-size: 0.85rem;
  font-weight: bold;
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
</style>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "FiltracionForm",
  data() {
    return {
      microplastic: null,
      residue: null,
      treatment: null,
      inputIsValid: [false, false, false],
      filtracionFormValues: []
    };
  },
  computed: {
  ...mapGetters(['getFiltracionValues', 'getInputIsValid']),
  },
  methods: {
  ...mapActions(['handleSendButtonClick']),
    handleSendButton() {
      this.handleSendButtonClick();
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
    handleSendButton() {
      this.$store.dispatch('handleSendButtonClick');
    },
  },
}
</script>
