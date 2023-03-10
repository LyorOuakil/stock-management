import { createAsyncThunk } from "@reduxjs/toolkit";
import { Dependencies } from "../../../app/dependencies";

export const getRecipesAsync = createAsyncThunk(
  "recipes/getRecipes",
  async (_, { extra }) => {
    const { recipeGateway } = extra as Dependencies; // Need to fix this type
    const response = await recipeGateway.getRecipes();
    return response.recipes;
  }
);
