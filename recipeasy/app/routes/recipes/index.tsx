import PageContainer from "~/components/Bones/PageContainer";
import { mockRecipes } from "recipes";

const recipes = mockRecipes;

export default function RecipesIndex() {

  return (
    <PageContainer type="centered">
      <h1>Explore Recipes</h1>
      <div>
        {JSON.stringify(recipes)}
      </div>
    </PageContainer>
  );
}

