// import { mockRecipes } from "mockRecipesData";
import { Recipe } from "~/models/recipe";
import { recipes } from "recipes.json";


export function getRecipes() {
    return recipes;
}

export function getNextRecipeId() {
    const recipes = getRecipes();
    const lastRecipeId = parseInt(recipes[recipes.length - 1].id);
    return (lastRecipeId + 1).toString();
}
