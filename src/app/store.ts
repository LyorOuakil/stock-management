import {
  configureStore,
  ThunkAction,
  Action,
  Store,
  ThunkDispatch,
  AnyAction,
} from "@reduxjs/toolkit";
import { AppState } from "../features/appState";
import { recipesReducer } from "../features/recipes/getRecipes/recipes.reducer";
import { recipeReducer } from "../features/recipes/recipeById/recipe.reducer";

import { Dependencies } from "./dependencies";

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

export const store = initStore({});

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  Dependencies,
  AnyAction
>;

export type AppStore = Store<AppState> & {
  dispatch: ThunkDispatch<AppState, Dependencies, Action>;
};
