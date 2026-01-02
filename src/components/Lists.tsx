import React from "react";

import { Dish } from "./DishCard";

export const dishes: Dish[] = [
  {
    name: "Avocado and Egg Toast",
    img: "avocado-and-egg-toast",
    description:
      "You won't skip the most important meal of the day with this avocado toast recipe. Crispy, lacy eggs and creamy avocado top hot buttered toast.",
    price: 10.0,
    review: {
      rating: 5.0,
      number_of_reviews: 120,
    },
    content_breakdown: {
      kcal: 400,
      grams: 510,
      proteins: "30",
      carbs: "56",
      fats: "24",
    },
    ingredients: ["Egg", "Avocado", "Spinach", "Bread"],
  },
  {
    name: "Mac and Cheese",
    img: "mac-and-cheese",
    description:
      "Comfort food at its finest. Tender macaroni pasta enveloped in a rich, creamy three-cheese sauce, topped with toasted breadcrumbs and fresh parsley.",
    price: 10.4,
    review: {
      rating: 4.9,
      number_of_reviews: 120,
    },
    content_breakdown: {
      kcal: 580,
      grams: 350,
      proteins: "22",
      carbs: "65",
      fats: "28",
    },
    ingredients: [
      "Macaroni Pasta",
      "Cheddar Cheese",
      "Parmesan",
      "Cream",
      "Butter",
      "Parsley",
    ],
  },
  {
    name: "Power Bowl",
    img: "power-bowl",
    description:
      "A nutrient-packed bowl featuring quinoa, roasted sweet potatoes, chickpeas, and kale, drizzled with a lemon-tahini dressing for a healthy energy boost.",
    price: 10.4,
    review: {
      rating: 4.9,
      number_of_reviews: 120,
    },
    content_breakdown: {
      kcal: 450,
      grams: 420,
      proteins: "18",
      carbs: "58",
      fats: "16",
    },
    ingredients: [
      "Quinoa",
      "Sweet Potato",
      "Chickpeas",
      "Kale",
      "Tahini",
      "Lemon",
    ],
  },
  {
    name: "Vegetable Salad",
    img: "vegetable-salad",
    description:
      "A crisp and refreshing mix of mixed greens, cherry tomatoes, cucumbers, and radishes, tossed in a light balsamic vinaigrette and topped with shaved parmesan.",
    price: 10.4,
    review: {
      rating: 4.9,
      number_of_reviews: 120,
    },
    content_breakdown: {
      kcal: 220,
      grams: 300,
      proteins: "8",
      carbs: "15",
      fats: "12",
    },
    ingredients: [
      "Mixed Greens",
      "Cherry Tomatoes",
      "Cucumber",
      "Radish",
      "Balsamic Vinegar",
      "Parmesan",
    ],
  },
  {
    name: "Avocado Chicken Salad",
    img: "avocado-chicken-salad",
    description:
      "Grilled chicken breast slices served over a bed of spinach and arugula with generous chunks of fresh avocado, red onions, and a zesty lime dressing.",
    price: 10.4,
    review: {
      rating: 4.9,
      number_of_reviews: 120,
    },
    content_breakdown: {
      kcal: 480,
      grams: 380,
      proteins: "45",
      carbs: "12",
      fats: "28",
    },
    ingredients: [
      "Grilled Chicken",
      "Avocado",
      "Spinach",
      "Arugula",
      "Red Onion",
      "Lime Dressing",
    ],
  },
  {
    name: "Chicken Breast",
    img: "chicken-breast",
    description:
      "Succulent sous-vide chicken breast seared for a crispy skin, served with a side of roasted root vegetables and a savory herb jus.",
    price: 10.4,
    review: {
      rating: 4.9,
      number_of_reviews: 120,
    },
    content_breakdown: {
      kcal: 350,
      grams: 300,
      proteins: "52",
      carbs: "5",
      fats: "10",
    },
    ingredients: [
      "Chicken Breast",
      "Thyme",
      "Garlic",
      "Olive Oil",
      "Carrots",
      "Sea Salt",
    ],
  },
  {
    name: "Curry Salmon",
    img: "curry-salmon",
    description:
      "Pan-seared salmon fillet simmered in a rich and aromatic coconut curry sauce, garnished with cilantro and served with steamed basmati rice.",
    price: 10.4,
    review: {
      rating: 4.9,
      number_of_reviews: 120,
    },
    content_breakdown: {
      kcal: 560,
      grams: 400,
      proteins: "38",
      carbs: "45",
      fats: "26",
    },
    ingredients: [
      "Salmon Fillet",
      "Coconut Milk",
      "Red Curry Paste",
      "Basmati Rice",
      "Cilantro",
      "Lime",
    ],
  },
];

