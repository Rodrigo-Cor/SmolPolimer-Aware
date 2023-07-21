<template>
  <div class="container">
    <div class="row justify-content-center my-2">
      <div
        class="col-12 my-2 text-center"
        v-for="index in values.length"
        :key="'input' + index"
      >
        <label v-if="index !== 0">
          {{ inputLabels[index - 1] }}
          <input
            type="number"
            class="form-control my-input"
            v-model="values[index - 1]"
            input="validateInput(index - 1)"
          />
        </label>
      </div>
      <div class="row justify-content-center my-4">
        <div class="col-12 text-center my-4">
          <button @click="sendValues" class="btn btn-outline-primary btn-lg">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-input {
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 0.0625rem solid #4f98ca;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.my-input:focus {
  border-color: #50d890;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(80, 216, 144, 0.25);
}

.btn-outline-primary {
  color: #4f98ca;
  border-color: #4f98ca;
}
.btn-outline-primary:hover {
  background-color: #4f98ca;
  color: #fff;
}
</style>

<script>
export default {
  data() {
    return {
      values: [null, null, null, null, null, null, null],
      inputLabels: [
        "Cantidad inicial de Microplásticos",
        "Temperatura",
        "Tamaño de Microplásticos",
        "Tiempo",
        "Input 5",
        "Input 6",
        "Input 7",
      ],
    };
  },
  methods: {
    validateInput(index) {
      if (this.values[index] < 0) {
        this.values[index] = 0;
      } else if (this.values[index] > 100) {
        this.values[index] = 100;
      }
    },
    sendValues() {
      // Emite un evento con el arreglo de valores
      this.$emit("values-updated", this.values);
    },
  },
};
</script>
