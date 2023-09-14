<template>
  <div class="container-fluid">
    <p>Id Hijo: {{ id }}</p>
    <p>Número de pregunta asignada Hijo: {{ numberQuestion }}</p>
    <p>Opcion seleccionada Hijo: {{ localSelectedOption }}</p>

    <p>{{ questions[numberQuestion].question }}</p>
    <form @submit.prevent>
      <template v-if="questions[numberQuestion].options.length > 2">
        <select
          class="form-select"
          v-model="localSelectedOption"
          :disabled="typeQuestion === 'start' ? isDisabled : disabledFinal"
          :aria-label="typeQuestion + 'Question'"
          required
        >
          <option value="" disabled>Selecciona una opción</option>
          <template v-for="radio in questions[numberQuestion].options">
            <option :value="radio">{{ radio }}</option>
          </template>
        </select>
      </template>
      <template v-else>
        <div v-for="(radio, index) in questions[numberQuestion].options">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              :id="'option' + typeQuestion + index"
              :value="radio"
              :name="'question' + typeQuestion + index"
              v-model="localSelectedOption"
              :disabled="typeQuestion === 'start' ? isDisabled : disabledFinal"
              required
            />
            <label
              class="form-check-label"
              :for="'option' + typeQuestion + index"
            >
              {{ radio }}
            </label>
          </div>
        </div>
      </template>
      <button
        v-if="typeQuestion === 'final'"
        type="submit"
        class="btn btn-info my-3"
        @click="saveResults"
      >
        {{ stateRequestResult ? "Guardando..." : "Guardar resultados" }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "AwarenessForm",
  props: {
    questions: {
      type: Array,
    },
    typeQuestion: {
      type: String,
    },
  },
  data() {
    return {
      localSelectedOption: "",
      stateRequestResult: false,
      disabledFinal: false,
    };
  },
  computed: {
    ...mapGetters({
      id: "getUserId",
      numberQuestion: "getNumberQuestion",
      selectedOptionInitial: "getSelectedOptionInitial",
      selectedOptionFinal: "getSelectedOptionFinal",
      isDisabled: "getIsDisabled",
    }),
  },
  methods: {
    ...mapActions({
      modifySelectedOptionInitial: "modifySelectedOptionInitial",
      modifySelectedOptionFinal: "modifySelectedOptionFinal",
    }),
    async saveResults() {
      try {
        this.stateRequestResult = true;
        this.disabledFinal = true;
        const response = await axios.post(
          "http://localhost:7071/api/SaveAnswers",
          {
            id: this.id,
            initialAnswer: this.selectedOptionInitial,
            finalAnswer: this.selectedOptionFinal,
            numberQuestion: this.numberQuestion,
          }
        );
        console.log(await response.data);
      } catch (error) {
        this.disabledFinal = false;
        console.log(error.response);
      } finally {
        this.stateRequestResult = false;
      }
    },
  },
  watch: {
    localSelectedOption(newOption) {
      if (this.typeQuestion === "start") {
        this.modifySelectedOptionInitial(newOption);
      } else if (this.typeQuestion === "final") {
        this.modifySelectedOptionFinal(newOption);
      }
    },
  },
  created() {
    if (this.typeQuestion === "start") {
      this.localSelectedOption = this.selectedOptionInitial;
    } else if (this.typeQuestion === "final") {
      this.localSelectedOption = this.selectedOptionFinal;
    }
  },
};
</script>
