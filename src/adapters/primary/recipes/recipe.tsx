import { Recipe as IRecipe } from "../../../core/recipes/getRecipes/types"

interface RecipeProps {
    recipe: IRecipe
    onDelete: (id: string ) => void
}

export const Recipe = ({recipe, onDelete}: RecipeProps) => {
    return (
        <div>
            <li  style={{display: 'flex', justifyItems: 'center', justifyContent: 'space-between' }}>
                <span>
                    {recipe.name}
                </span>
                <button onClick={() => onDelete(recipe.id)}>Delete recipe</button>
            </li>
        </div>
    )
}