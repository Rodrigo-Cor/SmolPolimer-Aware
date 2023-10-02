import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

import HomeView from "@/views/HomeView.vue";
import Bacillus from "@/views/BacillusView.vue";
import FiltracionGranular from "@/views/FiltracionView.vue";
import CleaningTechniques from "@/views/CleaningTechniquesView.vue";
import PresenceMexico from "@/views/PresenceMexicoView.vue";
import FightPollution from "@/views/FightPollutionView.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    children: [
      {
        path: "/tecnicas",
        name: "Tecnicas",
        component: CleaningTechniques,
      },
      {
        path: "/tecnicas/filtracion",
        name: "Filtracion",
        component: FiltracionGranular,
      },
      {
        path: "/tecnicas/bacillus",
        name: "Bacillus",
        component: Bacillus,
      },
      {
        path: "/presencia",
        name: "Presencia",
        component: PresenceMexico,
      },
      {
        path: "/contaminacion",
        name: "Contaminacion",
        component: FightPollution,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (from.path === "/" && to.path !== "/") {
    store.commit("setIsDisabled", true);
  }
  next();
});

export default router;
