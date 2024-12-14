
export interface Ingredient {
    id: string;
    name: string;
    quantity: string;
    type: string; // 'pantry' | 'grocery'
}

export interface Step {
    order: number;
    instruction: string;
}

export interface RecipeSource {
    author: string;
    type?: string;
    title?: string;
    link?: string;
}

export interface Recipe {
    id: string;
    title: string;
    image?: string;
    ingredients: Ingredient[];
    directions: Step[];
    source: RecipeSource;
    pairings?: Recipe[];
    tags?: string[];
    mealPrepNotes?: string;
    notes?: string;
}
