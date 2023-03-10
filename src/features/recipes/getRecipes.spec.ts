import { RecipeGatewayStub } from "../../adapters/secondary/gateways/recipe.stub";
import { AppStore, initStore, RootState } from "../../app/store";
import { getRecipesAsync } from "./recipes.slice";

describe("Get all recipes", () => {
  let store: AppStore;
  let initialState: RootState;

  beforeEach(() => {
    store = initStore({
      recipeGateway: new RecipeGatewayStub(),
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
    await store.dispatch(getRecipesAsync());

    expect(store.getState()).toEqual({
      ...initialState,
      recipes: {
        recipes: [
          {
            id: "123",
            name: "my first recipe",
          },
        ],
        status: "success",
      },
    });
  });
});
