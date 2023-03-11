import { InMemoryRecipeGateway } from "../adapters/secondary/gateways/inMemoryRecipe";
import { RecipeGatewayStub } from "../adapters/secondary/gateways/recipe.stub";
import { RecipeGateway } from "../core/recipes/gateways/recipeGateway";
import { recipesPool } from "./fixtures/recipes.fixture";
export interface Dependencies {
  recipeGateway: RecipeGateway;
}

export const testDependencies = {
  recipeGateway: new RecipeGatewayStub(),
};

export const inMemoryDependencies = {
  recipeGateway: new InMemoryRecipeGateway(recipesPool),
};

export const getDependencies = (): Dependencies => {
  if (process.env.NODE_ENV === "test") {
    return testDependencies;
  }
  if (process.env.NODE_ENV === "development") {
    return inMemoryDependencies;
  }
  return testDependencies;
};
