import { RecipeGateway } from "../../../core/recipes/gateways/recipeGateway";
import { Recipe } from "../../../core/recipes/getRecipes/types";

export class InMemoryRecipeGateway implements RecipeGateway {
  constructor(private recipes: { recipes: Recipe[] }) {}

  async getRecipes() {
    return this.recipes;
  }

  async getRecipeById(id: string) {
    try {
      const recipe = this.recipes.recipes.find((p) => p.id === id);
      if (!recipe) {
        throw new Error("Recipe not found");
      }
      return recipe;
    } catch (err) {
      throw err;
    }
  }

  async deleteRecipeById(id: string) {
    this.recipes.recipes = this.recipes.recipes.filter((r) => r.id !== id);
  }
}
