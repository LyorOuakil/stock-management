import { AppThunk } from "../../../app/store";
import {
  getRecipeActionSuccess,
  getRecipeActionFailed,
  deleteRecipeByIdSuccess,
} from "./recipeById.action";

export const getRecipeById =
  (id: string): AppThunk =>
  async (dispatch, _getState, { recipeGateway }) => {
    try {
      const recipe = await recipeGateway.getRecipeById(id);
      dispatch(getRecipeActionSuccess({ recipe: { data: recipe } }));
    } catch (err) {
      dispatch(getRecipeActionFailed());
    }
  };

export const deleteRecipeById =
  (id: string): AppThunk =>
  async (dispatch, _getState, { recipeGateway }) => {
    try {
      await recipeGateway.deleteRecipeById(id);
      dispatch(deleteRecipeByIdSuccess());
    } catch (err) {
      dispatch(getRecipeActionFailed());
      console.log(err);
    }
  };
