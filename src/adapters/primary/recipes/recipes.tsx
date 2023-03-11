import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { getRecipes } from "../../../core/recipes/getRecipes/recipes"
import { deleteRecipeById } from "../../../core/recipes/recipeById/recipe"
import { Loading } from "../technical/Loading"
import { Recipe } from "./recipe"


export const Recipes = () => {
    const dispatch = useAppDispatch()
    const { recipes, status } = useAppSelector((state) => state.recipes)

    useEffect(() => {
        dispatch(getRecipes)
    }, [dispatch])

    if (!status) {
        return <div>Loading...</div>
    }

    const handleOnDelete = (id: string ) => {
        dispatch(deleteRecipeById(id))
    }

    return (
        <div>
            <Loading loading={!status || status === 'loading'}>
            <ul>
            {recipes.map((r) => <Recipe onDelete={handleOnDelete} key={r.id} recipe={r}/>)}
            </ul>
            </Loading>
        </div>
    )
}