import PageContainer from "~/components/Bones/PageContainer";
// import { mockRecipes } from "mockRecipesData";
import { recipes } from "recipes.json";
import RecipeCard from "~/components/RecipeCard";
import { Recipe } from "~/models/recipe";

const storedRecipes: Recipe[] = recipes;

export default function RecipesIndex() {

  return (
    <PageContainer type="centered">
      <h1>Explore Recipes</h1>
      <div className="flex gap-4">
        {storedRecipes.map((recipe: Recipe, index: number) => (
          <RecipeCard recipe={recipe}/>
        ))}
      </div>
    </PageContainer>
  );
}

