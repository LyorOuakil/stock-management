import { RecipeGatewayStub } from "../../../adapters/secondary/gateways/recipe.stub";
import { AppStore, initStore } from "../../../app/store";
import { getRecipes } from "../getRecipes/recipes";
import { deleteRecipeById } from "./recipe";

const mockRecipes = [
  {
    id: "123",
    name: "my first recipe",
  },
  {
    id: "321",
    name: "my second recipe",
  },
];

describe("Delete recipe by id", () => {
  let store: AppStore;
  let recipeGateway: RecipeGatewayStub;

  beforeEach(() => {
    recipeGateway = new RecipeGatewayStub();
    store = initStore({ recipeGateway });
    recipeGateway.setRecipes = mockRecipes;
  });

  it("Should delete a recipe", async () => {
    const recipeId = mockRecipes[0].id;

    await store.dispatch(getRecipes);

    await store.dispatch(deleteRecipeById(recipeId));

    await store.dispatch(getRecipes);

    expect(store.getState().recipes.recipes).toHaveLength(1);
  });
});
