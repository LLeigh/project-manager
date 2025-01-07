import { Form, Link, redirect, useNavigation } from "@remix-run/react";
import Tag from "./Tag";
import InputGroup from "./InputGroup";
import { Ingredient, Recipe } from "~/models/recipe";
import Input from "./Input";
import Button from "./Button";
import { action } from "~/routes/recipes-add"; // Adjust the path as necessary
import { recipeSources } from "mockRecipesData";
import { useState } from "react";
import Icon from "./Icon";
import { tags } from "tags.json";
import Tooltip from "./Tooltip";

export default function NewRecipeForm() {

    const sourceTypes = ['self', 'cookbook', 'blog'];
    const sources: string[] = recipeSources.map(source => source.author);

    const [ingredients, setIngredients] = useState([{ quantity: "", name: "", type: "pantry" }]);
    const ingredientTypes = ['pantry', 'grocery'];

    const addIngredient = () => {
        setIngredients((prevIngredients) => [
            ...prevIngredients,
            { quantity: "", name: "", type: "pantry" },
        ]);
    };

    const removeIngredient = (index: number) => {
        setIngredients(ingredients.filter((_, i) => i !== index));
    };

    const handleIngredientChange = (index: number, field: keyof Ingredient, value: string) => {
        setIngredients((prevIngredients) => {
            const updatedIngredients = [...prevIngredients];
            updatedIngredients[index] = { ...updatedIngredients[index], [field]: value };
            return updatedIngredients;
        });
    };



    const [directions, setDirections] = useState(['']);

    const addDirectionStep = () => {
        console.log('add step clicked');
        setDirections((prevDirections) => [...prevDirections, '']);
    };

    const handleDirectionStepChange = (index: number, value: string) => {
        setDirections((prevDirections) => {
            const updatedDirections = [...prevDirections];
            updatedDirections[index] = value;
            return updatedDirections;
        });
    };

    const removeDirectionStep = (index: number) => {
        setDirections(directions.filter((_, i) => i !== index));
    };

    const recipeTags = tags;
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleTagChange = (tag: string) => {
        setSelectedTags((prevTags) =>
            prevTags.includes(tag)
                ? prevTags.filter((t) => t !== tag) // Remove if already selected
                : [...prevTags, tag] // Add if not selected
        );
    };

    return (
        <Form method="post" id="recipe-form" className="w-full">
            <div className="recipe-general-info mt-4">
                <h4>general info:</h4>
                <hr className="mt-1 mb-6" />
                <div className="w-full">
                    <Input
                        type="text"
                        id="title"
                        label="recipe title"
                        labelFor="title"
                        name="title"
                        placeholder="Add a Title"
                        isRequired
                    />
                </div>
            </div>

            <div className="w-full flex flex-row items-start justify-between gap-6">
                <div className="w-1/2">
                    <Input
                        type="select"
                        id="sourceAuthor"
                        label="source author"
                        labelFor="sourceAuthor"
                        name="sourceAuthor"
                        placeholder="Select an existing source"
                        options={sources}
                    />
                </div>
                <div className="w-1/2">
                    <InputGroup
                        type="radio"
                        name="sourceType"
                        label="select source type"
                        options={sourceTypes}
                    />
                </div>
            </div>
            <div className="w-full flex flex-row gap-6">
                <div className="w-1/2">
                    <Input
                        type="text"
                        id="sourceTitle"
                        label="source title"
                        labelFor="sourceTitle"
                        name="sourceTitle"
                        placeholder="Title of the cookbook or Blog"

                    />
                </div>
                <div className="w-1/2">
                    <Input
                        type="text"
                        id="sourceLink"
                        label="source link"
                        labelFor="sourceLink"
                        name="sourceLink"
                        placeholder="should start with https://..."

                    />
                </div>
            </div>
            <div className="recipe-ingredients mt-4">
                <h4>ingredients:</h4>
                <hr className="mt-1 mb-6" />
                <div className="ingredient-labels w-full flex flex-row justify-start">
                    <span className="w-1/6">Quantity</span>
                    <span className="w-3/6">Ingredient</span>
                    <span className="w-1/6 ">Ingredient Type</span>
                    <span className="w-1/6">Actions</span>
                </div>
                {ingredients.map((ingredient, index) => (
                    <div key={index} className="flex flex-row justify-start items-center">


                        <div className="w-1/6">
                            <Input
                                type="text"
                                id={`ingredientQuantity-${index}`}
                                name={`ingredients[${index}][quantity]`}
                                label="Quantity"
                                showLabel={false}
                                labelFor={`ingredientQuantity-${index}`}
                                placeholder="Ex: 1 tsp"
                                value={ingredient.quantity}
                                onChange={(e) => handleIngredientChange(index, "quantity", e.target.value)}
                            />
                        </div>
                        <div className="w-3/6 mx-2">
                            <Input
                                type="text"
                                id={`ingredientName-${index}`}
                                name={`ingredients[${index}][name]`}
                                label="Ingredient"
                                showLabel={false}
                                labelFor={`ingredientName-${index}`}
                                placeholder="Example: Onion, chopped"
                                value={ingredient.name}
                                onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
                            />
                        </div>
                        <div className="w-1/6 mx-2">
                            <InputGroup
                                type="radio"
                                name={`ingredients[${index}][type]`}
                                label="Ingredient type"
                                showLabel={false}
                                options={ingredientTypes}
                                onChange={(e) => handleIngredientChange(index, "type", e.target.value)}
                            />
                        </div>
                        <Button
                            action="function"
                            label="remove ingredient"
                            onClick={() => removeIngredient(index)}
                            iconOnly={true}
                            style="icon-only"
                        >
                            <Icon icon="close" className="text-tertiary hover:text-focus h-8 w-8" />
                        </Button>
                    </div>
                ))}
                <Button
                    action="function"
                    label="Add Ingredient"
                    style="primary"
                    onClick={addIngredient}
                />

            </div>
            <div className="recipe-steps mt-8">
                <h4>directions:</h4>
                <hr className="mt-1 mb-6" />
                {directions.map((step, index) => (
                    <div key={index} className="flex flex-row justify-start items-center">
                        <Input
                            type="textarea"
                            id={`directions[${index}]`}
                            label={`step ${index + 1}:`}
                            labelFor={`directions[${index}]`}
                            name={`directions[${index}]`}
                            placeholder="Example: Bring a pot of water to boil."
                            value={step}
                            onChange={(e) => handleDirectionStepChange(index, e.target.value)}
                        />
                        <Button
                            action="function"
                            label="remove step"
                            onClick={() => removeDirectionStep(index)}
                            iconOnly={true}
                            style="icon-only"
                        >
                            <Icon icon="close" className="text-tertiary hover:text-focus h-8 w-8 mt-4" />
                        </Button>
                    </div>
                ))}
                <Button
                    action="function"
                    label="Add Step"
                    style="primary"
                    onClick={addDirectionStep}
                />
            </div>
            <div className="mt-8">
                <Input
                    type="textarea"
                    id="mealPrepNotes"
                    label="Meal Prep Notes"
                    labelFor="mealPrepNotes"
                    name="mealPrepNotes"
                    placeholder="Example: good as burrito filling for meal prep"
                />
            </div>
            <div className="mt-8">
                <Input
                    type="textarea"
                    id="notes"
                    label="other notes"
                    labelFor="notes"
                    name="notes"
                    placeholder="Example: Pairs well with asparagus"
                />
            </div>
            <div className="recipe-tags mt-8">
                <div className="flex flex-row items-center justify-between">
                    <h4>Tags:</h4>
                    <Button action="function" label="add new tag" style="primary" iconOnly onClick={() => {console.log('clicked')}}>
                        <Icon icon="plus" className="text-primary hover:text-focus h-6 w-6" />
                        <Tooltip text="Add New Tag" />
                    </Button>
                </div>

                <hr className="mt-1 mb-2" />
                <p className="text-xs mb-2">Use the checkboxes below to select existing tags for your recipe.</p>
                <div className="flex flex-wrap">
                    {recipeTags.map((tag) => (
                        <label key={tag} className="checkbox-container flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="tags"
                                value={tag}
                                checked={selectedTags.includes(tag)}
                                onChange={() => handleTagChange(tag)}
                                className="form-checkbox"
                            />
                            <span className="text-xs font-regular capitalize">{tag}</span>
                        </label>
                    ))}
                </div>
                <input
                    type="hidden"
                    name="selectedTags"
                    value={JSON.stringify(selectedTags)}
                />
                <hr className="mt-1 mb-6" />
                <div className="w-full flex flex-row justify-start items-center gap-2">
                    {selectedTags.map((t, index) => (
                        <Tag key={index} name={t} />
                    ))}
                </div>
            </div>

            <div className="flex flex-row justify-end gap-3 mt-10">
                <Button
                    action="link"
                    link="/recipes"
                    style="secondary"
                    label="Cancel"
                />

                <Button
                    action="submit"
                    label="submit Recipe"
                    style="primary"
                />
            </div>

        </Form >
    )
}

// source

// IMAGE
//     <div className="w-full flex flex-row items-start">
//        <Input
//            type="file"
//            id="image"
//            label="add an image"
//            labelFor="image"
//            name="image"
//        />
//    </div>
