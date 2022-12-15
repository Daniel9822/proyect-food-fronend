import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    diets: [],
    recipesCover: [],
    totalRecipes: [],
    isloding: false,
    errorMessage: "",
    recipeDetails: {},
};

export const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        getRecipes: (state, action) => {
            state.totalRecipes = action.payload;
            state.recipesCover = action.payload;
        },
        setIsLoding: (state, action) => {
            state.isloding = action.payload;
        },
        setError: (state, action) => {
            state.errorMessage = action.payload;
        },
        sortByName: (state, action) => {
            state.totalRecipes.sort((a, b) => {
                if (action.payload === "asc") {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                } else {
                    if (a.name > b.name) return -1;
                    if (a.name < b.name) return 1;
                    return 0;
                }
            });
        },
        sortByScore: (state, action) => {
            state.totalRecipes.sort((a, b) => {
                if (action.payload === "asc") {
                    return a.healthScore - b.healthScore;
                } else {
                    return b.healthScore - a.healthScore;
                }
            });
        },
        sortByDiet: (state, action) => {
            state.totalRecipes = state.recipesCover.filter((rec) => {
                return rec.dietTypes.includes(action.payload.toLowerCase());
            });
        },
        getDetails: (state, action) => {
            console.log(state.recipeDetails);
            state.recipeDetails = action.payload;
        },

        getDiets: (state, action) => {
            state.diets = action.payload;
        },
        searchByName: (state, action) => {
            state.totalRecipes = action.payload;
        },
        clean: (state, action) => {
            state.recipeDetails = [];
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    searchByName,
    getDiets,
    getRecipes,
    setIsLoding,
    sortByName,
    sortByScore,
    sortByDiet,
    setError,
    getDetails,
} = recipeSlice.actions;

export default recipeSlice.reducer;
