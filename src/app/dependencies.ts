import { RecipeGatewayStub } from "../adapters/secondary/gateways/recipe.stub";
import { RecipeGateway } from "../features/recipes/gateways/recipeGateway";

export interface Dependencies {
  recipeGateway: RecipeGateway;
}

export const dependencies = {
  recipeGateway: RecipeGatewayStub,
};
