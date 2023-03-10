import { RecipeGatewayStub } from "../../../adapters/secondary/gateways/recipe.stub";
import { AppStore, initStore, RootState } from "../../../app/store";
import { getRecipeByIdAsync } from "./recipe.slice";

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

describe("Get recipe by id", () => {
  let store: AppStore;
  let recipeGateway: RecipeGatewayStub;
  let initialState: RootState;

  beforeEach(() => {
    recipeGateway = new RecipeGatewayStub();
    store = initStore({ recipeGateway });
    recipeGateway.setRecipes = mockRecipes;
    initialState = store.getState();
  });

  it("Should get one recipe", async () => {
    const recipeId = mockRecipes[0].id;
    await store.dispatch(getRecipeByIdAsync(recipeId));

    expect(store.getState()).toEqual({
      ...initialState,
      recipe: {
        recipe: {
          id: "123",
          name: "my first recipe",
        },
        status: "success",
      },
    });

    await store.dispatch(getRecipeByIdAsync(mockRecipes[1].id));

    expect(store.getState()).toEqual({
      ...initialState,
      recipe: {
        recipe: {
          id: "321",
          name: "my second recipe",
        },
        status: "success",
      },
    });
  });

  it("Should get the other recipe", async () => {
    const recipeId = mockRecipes[1].id;
    await store.dispatch(getRecipeByIdAsync(recipeId));

    expect(store.getState()).toEqual({
      ...initialState,
      recipe: {
        recipe: {
          id: "321",
          name: "my second recipe",
        },
        status: "success",
      },
    });
  });

  it("Should get the failed status on error", async () => {
    await store.dispatch(getRecipeByIdAsync("random"));

    expect(store.getState()).toEqual({
      ...initialState,
      recipe: {
        recipe: null,
        status: "failed",
      },
    });
  });
});
