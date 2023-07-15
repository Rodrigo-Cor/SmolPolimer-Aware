import { createRouter, createWebHistory } from "vue-router";
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

export default router;
