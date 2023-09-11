import { createStore } from "vuex";
import axios from "axios";
import Swal from "sweetalert2";

export default createStore({
  modules: {
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
  },
});
