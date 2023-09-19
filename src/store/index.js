import { createStore } from "vuex";
import axios from "axios";
import Swal from "sweetalert2";
const { v4: uuidv4 } = require("uuid");

export default createStore({
  modules: {
    users: {
      state: {
        initialData: {
          idUser: "",
          numberQuestion: 0,
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
        },
        setSelectedOptionInitial(state, selectedOptionInitial) {
          state.selectedOption.initial = selectedOptionInitial;
        },
        setSelectedOptionFinal(state, selectedOptionFinal) {
          state.selectedOption.final = selectedOptionFinal;
        },
        setIsDisabled(state, isDisabled) {
          state.isDisabled = isDisabled;
        },
      },
      actions: {
        modifyData({ commit }, numberQuestion) {
          commit("setInitialData", {
            idUser: uuidv4(),
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
    filtracionValues: {
      state: {
        filtracionValues: [],
        inputIsValid: [false, false, false],
      },
      getters: {
        getFiltracionValues: state => state.filtracionValues,
        getInputIsValid: state => state.inputIsValid,
      },
      mutations: {
        setFiltracionValues(state, values) {
          state.filtracionValues = values;
        },
        setInputIsValid(state, isValid) {
          state.inputIsValid = isValid;
        },
      },
      actions: {
        handleSendButtonClick({ commit, state }) {
          const [microplastic, residue, treatment] = state.filtracionValues;
          const isValid = [
            microplastic >= 1 && microplastic <= 70,
            residue >= 1 && residue <= 20,
            treatment >= 1 && treatment <= 24,
          ];
          commit('setInputIsValid', isValid);
          if (isValid.every(element => element)) {
            commit('setFiltracionValues', [microplastic, residue, treatment]);
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
      },
    },
  },
});
