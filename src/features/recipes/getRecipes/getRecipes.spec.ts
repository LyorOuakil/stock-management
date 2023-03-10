import { RecipeGatewayStub } from "../../../adapters/secondary/gateways/recipe.stub";
import { AppStore, initStore, AppState } from "../../../app/store";
import { getRecipes } from "./recipes";

describe("Get all recipes", () => {
  let store: AppStore;
  let initialState: AppState;
  let recipeGateway: RecipeGatewayStub;

  beforeEach(() => {
    recipeGateway = new RecipeGatewayStub();
    store = initStore({
      recipeGateway,
    });
    initialState = store.getState();
  });

  it("should have an empty array at initial state", () => {
    expect(store.getState()).toEqual({
      ...initialState,
      recipes: {
        recipes: [],
      },
    });
  });

  it("Should get all recipes", async () => {
    const recipes = [
      {
        id: "123",
        name: "my first recipe",
      },
    ];
    recipeGateway.setRecipes = recipes;
    await store.dispatch(getRecipes);

    expect(store.getState()).toEqual({
      ...initialState,
      recipes: {
        recipes: recipes,
        status: "success",
      },
    });
  });

  it("Should get all new recipes", async () => {
    const recipes = [
      {
        id: "123",
        name: "my first recipe",
      },
      {
        id: "321",
        name: "my second recipe",
      },
    ];
    recipeGateway.setRecipes = recipes;
    await store.dispatch(getRecipes);

    expect(store.getState()).toEqual({
      ...initialState,
      recipes: {
        recipes: recipes,
        status: "success",
      },
    });
  });
});
