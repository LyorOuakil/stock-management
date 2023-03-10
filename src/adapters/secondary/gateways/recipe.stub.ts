import { Recipe } from "../../../app/store";
import { RecipeGateway } from "../../../features/recipes/gateways/recipeGateway";

export class RecipeGatewayStub implements RecipeGateway {
  private recipes: { recipes: Recipe[] } = { recipes: [] };

  async getRecipes() {
    return this.recipes;
  }

  async deleteRecipeById(id: string) {
    this.recipes.recipes = this.recipes.recipes.filter((r) => r.id !== id);
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

  set setRecipes(recipes: Recipe[]) {
    this.recipes = { recipes };
  }
}
