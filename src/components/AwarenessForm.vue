<template>
  <div>
    <HelpParagraph
      :text="questions[numberQuestion].help"
      v-if="typeQuestion === 'start'"
    />
    <div class="my-2">
      <span class="py-3">{{ questions[numberQuestion].question }}</span>
    </div>
    <form @submit.prevent>
      <div class="col-md-6 col-12">
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
import HelpParagraph from "./HelpParagraph.vue";

export default {
  name: "AwarenessForm",
  components: {
    HelpParagraph,
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
