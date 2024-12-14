import { ActionFunction, json, LoaderFunction, redirect } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import ContainerBordered from "~/components/Bones/ContainerBordered";
import PageContainer from "~/components/Bones/PageContainer";
import NewRecipeForm from "~/components/NewRecipeForm";
import { getNextRecipeId } from "~/helpers/recipe-helpers";
import { Recipe, RecipeSource } from "~/models/recipe";

import fs from "fs/promises";
import path from "path";


export async function action({ request }: { request: Request }) {
  const formData = await request.formData();

  const recipeId = getNextRecipeId();
  const title = formData.get("title");
  const sourceAuthor = formData.get("sourceAuthor");
  const sourceType = formData.get("sourceType");
  const sourceTitle = formData.get("sourceTitle");
  const sourceLink = formData.get("sourceLink");

  // Parse ingredients
  const ingredients = Array.from(formData.entries())
    .filter(([key]) => key.startsWith("ingredients["))
    .reduce((acc: any[], [key, value]) => {
      const match = key.match(/ingredients\[(\d+)\]\[(\w+)\]/);
      if (match) {
        const [_, index, field] = match;
        acc[parseInt(index)] = {
          ...(acc[parseInt(index)] || {}),
          [field]: value,
        };
      }
      return acc;
  }, []);

  if (typeof title !== "string" || title.trim().length === 0) {
    return json({ error: "Title is required" }, { status: 400 });
  }

  const newRecipe = {
    id: recipeId,
    title,
    ingredients,
    directions: [],  // Hardcoded empty array for now
    source: {
      author: sourceAuthor,
      type: sourceType,
      title: sourceTitle,
      link: sourceLink,
    },
    pairings: [],
    tags: [],
    notes: "",
  };


  // Path to recipes.json
  const filePath = path.join(process.cwd(), "recipes.json");
  const fileData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(fileData);

  // Add the new recipe
  data.recipes.push(newRecipe);

  // Save the updated data back to the file
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));

  // Redirect back to the recipes list or another page
  return redirect("/recipes");
}

export default function AddRecipe() {

  return (
    <PageContainer type="centered" hasBackground>
      <ContainerBordered>
        <h1>Add a New Recipe</h1>
        <NewRecipeForm />

      </ContainerBordered>


    </PageContainer>
  );
}


// const newRecipe: Recipe = {
//   id: getNextRecipeId(),
//   title: formData.get("title"),
//   ingredients: [
//       {
//           id: "1",
//           name: "hot sauce",
//           quantity: "2 Tbsp",
//           type: "pantry",
//       },
//       {
//           id: "2",
//           name: "tofu",
//           quantity: "1 block",
//           type: "grocery",
//       }
//   ],
//   directions: [
//       {
//           order: 1,
//           instruction: "This is what you do."
//       }
//   ],
//   source: {
//       id: "1",
//       author: "Chloe Coscarelli",
//       type: "cook book",
//       title: "Chloe Flavor"
//   }
// };


// export const loader: LoaderFunction = async () => {
//   return getRecipes();
// };
// export const action: ActionFunction = async ({ request }) => {
//   const formData = await request.formData();

//   // const newRecipeTitle = formData.get("title") as string;

//   // const newRecipe: Recipe = Object.fromEntries(formData);
//   // Add Validation

//   addRecipe(newRecipe);
//   return redirect("/recipes");
// };