import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";

const idUser = localStorage.getItem("idUser");
const numberQuestion = localStorage.getItem("numberQuestion");
const selectedOptionInitialOption = localStorage.getItem(
  "selectedOptionInitialOption"
);
const selectedOptionInitialValue = localStorage.getItem(
  "selectedOptionInitialValue"
);

const selectedOptionFinalOption = localStorage.getItem(
  "selectedOptionFinalOption"
);
const selectedOptionFinalValue = localStorage.getItem(
  "selectedOptionFinalValue"
);

const isAnswered = localStorage.getItem("isAnswered");

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

if (selectedOptionFinalOption !== null && selectedOptionFinalValue != -1) {
  store.commit("setSelectedOptionFinal", {
    option: selectedOptionFinalOption,
    value: selectedOptionFinalValue,
  });
}

if (isAnswered != null) {
  store.commit("setIsAnswered", isAnswered);
}

createApp(App).use(store).use(router).mount("#app");
