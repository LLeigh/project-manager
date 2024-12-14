import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { mockRecipes } from "recipes";
import ContainerBordered from "~/components/Bones/ContainerBordered";
import PageContainer from "~/components/Bones/PageContainer";
import Icon from "~/components/Icon";
import RecipeCard from "~/components/RecipeCard";
import Tag from "~/components/Tag";
import { Recipe, Step } from "~/models/recipe";

export let loader: LoaderFunction = async ({ params }) => {
    const recipeId = params.id;
    const recipe = mockRecipes.find((r) => r.id === recipeId);

    if (!recipe) {
        throw new Response("Recipe not found", { status: 404 });
    }
    return Response.json(recipe);

};

export default function RecipePage() {
    const recipe: Recipe = useLoaderData<typeof loader>();

    const [isComboView, setIsComboView] = useState(false);
    const [isStandardView, setIsStandardView] = useState(true);

    const handleClickForComboView = () => {
        setIsComboView(true);
        setIsStandardView(false);
    };
    const handleClickForStandardView = () => {
        setIsStandardView(true);
        setIsComboView(false);
    };

    function rewriteDirectionsWithQuantities(recipe: Recipe): Step[] {
        const usedIngredients = new Set<string>(); // Track already used ingredients

        return recipe.directions.map((step) => {
            let updatedInstruction = step.instruction;

            for (const ingredient of recipe.ingredients) {
                // Check if the ingredient name exists in the instruction and has not been used yet
                if (
                    updatedInstruction.includes(ingredient.name.toLowerCase()) &&
                    !usedIngredients.has(ingredient.name)
                ) {
                    // Replace the first occurrence of the ingredient name with quantity + name
                    const replacement = `(${ingredient.quantity}) ${ingredient.name}`;
                    const regex = new RegExp(`\\b${ingredient.name}\\b`, 'i'); // Match whole word
                    updatedInstruction = updatedInstruction.replace(regex, replacement);

                }
            }

            return {
                ...step,
                instruction: updatedInstruction,
            };
        });
    }
    const directionsWithIngredientQuantities = rewriteDirectionsWithQuantities(recipe);

    return (
        <>
            <PageContainer hasBackground type="centered" >
                <ContainerBordered>
                    <div className="relative w-full text-center">
                        <h1 >{recipe.title}</h1>
                        <hr className="mb-1" />
                        <p className="text-2xs font-semibold">
                            <span className="uppercase">Source: </span>
                            {recipe.source.link ?
                                <Link to={recipe.source.link} className="hover:text-focus hover:underline">{recipe.source.title} </Link>
                                :
                                <span>{recipe.source.title}</span>
                            }
                        </p>
                        <div className="absolute top-14 right-1 text-black flex flex-row items-center justify-end ">
                            <div
                                onClick={handleClickForStandardView}
                                className="group cursor-pointer text-black w-6 h-6 flex justify-center items-center"
                            >
                                <Icon icon="list-view" className={`group-hover:text-focus h-6 w-6 ${isStandardView ? "text-black" : "text-gray"}`} />
                                <span className="tooltip absolute hidden group-hover:flex bg-primary text-black text-2xs text-left min-w-40 px-2 py-0.5 -bottom-14 right-0 rounded border border-black">
                                    View recipe with ingredients and directions divided into their own spaces.
                                </span>
                            </div>
                            <div className="h-5 border-r border-black pr-1.5 mr-1.5"></div>
                            <div
                                onClick={handleClickForComboView}
                                className="group cursor-pointer text-black w-6 h-6 flex justify-center items-center"
                            >
                                <Icon icon="combo-view" className={`group-hover:text-focus h-6 w-6 ${isComboView ? "text-black" : "text-gray"}`} />
                                <span className="tooltip absolute hidden group-hover:flex bg-primary text-black text-2xs text-left min-w-40 px-2 py-0.5 -bottom-14 right-0 rounded border border-black">
                                    View recipe with ingredient quantities combined into directions.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="tags flex flex-row justify-center gap-2 flex-wrap my-4">
                        {recipe.tags?.map((tag: string, index: number) => (
                            <Tag key={tag} name={tag} />
                        ))}
                    </div>
                    {isStandardView && (
                        <>
                            <div className="flex flex-row w-full gap-6 my-6">
                                <img src={recipe.image} alt={`image of ${recipe.title}`} className="w-1/2" />
                                <div className="ingredients w-1/2">
                                    <h4>Ingredients:</h4>
                                    <hr className="mt-1 mb-3" />
                                    <ul className="text-sm">
                                        {recipe.ingredients.map((ingredient) => (
                                            <li key={ingredient.id} className="my-1">{ingredient.quantity} {ingredient.name} </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="text-left w-full">
                                <h4>directions:</h4>
                                <hr className="mt-1 mb-3" />
                                {recipe.directions.map((step) => (
                                    <p key={step.order} className="py-1 text-sm">
                                        <span className="mr-2">{step.order}</span>
                                        <span>{step.instruction}</span>
                                    </p>
                                ))}
                            </div>
                        </>
                    )}
                    {isComboView && (
                        <ul>
                            {directionsWithIngredientQuantities.map((step) => (
                                <p key={step.order} className="py-1 text-xs">
                                    <span className="mr-2">{step.order}</span>
                                    <span>{step.instruction}</span>
                                </p>
                            ))}
                        </ul>
                    )}
                    <hr className="my-6" />
                    <div className="border border-gray">
                        <RecipeCard recipe={recipe} />
                    </div>


                </ContainerBordered>
            </PageContainer>
        </>
    )
}