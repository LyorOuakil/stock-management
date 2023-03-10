import { Recipe } from "../getRecipes/recipes.slice";

export interface RecipeGateway {
  getRecipes: () => Promise<{ recipes: Recipe[] }>;
  getRecipeById: (id: string) => Promise<Recipe>;
}
