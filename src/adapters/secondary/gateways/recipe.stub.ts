import { RecipeGateway } from "../../../core/recipes/gateways/recipeGateway";
import { Recipe } from "../../../core/recipes/getRecipes/types";

export class RecipeGatewayStub implements RecipeGateway {
  private recipes: { recipes: Recipe[] } = { recipes: [] };
  private err: boolean = false;

  async getRecipes() {
    if (this.err) {
      throw new Error("Error fetching recipes");
    }
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

  set setErr(err: boolean) {
    this.err = err;
  }

  set setRecipes(recipes: Recipe[]) {
    this.recipes = { recipes };
  }
}
