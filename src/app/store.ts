import {
  configureStore,
  ThunkAction,
  Action,
  Store,
  ThunkDispatch,
  AnyAction,
} from "@reduxjs/toolkit";
import { AppState } from "../core/appState";
import { recipesReducer } from "../core/recipes/getRecipes/recipes.reducer";
import { recipeReducer } from "../core/recipes/recipeById/recipe.reducer";

import { Dependencies, getDependencies } from "./dependencies";

export const initStore = (dependencies: Partial<Dependencies>) => {
  return configureStore({
    devTools: true,
    reducer: {
      recipes: recipesReducer,
      recipe: recipeReducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: dependencies,
        },
      });
    },
  });
};

const dependencies = getDependencies();
export const store = initStore(dependencies);

export type AppDispatch = ThunkDispatch<AppState, Dependencies, Action>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  Dependencies,
  AnyAction
>;

export type AppStore = Store<AppState> & {
  dispatch: ThunkDispatch<AppState, Dependencies, Action>;
};
