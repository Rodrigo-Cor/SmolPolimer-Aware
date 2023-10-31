import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

import AppLayout from "@/views/AppLayout.vue";
import HomeView from "@/views/HomeView.vue";
import Bacillus from "@/views/BacillusView.vue";
import FiltracionGranular from "@/views/FiltracionView.vue";
import PresenceMexico from "@/views/PresenceMexicoView.vue";
import FightPollution from "@/views/FightPollutionView.vue";
import AnswerQuestionView from "@/views/AnswerQuestionView.vue";

const questionGuard = (to, from, next) => {
  const optionInitial = store.getters.getSelectedOptionInitial.option;
  if (optionInitial !== "") {
    next();
  } else {
    next("/question");
  }
};

const routes = [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "",
        component: HomeView,
      },
      {
        path: "/filtracion",
        name: "Filtracion",
        component: FiltracionGranular,
        beforeEnter: questionGuard,
      },
      {
        path: "/bacillus",
        name: "Bacillus",
        component: Bacillus,
        beforeEnter: questionGuard,
      },
      {
        path: "/presencia",
        name: "Presencia",
        component: PresenceMexico,
        beforeEnter: questionGuard,
      },
      {
        path: "/contaminacion",
        name: "Contaminacion",
        component: FightPollution,
        beforeEnter: questionGuard,
      },
      {
        path: "/question",
        name: "Question",
        component: AnswerQuestionView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  store.commit("setShowReferences", false)
  const optionInitial = store.getters.getSelectedOptionInitial.option;
  if (optionInitial !== "") {
    store.commit("setIsDisabledInitial", true);
  }
  if (from.path === "/filtracion" && to.path !== "/filtracion") {
    store.commit('setMicroplastics', "");
    store.commit('setResidues', "");
    store.commit('setTimeUnits', "");
    store.commit("setOnFilterValues", []);
    store.commit("setReleasedValues", []);
  }
  if (from.path === "/bacillus" && to.path !== "/bacillus") {
    store.commit('setMicroplastics', "");
    store.commit('setTimeUnits', "");
    store.commit('setGrowthMedium', "");
    store.commit('setStrain', "");
    store.commit('setPercentage', "");
    store.commit("setDegradatedValues", []);
  }

  if (from.path === "/filtracion" || from.path === "/bacillus") {
    const disabledFinal = store.getters.getIsDisabledFinal;
    if (disabledFinal) {
      store.commit("setIsAnswered", true);
    }
  }
  next();
});

export default router;
