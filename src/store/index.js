import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  modules: {
    references: {
      state: {
        referencesData: [],
      },
      getters: {
        getReferences: (state) => state.referencesData,
      },
      mutations: {
        setReferences(state, references) {
          state.referencesData = references;
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
            const response = await axios.post(
              "https://microplasticosapi.azurewebsites.net/api/GetIDArticles?code=TF6d-H1Lk5DlgNk-hn7sEthaqCD-rN4m6LR_w9Ca-Q3eAzFudmQ1kA==",
              data,
              config
            );
            const referencesData = response.data;
            commit("setReferences", referencesData);
          } catch (error) {
            console.log(error);
          }
        },
      },
    },
  },
});
