import { createAction } from "@reduxjs/toolkit";
import { RecipesState } from "./types";

export const getRecipesActionSuccess = createAction<{
  recipes: RecipesState["recipes"];
}>("GET_RECIPES_SUCCESS");

export const getRecipesActionLoading = createAction("GET_RECIPES_LOADING");
