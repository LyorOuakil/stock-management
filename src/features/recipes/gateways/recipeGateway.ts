import { Recipe } from "../recipes.slice";

export interface RecipeGateway {
  getRecipes: () => Promise<{ recipes: Recipe[] }>;
}
