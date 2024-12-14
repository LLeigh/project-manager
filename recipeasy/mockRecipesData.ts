import { Recipe, RecipeSource } from "~/models/recipe";

export const mockRecipes: Recipe[] = [
    {
      id: "1",
      title: "Spaghetti Carbonara",
      image: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: [
        { id: "1", name: "Spaghetti", quantity: "200g", type: "grocery" },
        { id: "2", name: "Eggs", quantity: "3", type: "grocery" },
        { id: "3", name: "Pancetta", quantity: "100g", type: "grocery" },
        { id: "4", name: "Parmesan Cheese", quantity: "50g", type: "grocery" },
        { id: "5", name: "Salt", quantity: "To taste", type: "pantry" },
        { id: "6", name: "Black Pepper", quantity: "To taste", type: "pantry" },
      ],
      directions: [
        { order: 1, instruction: "Cook spaghetti according to package instructions." },
        { order: 2, instruction: "In a bowl, whisk eggs and grated Parmesan together." },
        { order: 3, instruction: "Cook pancetta in a skillet until crispy." },
        { order: 4, instruction: "Drain spaghetti and mix quickly with egg mixture and pancetta." },
        { order: 5, instruction: "Season with salt and freshly ground black pepper. Serve immediately." },
      ],
      source: {
        author: "Chef Mario",
        type: "Cookbook",
        title: "Italian Classics",
        link: "https://example.com/italian-classics",
      },
      pairings: [
        {
          id: "2",
          title: "Caesar Salad",
          ingredients: [],
          directions: [],
          source: { author: "Chef Anna" },
        },
      ],
      tags: ["Pasta", "Italian", "Dinner"],
      mealPrepNotes: "Pancetta can be cooked in advance and stored in the fridge for up to 3 days.",
      notes: "Use Pecorino Romano for a more authentic taste.",
    },
    {
      id: "2",
      title: "Tofu Curry",
      image: "https://media.istockphoto.com/id/1225795312/photo/tofu-curry-soup-with-vegetables.webp?a=1&b=1&s=612x612&w=0&k=20&c=UHPl1brrVCSGNBIQJRSv2HMxZKGrbrSwf16NIb8VuGc=",
      ingredients: [
        { id: "1", name: "Block Tofu", quantity: "500g", type: "grocery" },
        { id: "2", name: "Onions", quantity: "2, diced", type: "grocery" },
        { id: "3", name: "Garlic", quantity: "4 cloves, minced", type: "grocery" },
        { id: "4", name: "Ginger", quantity: "1 tbsp, minced", type: "grocery" },
        { id: "5", name: "Curry Powder", quantity: "2 tbsp", type: "pantry" },
        { id: "6", name: "Coconut Milk", quantity: "1 can", type: "grocery" },
        { id: "7", name: "Vegetable Oil", quantity: "2 tbsp", type: "pantry" },
        { id: "8", name: "Salt", quantity: "To taste", type: "pantry" },
      ],
      directions: [
        { order: 1, instruction: "Heat oil in a pan and sauté onions until golden." },
        { order: 2, instruction: "Add garlic, ginger, and curry powder, and cook for 1 minute." },
        { order: 3, instruction: "Add tofu and cook until browned." },
        { order: 4, instruction: "Pour in coconut milk and simmer until chicken is cooked through." },
        { order: 5, instruction: "Season with salt and serve with rice or naan." },
      ],
      source: {
        author: "Chef Sita",
        type: "Blog",
        title: "Spice Up Your Life",
        link: "https://example.com/chicken-curry",
      },
      tags: ["Curry", "Chicken", "Indian"],
      mealPrepNotes: "Curry tastes better the next day. Store in the fridge for up to 3 days.",
      notes: "Add more chili for extra heat.",
    },
  ];
export const recipeSources: RecipeSource[] = [
  {
    author: "self",
    type: "self",
  },
  {
    author: "Chloe Coscarelli",
    type: "cookbook",
    title: "Chloe Flavor"
  },

]