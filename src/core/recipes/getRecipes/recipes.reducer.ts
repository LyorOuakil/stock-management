import { createReducer } from "@reduxjs/toolkit";
import { AppState } from "../../appState";
import {
  getRecipesActionFailed,
  getRecipesActionSuccess,
} from "./getRecipes.action";

export const recipesReducer = createReducer<AppState["recipes"]>(
  { recipes: [] },
  (builder) => {
    builder.addCase(getRecipesActionSuccess, (state, action) => {
      if (action.payload) {
        return { recipes: action.payload.recipes, status: "success" };
      }
      return state;
    });

    builder.addCase(getRecipesActionFailed, (state, action) => {
      return { recipes: state.recipes, status: "failed" };
    });
  }
);
