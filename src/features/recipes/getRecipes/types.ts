export interface Recipe {
  id: string;
  name: string;
}
export interface RecipesState {
  recipes: Recipe[];
  status?: "loading" | "failed" | "success";
}
