import axiosClient from "../axiosClient";
export const searchMeals = async ({ commit }, keyword) => {
  const url = "/search.php?s=";
  const { data } = await axiosClient.get(url + keyword);
  /* set state */
  commit("setSearchedMeals", data.meals);
};

export const searchMealsByLetter = async ({ commit }, keyword) => {
  console.log("❄️ ~ file: actions.js:10 ~ keyword:", keyword);
  const url = "/search.php?f=";
  const { data } = await axiosClient.get(url + keyword);
  console.log("❄️ ~ file: actions.js:13 ~ data:", data);
  /* set state */
  commit("setMealsByLetter", data.meals);
};

export const searchMealsByIngredient = async ({ commit }, keyword) => {
  const url = "/search.php?i=";
  const { data } = await axiosClient.get(url + keyword);
  /* set state */
  commit("setMealsByIngredient", data.meals);
};
