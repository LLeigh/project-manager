import { Recipe } from "~/models/recipe";

export const mockRecipes: Recipe[] = [
    {
      id: "1",
      title: "Spaghetti Carbonara",
      image: "https://example.com/spaghetti-carbonara.jpg",
      ingredients: [
        { id: "1", name: "Spaghetti", quantity: "200g", type: "grocery" },
        { id: "2", name: "Eggs", quantity: "3", type: "grocery" },
        { id: "3", name: "Pancetta", quantity: "100g", type: "grocery" },
        { id: "4", name: "Parmesan Cheese", quantity: "50g", type: "grocery" },
        { id: "5", name: "Salt", quantity: "To taste", type: "pantry" },
        { id: "6", name: "Black Pepper", quantity: "To taste", type: "pantry" },
      ],
      directions: [
        { id: "1", order: 1, instruction: "Cook spaghetti according to package instructions." },
        { id: "2", order: 2, instruction: "In a bowl, whisk eggs and grated Parmesan together." },
        { id: "3", order: 3, instruction: "Cook pancetta in a skillet until crispy." },
        { id: "4", order: 4, instruction: "Drain spaghetti and mix quickly with egg mixture and pancetta." },
        { id: "5", order: 5, instruction: "Season with salt and freshly ground black pepper. Serve immediately." },
      ],
      source: {
        id: "1",
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
          source: { id: "2", author: "Chef Anna" },
        },
      ],
      tags: ["Pasta", "Italian", "Dinner"],
      mealPrepNotes: "Pancetta can be cooked in advance and stored in the fridge for up to 3 days.",
      notes: "Use Pecorino Romano for a more authentic taste.",
    },
    {
      id: "2",
      title: "Chicken Curry",
      image: "https://example.com/chicken-curry.jpg",
      ingredients: [
        { id: "1", name: "Chicken Breast", quantity: "500g", type: "grocery" },
        { id: "2", name: "Onions", quantity: "2, diced", type: "grocery" },
        { id: "3", name: "Garlic", quantity: "4 cloves, minced", type: "grocery" },
        { id: "4", name: "Ginger", quantity: "1 tbsp, minced", type: "grocery" },
        { id: "5", name: "Curry Powder", quantity: "2 tbsp", type: "pantry" },
        { id: "6", name: "Coconut Milk", quantity: "1 can", type: "grocery" },
        { id: "7", name: "Vegetable Oil", quantity: "2 tbsp", type: "pantry" },
        { id: "8", name: "Salt", quantity: "To taste", type: "pantry" },
      ],
      directions: [
        { id: "1", order: 1, instruction: "Heat oil in a pan and sauté onions until golden." },
        { id: "2", order: 2, instruction: "Add garlic, ginger, and curry powder, and cook for 1 minute." },
        { id: "3", order: 3, instruction: "Add chicken and cook until browned." },
        { id: "4", order: 4, instruction: "Pour in coconut milk and simmer until chicken is cooked through." },
        { id: "5", order: 5, instruction: "Season with salt and serve with rice or naan." },
      ],
      source: {
        id: "2",
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
  