export const drinks: Dish[] = [
  {
    name: "Green Detox Smoothie",
    img: "green-detox-smoothie",
    description:
      "A refreshing blend of kale, spinach, green apple, and cucumber with a hint of lemon and ginger to kickstart your metabolism.",
    price: 8.5,
    review: {
      rating: 4.8,
      number_of_reviews: 95,
    },
    content_breakdown: {
      kcal: 180,
      grams: 350,
      proteins: "4",
      carbs: "38",
      fats: "1",
    },
    ingredients: [
      "Kale",
      "Spinach",
      "Green Apple",
      "Cucumber",
      "Lemon",
      "Ginger",
    ],
  },
  {
    name: "Iced Caramel Latte",
    img: "iced-caramel-latte",
    description:
      "Rich espresso poured over ice and milk, swirled with homemade caramel syrup and topped with a light dusting of cocoa powder.",
    price: 6.0,
    review: {
      rating: 4.9,
      number_of_reviews: 210,
    },
    content_breakdown: {
      kcal: 240,
      grams: 300,
      proteins: "6",
      carbs: "32",
      fats: "9",
    },
    ingredients: [
      "Espresso",
      "Whole Milk",
      "Caramel Syrup",
      "Ice",
      "Cocoa Powder",
    ],
  },
  {
    name: "Fresh Berry Lemonade",
    img: "fresh-berry-lemonade",
    description:
      "Sparkling water infused with freshly squeezed lemons, muddled strawberries, and blueberries, sweetened with a touch of agave.",
    price: 5.5,
    review: {
      rating: 4.7,
      number_of_reviews: 88,
    },
    content_breakdown: {
      kcal: 120,
      grams: 320,
      proteins: "1",
      carbs: "28",
      fats: "0",
    },
    ingredients: [
      "Sparkling Water",
      "Lemon Juice",
      "Strawberries",
      "Blueberries",
      "Agave Syrup",
      "Mint",
    ],
  },
  {
    name: "Mango Passion Fruit Juice",
    img: "mango-passion-fruit-juice",
    description:
      "Tropical sweetness in a glass. Pure mango puree mixed with tangy passion fruit seeds and a splash of coconut water.",
    price: 7.0,
    review: {
      rating: 4.6,
      number_of_reviews: 64,
    },
    content_breakdown: {
      kcal: 160,
      grams: 300,
      proteins: "2",
      carbs: "35",
      fats: "1",
    },
    ingredients: ["Mango", "Passion Fruit", "Coconut Water", "Lime Juice"],
  },
  {
    name: "Classic Hot Cappuccino",
    img: "classic-hot-cappuccino",
    description:
      "Equal parts espresso, steamed milk, and milk foam, served hot with a perfectly balanced texture and aroma.",
    price: 4.5,
    review: {
      rating: 4.8,
      number_of_reviews: 310,
    },
    content_breakdown: {
      kcal: 110,
      grams: 240,
      proteins: "6",
      carbs: "9",
      fats: "5",
    },
    ingredients: ["Espresso", "Steamed Milk", "Milk Foam"],
  },
];

export const desserts: Dish[] = [
  {
    name: "Double Chocolate Brownie",
    img: "double-chocolate-brownie",
    description:
      "A dense, fudgy chocolate brownie loaded with dark chocolate chunks, served warm with a scoop of vanilla bean ice cream.",
    price: 8.0,
    review: {
      rating: 4.9,
      number_of_reviews: 150,
    },
    content_breakdown: {
      kcal: 550,
      grams: 180,
      proteins: "8",
      carbs: "65",
      fats: "32",
    },
    ingredients: [
      "Dark Chocolate",
      "Cocoa Powder",
      "Flour",
      "Butter",
      "Sugar",
      "Vanilla Ice Cream",
    ],
  },
  {
    name: "New York Cheesecake",
    img: "new-york-cheesecake",
    description:
      "Classic creamy cheesecake on a buttery graham cracker crust, topped with a fresh strawberry compote.",
    price: 9.5,
    review: {
      rating: 4.8,
      number_of_reviews: 230,
    },
    content_breakdown: {
      kcal: 460,
      grams: 200,
      proteins: "9",
      carbs: "42",
      fats: "29",
    },
    ingredients: [
      "Cream Cheese",
      "Graham Crackers",
      "Sugar",
      "Eggs",
      "Strawberries",
      "Butter",
    ],
  },
  {
    name: "Tiramisu",
    img: "tiramisu",
    description:
      "Elegant Italian dessert featuring layers of espresso-soaked ladyfingers and whipped mascarpone cream, dusted with cocoa.",
    price: 9.0,
    review: {
      rating: 5.0,
      number_of_reviews: 180,
    },
    content_breakdown: {
      kcal: 420,
      grams: 190,
      proteins: "7",
      carbs: "38",
      fats: "24",
    },
    ingredients: [
      "Mascarpone Cheese",
      "Ladyfingers",
      "Espresso",
      "Cocoa Powder",
      "Sugar",
      "Eggs",
    ],
  },
  {
    name: "Berry Fruit Tart",
    img: "berry-fruit-tart",
    description:
      "A crisp shortbread shell filled with vanilla pastry cream and arranged with fresh raspberries, blueberries, and blackberries.",
    price: 8.5,
    review: {
      rating: 4.7,
      number_of_reviews: 90,
    },
    content_breakdown: {
      kcal: 340,
      grams: 160,
      proteins: "5",
      carbs: "45",
      fats: "14",
    },
    ingredients: [
      "Flour",
      "Butter",
      "Pastry Cream",
      "Raspberries",
      "Blueberries",
      "Blackberries",
    ],
  },
  {
    name: "Vegan Chia Pudding",
    img: "vegan-chia-pudding",
    description:
      "Chia seeds soaked in coconut milk with a hint of maple syrup, topped with toasted coconut flakes and sliced almonds.",
    price: 7.5,
    review: {
      rating: 4.6,
      number_of_reviews: 75,
    },
    content_breakdown: {
      kcal: 290,
      grams: 220,
      proteins: "6",
      carbs: "24",
      fats: "18",
    },
    ingredients: [
      "Chia Seeds",
      "Coconut Milk",
      "Maple Syrup",
      "Almonds",
      "Coconut Flakes",
    ],
  },
];
