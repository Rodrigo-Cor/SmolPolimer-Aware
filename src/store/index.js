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
        isDisabled: false,
      },
      getters: {
        getUserId: (state) => state.initialData.idUser,
        getNumberQuestion: (state) => state.initialData.numberQuestion,
        getSelectedOptionInitial: (state) => state.selectedOption.initial,
        getSelectedOptionFinal: (state) => state.selectedOption.final,
        getIsDisabled: (state) => state.isDisabled,
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
        setIsDisabled(state, isDisabled) {
          state.isDisabled = isDisabled;
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
      },
    },
    references: {
      state: {
        referencesData: [],
        stateRequest: false,
      },
      getters: {
        getReferences: (state) => state.referencesData,
        getStateRequest: (state) => state.stateRequest,
      },
      mutations: {
        setReferences(state, references) {
          state.referencesData = references;
        },
        setStateRequest(state, stateRequest) {
          state.stateRequest = stateRequest;
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
            console.log(data);
            commit("setStateRequest", true);
            const response = await axios.post(
              "https://microplasticosapi.azurewebsites.net/api/GetIDArticles?code=TF6d-H1Lk5DlgNk-hn7sEthaqCD-rN4m6LR_w9Ca-Q3eAzFudmQ1kA==",
              data,
              config
            );
            commit("setReferences", await response.data);
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "¡Error!",
              text: "Ocurrió un problema con la obtención de las referencias. Vuelve a intentarlo.",
              allowOutsideClick: false,
            });
          } finally {
            commit("setStateRequest", false);
          }
        },
      },
    },
    formValues: {
      state: {
        filtracionValues: [],
        bacillusValues: [],
      },
      getters: {
        getFiltracionValues: (state) => state.filtracionValues,
        getBacillusValues: (state) => state.bacillusValues,
      },
      mutations: {
        setFiltracionValues(state, values) {
          state.filtracionValues = values;
        },
        setBacillusValues(state, values) {
          state.bacillusValues = values;
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
