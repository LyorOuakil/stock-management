import {
  configureStore,
  ThunkAction,
  Action,
  Store,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import recipesReducer from "../features/recipes/getRecipes/recipes.slice";
import recipeReducer from "../features/recipes/getRecipeById/recipe.slice";

import { Dependencies } from "./dependencies";

export const initStore = (dependencies: Partial<Dependencies>) => {
  return configureStore({
    devTools: true,
    reducer: {
      counter: counterReducer,
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

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppStore = Store<RootState> & {
  dispatch: ThunkDispatch<RootState, unknown, Action>;
};
