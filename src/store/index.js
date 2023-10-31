import { createStore } from "vuex";
import axios from "axios";
import Swal from "sweetalert2";

export default createStore({
  modules: {
    users: {
      state: {
        initialData: {
          idUser: "",
          numberQuestion: -1,
        },
        selectedOption: {
          initial: { option: "", value: -1 },
          final: { option: "", value: -1 },
        },
        isDisabled: {
          initial: false,
          final: false,
        },
        isAnswered: false,
      },
      getters: {
        getUserId: (state) => state.initialData.idUser,
        getNumberQuestion: (state) => state.initialData.numberQuestion,
        getSelectedOptionInitial: (state) => state.selectedOption.initial,
        getSelectedOptionFinal: (state) => state.selectedOption.final,
        getIsDisabledInitial: (state) => state.isDisabled.initial,
        getIsDisabledFinal: (state) => state.isDisabled.final,
        getIsAnswered: (state) => state.isAnswered,
      },
      mutations: {
        setInitialData(state, { idUser, numberQuestion }) {
          state.initialData.idUser = idUser;
          state.initialData.numberQuestion = numberQuestion;
          localStorage.setItem("idUser", idUser);
          localStorage.setItem("numberQuestion", numberQuestion);
        },
        setSelectedOptionInitial(state, selectedOptionInitial) {
          state.selectedOption.initial = selectedOptionInitial;
          localStorage.setItem(
            "selectedOptionInitialOption",
            selectedOptionInitial["option"]
          );
          localStorage.setItem(
            "selectedOptionInitialValue",
            selectedOptionInitial["value"]
          );
        },
        setSelectedOptionFinal(state, selectedOptionFinal) {
          state.selectedOption.final = selectedOptionFinal;
        },
        setIsDisabledInitial(state, isDisabled) {
          state.isDisabled.initial = isDisabled;
        },
        setIsDisabledFinal(state, isDisabled) {
          state.isDisabled.final = isDisabled;
        },
        setIsAnswered(state, isAnswered) {
          state.isAnswered = isAnswered;
        },
      },
      actions: {
        modifyData({ commit }, { idUser, numberQuestion }) {
          commit("setInitialData", {
            idUser: idUser,
            numberQuestion: numberQuestion,
          });
        },
        modifySelectedOptionInitial({ commit }, selectedOptionInitial) {
          commit("setSelectedOptionInitial", selectedOptionInitial);
        },
        modifySelectedOptionFinal({ commit }, selectedOptionFinal) {
          commit("setSelectedOptionFinal", selectedOptionFinal);
        },
        modifyisDisabledInitial({ commit }, isDisabledInitial) {
          commit("setIsDisabledInitial", isDisabledInitial);
        },
        modifyisDisabledFinal({ commit }, isDisabledFinal) {
          commit("setIsDisabledFinal", isDisabledFinal);
        },
      },
    },
    references: {
      state: {
        referencesData: [],
        stateRequest: false,
        showReferences: false,
      },
      getters: {
        getReferences: (state) => state.referencesData,
        getStateRequest: (state) => state.stateRequest,
        getShowReferences: (state) => state.showReferences,
      },
      mutations: {
        setReferences(state, references) {
          state.referencesData = references;
        },
        setStateRequest(state, stateRequest) {
          state.stateRequest = stateRequest;
        },
        setShowReferences(state, showReferences) {
          state.showReferences = showReferences;
        },
      },
      actions: {
        async fetchReferences({ commit }, data) {
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          try {
            commit("setStateRequest", true);
            const response = await axios.post(
              "https://microplasticosapi.azurewebsites.net/api/GetIDArticles?code=hFKWcuHcqPZqLBzA2gfhYBOg9gk42UPX2rdy29a8ZxPdAzFu2jSusg==",
              data,
              config
            );
            const references = response.data.filter(
              (element) => !element.title.startsWith("{")
            );
            commit("setReferences", references);
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "¡Error!",
              text: "Ocurrió un problema con la obtención de las referencias. Vuelve a intentarlo.",
              allowOutsideClick: false,
            });
            commit("setReferences", []);
          } finally {
            commit("setStateRequest", false);
          }
        },
      },
    },
    formValues: {
      state: {
        microplastics: "",
        timeUnits: "",
        growthMedium: "",
        strain: "",
        percentage: "",
        residues: "",
      },
      getters: {
        getMicroplastics: (state) => state.microplastics,
        getTimeUnits: (state) => state.timeUnits,
        getGrowthMedium: (state) => state.growthMedium,
        getStrain: (state) => state.strain,
        getPercentage: (state) => state.percentage,
        getResidues: (state) => state.residues,
      },
      mutations: {
        setMicroplastics(state, microplastics) {
          state.microplastics = microplastics;
        },
        setTimeUnits(state, timeUnits) {
          state.timeUnits = timeUnits;
        },
        setGrowthMedium(state, growthMedium) {
          state.growthMedium = growthMedium;
        },
        setStrain(state, strain) {
          state.strain = strain;
        },
        setPercentage(state, percentage) {
          state.percentage = percentage;
        },
        setResidues(state, residues) {
          state.residues = residues;
        },
      },
    },
    simulationResults: {
      state: {
        onFilterValues: [],
        releasedValues: [],
        degradatedValues: [],
      },
      getters: {
        getOnFilterValues: (state) => state.onFilterValues,
        getReleasedValues: (state) => state.releasedValues,
        getDegradatedValues: (state) => state.degradatedValues,
      },
      mutations: {
        setOnFilterValues(state, values) {
          state.onFilterValues = values;
        },
        setReleasedValues(state, values) {
          state.releasedValues = values;
        },
        setDegradatedValues(state, values) {
          state.degradatedValues = values;
        },
      },
    },
  },
});
