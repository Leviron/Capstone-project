class RecipeClass {
  constructor(id, title, subtitle, picture) {
    if (!id || !title || !subtitle) {
      throw new Error("Id, title, subtitle and workingTime must be provided");
    }
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.picture = picture || "recipe-placeholder.png";
  }
}

const recipes = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    subtitle: "with ground beef",
    picture: "Bolognese.png",
    ingredients: [
      "500g spaghetti",
      "400g ground beef",
      "1 onion",
      "2 garlic cloves",
      "400g canned tomatoes",
      "1 tbsp tomato paste",
      "1 tsp dried oregano",
      "1 tsp dried basil",
      "Salt and pepper",
      "Olive oil",
    ],
    instructions:
      "1. Finely chop the onion and garlic, then sauté them in olive oil. Add the ground beef and cook until browned. \n2. Stir in the tomato paste, canned tomatoes, oregano, basil, salt, and pepper. Simmer for 20-30 minutes. \n3. Meanwhile, cook the spaghetti according to the package instructions. \n4. Serve the Bolognese sauce over the drained spaghetti and enjoy.",
  },
  {
    id: 2,
    picture: "caesar-salad.png",
    title: "Caesar Salad",
    subtitle: "with chicken",
    ingredients: [
      "1 head of romaine lettuce",
      "Croutons",
      "50g grated Parmesan cheese",
      "2 tbsp olive oil",
      "2 tbsp lemon juice",
      "1 tsp Worcestershire sauce",
      "1 tsp Dijon mustard",
      "1 garlic clove",
      "Salt and pepper",
    ],
    instructions:
      "1. Wash the lettuce leaves, dry them, and tear them into bite-sized pieces. \n2. Cut the garlic clove in half and rub the salad bowl with it. \n3. In the bowl, whisk together olive oil, lemon juice, Worcestershire sauce, mustard, salt, and pepper. \n4. Add the lettuce to the bowl and toss everything together. Top with croutons and grated Parmesan cheese before serving.",
  },
  {
    id: 3,
    picture: "curry.png",
    title: "Chicken Curry",
    subtitle: "with coconut milk",
    ingredients: [
      "500g chicken breast, diced",
      "1 onion",
      "2 garlic cloves",
      "1 can of coconut milk",
      "2 tbsp curry paste",
      "1 bell pepper",
      "1 carrot",
      "100g peas",
      "1 tbsp oil",
      "Salt and pepper",
    ],
    instructions:
      "1. Finely chop the onion and garlic, then sauté them in oil. Add the diced chicken and brown it. \n2. Stir in the curry paste and sauté briefly. \n3. Cut the bell pepper and carrot into small pieces and add them to the chicken. Mix everything well. \n4. Pour in the coconut milk, stir, and let it simmer over medium heat until the chicken is cooked and the sauce thickens slightly. \n5. Finally, add the peas and let it simmer for another 5 minutes. Adjust the seasoning with salt and pepper, then serve.",
  },
  {
    id: 4,
    title: "Pancakes",
    picture: "pancakes.png",
    subtitle: "with maple syrup",
    ingredients: [
      "200g all-purpose flour",
      "2 tbsp sugar",
      "1 tsp baking powder",
      "1 pinch of salt",
      "250ml milk",
      "1 egg",
      "2 tbsp melted butter",
      "Oil or butter for frying",
      "Maple syrup",
    ],
    instructions:
      "1. In a bowl, mix the flour, sugar, baking powder, and salt. \n2. Add the milk, egg, and melted butter, and whisk until you have a smooth batter. \n3. Heat some oil or butter in a pan over medium heat. Pour a small amount of batter into the pan and cook until golden brown on both sides. \n4. Serve the pancakes with maple syrup.",
  },
  {
    id: 5,
    title: "Caprese Salad",
    picture: "caprese.png",
    subtitle: "with mozzarella cheese",
    ingredients: [
      "3 tomatoes",
      "200g mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
      "Balsamic glaze",
      "Salt and pepper",
    ],
    instructions:
      "1. Slice the tomatoes and mozzarella cheese. \n2. Arrange the tomato and mozzarella slices alternately on a serving platter. \n3. Garnish with fresh basil leaves. \n4. Drizzle with olive oil, add a dash of balsamic glaze, and season with salt and pepper. Serve immediately.",
  },
];

export { RecipeClass, recipes };
