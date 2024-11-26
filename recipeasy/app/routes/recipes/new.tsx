import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
// import RecipeForm from "~/components/RecipeForm";

// export const action = async ({ request }) => {
//   const formData = await request.formData();
//   const newRecipe = {
//     name: formData.get("name"),
//     ingredients: formData.get("ingredients"),
//     instructions: formData.get("instructions"),
//   };
// //   await saveRecipe(newRecipe); // Save to database or API
// //   return redirect("/recipes");
// };

export default function AddRecipe() {
//   const errors = useActionData<typeof action>();
  return (
    <div>
      <h1>Add a New Recipe</h1>
      {/* <RecipeForm errors={errors} /> */}
    </div>
  );
}
