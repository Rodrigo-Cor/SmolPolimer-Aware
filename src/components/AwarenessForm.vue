<template>
  <article class="row" v-if="typeQuestion === 'start'">
    <section class="col-md-9 col-12">
      <HelpParagraph :text="questions[numberQuestion].help" />
    </section>
    <section class="col-md-3 col-12 d-flex justify-content-center">
      <img src="@/assets/meme-gato.jpg" class="img-fluid" alt="Meme gato" />
    </section>
  </article>

  <article v-if="!isAnswered">
    <section class="fw-bold text-justify-custom">
      Contesta la siguiente pregunta con la mayor sinceridad posible, por favor.
    </section>
    <div class="my-2">
      <span class="py-3">{{ questions[numberQuestion].question }}</span>
    </div>
    <form @submit.prevent>
      <div class="col-md-6 col-12">
        <select
          class="form-select"
          v-model="localSelectedOption"
          :disabled="typeQuestion === 'start' ? disabledInitial : disabledFinal"
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
  </article>
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
    };
  },
  computed: {
    ...mapGetters({
      id: "getUserId",
      numberQuestion: "getNumberQuestion",
      selectedOptionInitial: "getSelectedOptionInitial",
      selectedOptionFinal: "getSelectedOptionFinal",
      disabledInitial: "getIsDisabledInitial",
      disabledFinal: "getIsDisabledFinal",
      isAnswered: "getIsAnswered",
    }),
  },
  methods: {
    ...mapActions({
      modifySelectedOptionInitial: "modifySelectedOptionInitial",
      modifySelectedOptionFinal: "modifySelectedOptionFinal",
      modifyisDisabledFinal: "modifyisDisabledFinal",
    }),
    async saveResults() {
      try {
        this.stateRequestResult = true;
        await axios.post(
          "https://microplasticosapi.azurewebsites.net/api/SaveAnswers?code=rWbKwmRL0OtnOod3m5Cwr-h96SRzArY1558UmEdZBn9jAzFujOTK4g==",
          {
            id: this.id,
            initialAnswer: this.selectedOptionInitial,
            finalAnswer: this.selectedOptionFinal,
            numberQuestion: this.numberQuestion,
          }
        );
        this.modifyisDisabledFinal(true);
      } catch (error) {
        this.modifyisDisabledFinal(false);
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
