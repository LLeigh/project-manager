import PageContainer from "~/components/Bones/PageContainer";
import { mockRecipes } from "recipes";
import RecipeCard from "~/components/RecipeCard";
import { Recipe } from "~/models/recipe";

const recipes = mockRecipes;

export default function RecipesIndex() {

  return (
    <PageContainer type="centered">
      <h1>Explore Recipes</h1>
      <div className="flex gap-4">
        {/* {JSON.stringify(recipes)} */}
        {recipes.map((recipe: Recipe, index: number) => (
          <RecipeCard recipe={recipe}/>
        ))}
      </div>
    </PageContainer>
  );
}

