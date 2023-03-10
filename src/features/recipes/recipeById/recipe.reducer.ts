import { createReducer } from "@reduxjs/toolkit";
import { AppState } from "../../../app/store";
import {
  deleteRecipeByIdSuccess,
  getRecipeActionFailed,
  getRecipeActionSuccess,
} from "./recipeById.action";

export const recipeReducer = createReducer<AppState["recipe"]>(
  { data: null },
  (builder) => {
    builder.addCase(getRecipeActionSuccess, (state, action) => {
      if (action.payload) {
        return {
          data: action.payload.recipe.data,
          status: "success",
        };
      }
      return state;
    });
    builder.addCase(getRecipeActionFailed, (state, action) => {
      return {
        data: null,
        status: "failed",
      };
    });

    builder.addCase(deleteRecipeByIdSuccess, (state, action) => {
      return {
        data: state.data,
        status: "success",
      };
    });
  }
);
