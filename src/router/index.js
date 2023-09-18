import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

import HomeView from "@/views/HomeView.vue";
import Bacillus from "@/views/BacillusView.vue";
import FiltracionGranular from "@/views/FiltracionView.vue";
import Efectos from "@/views/EffectsView.vue";
import Graficas from "@/views/GraficasView.vue";

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
      {
        path: "/graficas",
        name: "Graficas",
        component: Graficas,
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  //console.log("Abandonando la ruta: " + from.path);
  //console.log("Entrando a la ruta: " + to.path);

  if (from.path === "/home") {
    store.commit("setIsDisabled", true);
  }
  next();
});

export default router;
