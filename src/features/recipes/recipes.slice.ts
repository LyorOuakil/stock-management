import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Dependencies } from "../../app/dependencies";

export interface Recipe {
  id: string;
  name: string;
}

export interface RecipeState {
  recipes: Recipe[];
  status?: "loading" | "failed" | "success";
}

const initialState: RecipeState = {
  recipes: [],
};

export const getRecipesAsync = createAsyncThunk(
  "recipes/fetchRecipes",
  async (_, { extra }) => {
    const { recipeGateway } = extra as Dependencies; // Need to fix this type
    const response = await recipeGateway.getRecipes();
    return response.recipes;
  }
);

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    getRecip: () => {
      console.log("yo");
    },
  },
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

export const { getRecip } = recipeSlice.actions;

export default recipeSlice.reducer;
