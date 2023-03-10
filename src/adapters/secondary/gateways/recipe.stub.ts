import { RecipeGateway } from "../../../features/recipes/gateways/recipeGateway";

export class RecipeGatewayStub implements RecipeGateway {
  async getRecipes() {
    return {
      recipes: [
        {
          id: "123",
          name: "my first recipe",
        },
      ],
    };
  }
}
