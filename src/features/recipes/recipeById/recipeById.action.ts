import { createAction } from "@reduxjs/toolkit";
import { AppState } from "../../../app/store";

export const getRecipeActionSuccess = createAction<{
  recipe: AppState["recipe"];
}>("GET_RECIPE_SUCCESS");

export const getRecipeActionFailed = createAction("GET_RECIPE_FAILED");

export const deleteRecipeByIdSuccess = createAction("DELETE_RECIPE_SUCCESS");
