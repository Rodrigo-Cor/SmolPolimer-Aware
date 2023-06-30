import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  modules: {
    references: {
      state: {
        references: [],
      },
      getters: {
        getReferences: (state) => state.references,
      },
      mutations: {
        setReferences(state, references) {
          state.references = references;
        },
      },
      actions: {
        async fetchReferences(
          { commit },
          searchTerm,
          typeRequest,
          articlesNum
        ) {
          const data = {
            searchTerm: searchTerm,
            typeRequest: typeRequest,
            articlesNum: articlesNum,
          };
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          try {
            const response = await axios.post(
              "http://localhost:7071/api/GetIDArticles",
              data,
              config
            );
            console.log(response.data);
          } catch (error) {
            console.log(error);
          }
        },
      },
    },
  },
});
