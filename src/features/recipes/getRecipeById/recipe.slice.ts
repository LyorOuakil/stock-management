import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Dependencies } from "../../../app/dependencies";
import { Recipe } from "../getRecipes/recipes.slice";

export interface RecipeState {
  recipe: Recipe | null;
  status?: "loading" | "failed" | "success";
}

const initialState: RecipeState = {
  recipe: null,
};

export const getRecipeByIdAsync = createAsyncThunk(
  "recipes/getRecipeById",
  async (id: string, { extra }) => {
    const { recipeGateway } = extra as Dependencies; // Need to fix this type
    const response = await recipeGateway.getRecipeById(id);
    return response;
  }
);

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecipeByIdAsync.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getRecipeByIdAsync.rejected, (state) => {
      state.status = "failed";
    });
    builder.addCase(getRecipeByIdAsync.fulfilled, (state, action) => {
      state.status = "success";
      state.recipe = action.payload;
    });
  },
});

export default recipeSlice.reducer;
