import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PageContainer from "~/components/Bones/PageContainer";
// import RecipeList from "~/components/RecipeList";

// export const loader = async () => {
//   const recipes = await fetchRecipes(); // Fetch recipes from a database or API
//   return json({ recipes });
// };

export default function RecipesIndex() {
//   const { recipes } = useLoaderData<typeof loader>();
  return (
    <PageContainer type="centered">
      <h1>Explore Recipes</h1>
      {/* <RecipeList recipes={recipes} /> */}
    </PageContainer>
  );
}