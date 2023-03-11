import { Recipe } from "./recipes/getRecipes/types";

export interface AppState {
  recipes: {
    recipes: Recipe[];
    status?: "loading" | "failed" | "success";
  };
  recipe: {
    data: Recipe | null;
    status?: "loading" | "failed" | "success";
  };
}
