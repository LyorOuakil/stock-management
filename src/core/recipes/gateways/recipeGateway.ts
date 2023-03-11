import { Recipe } from "../getRecipes/types";

export interface RecipeGateway {
  getRecipes: () => Promise<{ recipes: Recipe[] }>;
  getRecipeById: (id: string) => Promise<Recipe>;
  deleteRecipeById: (id: string) => Promise<void>;
}
