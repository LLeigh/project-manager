import { Link } from "@remix-run/react";
import { useState } from "react";
import { Ingredient, Recipe, Step } from "~/models/recipe";
import Icon from "./Icon";
import Tag from "./Tag";

export default function RecipeCard({ recipe }: { recipe: Recipe; }) {
    const [showBackOfCard, setShowBackOfCard] = useState(false);

    const toggleQuestionsView = () => {
        setShowBackOfCard((prev) => !prev);
    };

    return (
        <div className="relative shadow-md w-96 h-72 cursor-pointer" onClick={toggleQuestionsView}>
            <div className="absolute right-4 bottom-4 flex flex-row gap-x-2">
                <Link to="/" className="view-recipe-button group bg-black text-primary hover:bg-primary rounded-full w-8 h-8 flex justify-center items-center">
                    <Icon icon="hashtag" className="h-6 w-6 stroke-primary group-hover:text-black group-hover:stroke-black" />
                    <div className="tooltip hidden group-hover:flex absolute flex-row justify-end flex-wrap gap-1 gradient-bg px-2 py-1 -bottom-10 -right-4 shadow-md w-96 max-w-96">
                        {recipe.tags?.map((tag) => (
                            <Tag key={tag} size="small" name={tag} />
                        ))}
                    </div>
                </Link>
                <Link to="/" className="view-recipe-button group bg-black text-primary hover:bg-primary rounded-full w-8 h-8 flex justify-center items-center">
                    <Icon icon="eye-ball" className="h-6 w-6 group-hover:!text-black group-hover:stroke-black" />
                    <span className="tooltip absolute hidden group-hover:flex bg-primary text-black text-2xs text-nowrap px-2 py-0.5 -bottom-6 rounded">View Full Recipe</span>
                </Link>
            </div>
            <div className="title">
                <div className="px-3 py-2">
                    <h6>{recipe.title}</h6>
                </div>
                <div className="gradient-border"></div>
            </div>
            <div className="recipe-body p-3 flex flex-row items-start">
                {!showBackOfCard && (
                    <>
                        <div className="recipe-ingredients w-1/2">
                            <p className="text-xs underline">Ingredients:</p>
                            <ul className="text-xs">
                                {recipe.ingredients.map((ingredient: Ingredient, index: number) => (
                                    <li key={ingredient.id} className="my-1">{ingredient.quantity} {ingredient.name} </li>
                                ))}
                            </ul>
                        </div>
                        <div className="recipe-image w-1/2">
                            <img src={recipe.image} alt={`${recipe.title}-image`} />
                        </div>
                    </>
                )}
                {showBackOfCard && (
                    <>
                        <div className="flex flex-col">
                            {recipe.directions.map((step: Step, index: number) => (
                                <p key={step.id} className="py-1 text-xs">
                                    <span className="mr-2">{step.order}</span>
                                    <span>{step.instruction}</span>
                                </p>
                            ))}
                        </div>

                    </>
                )}
            </div>
            <div className="absolute bottom-0 left-0">
                <p className="p-3 flex items-end">
                    <span className="text-2xs font-semibold uppercase mr-2">source: </span>
                    {recipe.source.link ?
                        <Link to={recipe.source.link} className="text-xs hover:text-focus underline">{recipe.source.title}</Link>
                        : <span className="text-xs">{recipe.source.title}</span>}
                </p>
            </div>
        </div>

    )
}