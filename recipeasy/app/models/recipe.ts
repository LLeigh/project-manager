
export interface Ingredient {
    id: string;
    name: string;
    quantity: string;
    type: string; // 'pantry' | 'grocery'
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
    imagePath?: string;
    ingredients: Ingredient[];
    directions: string[];
    source: RecipeSource;
    pairings?: Recipe[];
    tags?: string[];
    mealPrepNotes?: string;
    notes?: string;
}
