import { AppThunk } from "../../../app/store";
import {
  getRecipesActionFailed,
  getRecipesActionLoading,
  getRecipesActionSuccess,
} from "./getRecipes.action";

export const getRecipes: AppThunk = async (
  dispatch,
  _getState,
  { recipeGateway }
) => {
  dispatch(getRecipesActionLoading());
  try {
    const recipes = await recipeGateway.getRecipes();
    dispatch(getRecipesActionSuccess(recipes));
  } catch (err) {
    dispatch(getRecipesActionFailed());
  }
};
