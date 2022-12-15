import { configureStore } from '@reduxjs/toolkit'
import recipesSlice from '../reducers/recipes/recipesSlice'

export const store = configureStore({
  reducer: {
    recipe: recipesSlice

  },
})