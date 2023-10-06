export function setSearchedMeals(state, meals) {
  state.searchedMeals = meals;
}

export function setMealsByLetter(state, meals) {
  console.log("❄️ ~ file: mutations.js:6 ~ meals:", meals);
  state.mealsByLetter = meals;
}

export function setMealsByIngredient(state, meals) {
  state.mealsByIngredient = meals;
}
