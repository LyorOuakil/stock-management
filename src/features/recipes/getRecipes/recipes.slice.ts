import { createSlice } from "@reduxjs/toolkit";
import { getRecipesAsync } from "./getRecipes.action";

export interface Recipe {
  id: string;
  name: string;
}

export interface RecipesState {
  recipes: Recipe[];
  status?: "loading" | "failed" | "success";
}

const initialState: RecipesState = {
  recipes: [],
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecipesAsync.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getRecipesAsync.rejected, (state) => {
      state.status = "failed";
    });
    builder.addCase(getRecipesAsync.fulfilled, (state, action) => {
      state.status = "success";
      state.recipes = action.payload;
    });
  },
});

export default recipesSlice.reducer;
