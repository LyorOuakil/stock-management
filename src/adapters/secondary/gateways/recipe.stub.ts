import { RecipeGateway } from "../../../features/recipes/gateways/recipeGateway";
import { Recipe } from "../../../features/recipes/getRecipes/recipes.slice";

export class RecipeGatewayStub implements RecipeGateway {
  private recipes: { recipes: Recipe[] } = { recipes: [] };

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

  set setRecipes(recipes: Recipe[]) {
    this.recipes = { recipes };
  }
}
