import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealList from "../views/MealList.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import MealDetails from "../views/MealDetails.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-letter",
        name: "byLetter",
        component: MealsByLetter,
        children: [
          {
            path: "/by-letter/:letter",
            name: "byLetters",
            component: MealList,
          },
        ],
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      /*       {
        path: "/letter/:letter",
        name: "byLetters",
        component: MealList,
      }, */
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
