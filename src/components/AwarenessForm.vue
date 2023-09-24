<template>
  <div class="container-fluid">
    <div class="my-4">
      <span class="py-3 me-3">{{ questions[numberQuestion].question }}</span>
      <Popper
        :content="questions[numberQuestion].recomendation"
        placement="right"
      >
        <span
          @mouseover="changeButton(true)"
          @mouseleave="changeButton(false)"
          v-bind:class="{
            'bg-warning text-dark bg-opacity-50 p-1': isHovered,
            'bg-white text-dark text-dark p-1': !isHovered,
          }"
        >
          <i
            v-bind:class="{
              'bi bi-lightbulb-fill': isHovered,
              'bi bi-lightbulb': !isHovered,
            }"
          ></i>
        </span>
      </Popper>
    </div>
    <form @submit.prevent>
      <template v-if="questions[numberQuestion].options.length > 2">
        <div class="col-lg-6">
          <select
            class="form-select"
            v-model="localSelectedOption"
            :disabled="typeQuestion === 'start' ? isDisabled : disabledFinal"
            :aria-label="typeQuestion + 'Question'"
          >
            <option value="" disabled>Selecciona una opción</option>
            <template
              v-for="radio in questions[numberQuestion].options"
              :key="radio['value']"
            >
              <option :value="radio['option']">{{ radio["option"] }}</option>
            </template>
          </select>
        </div>
      </template>
      <template v-else>
        <div
          v-for="(radio, index) in questions[numberQuestion].options"
          :key="radio['value']"
        >
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              :id="'option' + typeQuestion + index"
              :value="radio['option']"
              :name="'question' + typeQuestion + index"
              v-model="localSelectedOption"
              :disabled="typeQuestion === 'start' ? isDisabled : disabledFinal"
            />
            <label
              class="form-check-label"
              :for="'option' + typeQuestion + index"
            >
              {{ radio["option"] }}
            </label>
          </div>
        </div>
      </template>
      <button
        v-if="typeQuestion === 'final'"
        type="submit"
        class="btn btn-info my-3"
        @click="saveResults"
        :disabled="disabledFinal"
      >
        {{
          stateRequestResult
            ? "Guardando..."
            : disabledFinal
            ? "Gracias por tu respuesta"
            : "Guardar resultados"
        }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
import Popper from "vue3-popper";

export default {
  name: "AwarenessForm",
  components: {
    Popper,
  },
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
      isHovered: false,
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
        await axios.post("http://localhost:7071/api/SaveAnswers", {
          id: this.id,
          initialAnswer: this.selectedOptionInitial,
          finalAnswer: this.selectedOptionFinal,
          numberQuestion: this.numberQuestion,
        });
        this.disabledFinal = true;
      } catch (error) {
        console.log(error);
        this.disabledFinal = false;
      } finally {
        this.stateRequestResult = false;
      }
    },
    searchValue(value) {
      const foundOption = this.questions[this.numberQuestion].options.find(
        (option) => option.option === value
      );
      return { option: foundOption["option"], value: foundOption["value"] };
    },
    changeButton(value) {
      this.isHovered = value;
    },
    handleButtonClick(event) {
      const valorPersonalizado = event.target.dataset.value;
      console.log("Valor personalizado:", valorPersonalizado);
    },
  },
  watch: {
    localSelectedOption(newOption) {
      this.typeQuestion === "start"
        ? this.modifySelectedOptionInitial(this.searchValue(newOption))
        : this.modifySelectedOptionFinal(this.searchValue(newOption));
    },
  },
  created() {
    this.typeQuestion === "start"
      ? (this.localSelectedOption = this.selectedOptionInitial["option"])
      : (this.localSelectedOption = this.selectedOptionFinal["option"]);
  },
};
</script>
