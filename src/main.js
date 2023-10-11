import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

/*
const idUser = localStorage.getItem("idUser");
const numberQuestion = localStorage.getItem("numberQuestion");
const selectedOptionInitialOption = localStorage.getItem(
  "selectedOptionInitialOption"
);
const selectedOptionInitialValue = localStorage.getItem(
  "selectedOptionInitialValue"
);

if (numberQuestion !== -1 && idUser !== null) {
  store.commit("setInitialData", {
    idUser: idUser,
    numberQuestion: numberQuestion,
  });
}

if (selectedOptionInitialOption !== null && selectedOptionInitialValue != -1) {
  store.commit("setSelectedOptionInitial", {
    option: selectedOptionInitialOption,
    value: selectedOptionInitialValue,
  });
}
*/

createApp(App).use(store).use(router).mount("#app");
