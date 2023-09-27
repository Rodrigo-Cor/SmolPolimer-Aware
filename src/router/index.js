import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

import HomeView from "@/views/HomeView.vue";
import Bacillus from "@/views/BacillusView.vue";
import FiltracionGranular from "@/views/FiltracionView.vue";
import Efectos from "@/views/EffectsView.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "HomeView",
    component: HomeView,
    children: [
      {
        path: "/efectos",
        name: "Efectos",
        component: Efectos,
      },
      {
        path: "/filtracion",
        name: "Filtracion",
        component: FiltracionGranular,
      },
      {
        path: "/bacillus",
        name: "Bacillus",
        component: Bacillus,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (from.path === "/home" && to.path !== "/home") {
    store.commit("setIsDisabled", true);
  }
  if (from.path === "/filtracion" && to.path !== "/filtracion") {
    store.commit("setFiltracionValues", []);
    store.commit("setOnFilterValues", []);
    store.commit("setReleasedValues", []);
  }
  if(from.path === "/bacillus" && to.path !== "/bacillus") {
    store.commit("setBacillusValues", []);
    store.commit("setDegradatedValues", []);
  }
  next();
});

export default router;
