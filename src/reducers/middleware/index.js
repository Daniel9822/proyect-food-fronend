//llamados asyncronos

import axios from "axios";
import {
    getRecipes,
    setError,
    setIsLoding,
    getDetails,
    getDiets,
    searchByName,
} from "../recipes/recipesSlice";

export const fetchRecipes = () => {
    return async (dispatch) => {
        try {
            dispatch(setIsLoding(true));
            const response = await axios.get("https://proyect-food-backend-production.up.railway.app/");
            dispatch(getRecipes(response.data));
            dispatch(setIsLoding(false));
        } catch (error) {
            dispatch(setIsLoding(false));
            dispatch(setError(error.response.data.message));
        }
    };
};

export const getRecipeDetails = (id) => {
    return async (dispatch) => {
        try {
            dispatch(setIsLoding(true));
            const response = await axios.get(
                `https://proyect-food-backend-production.up.railway.app/recipes/${id}`
            );
            dispatch(getDetails(response.data));
            dispatch(setIsLoding(false));
        } catch (error) {
            console.log(error);
        }
    };
};

export const createRecipe = (recipeInfo) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(
                "https://proyect-food-backend-production.up.railway.app/recipes",
                recipeInfo
            );
            return response

        } catch (error) {
            console.log(error)
        }
    };
};

export const changeDiets = () => {
    return async (dispatch) => {
        const result = await axios.get("https://proyect-food-backend-production.up.railway.app/diets")
        dispatch(getDiets(result.data))
    }
}

export const getByName = (data) => {
    return async (dispatch) => {
        const result = await axios.get(`https://proyect-food-backend-production.up.railway.app/recipes?name=${data}`)
        dispatch(searchByName(result.data))
        
    }
}