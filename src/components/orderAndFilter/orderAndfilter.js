import { sortByName, sortByScore, sortByDiet } from "../../reducers/recipes/recipesSlice";

export let handleAlphabeticalSort = (e, dispatch) => {
    dispatch(sortByName(e.target.value))
};
export let handleScoreSort = (e, dispatch) => {
    dispatch(sortByScore(e.target.value))
   
};
export let handleDietTypeFilter = (e, dispatch) => {
    dispatch(sortByDiet(e.target.value))
};
