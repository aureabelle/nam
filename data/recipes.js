const recipes = [
  {
    photos: {
      cover:
        "https://res.cloudinary.com/dbrwapvpj/image/upload/v1578176407/nam/dishes/aroz-caldo/cover_xs8q4c.jpg",
      additional_photos: []
    },

    video: "https://www.youtube.com/embed/0M9u-NtnU-U",
    name: "Chicken Aroz Caldo with Coconut Milk",
    alt_name: "Rice Pourridge with Coconut Milk",
    url: "chicken-aroz-caldo-rice-pourridge-with-coconut-milk",
    description: "This is the description",
    cuisine: "filipino",
    ingredients: [
      { quantity: "2-3 tbsp", name: "cooking oil" },
      { quantity: "3 tbsp", name: "fish sauce" },
      { quantity: "1/4 tsp", name: "ground black pepper" },
      { quantity: "2-3 stalks", name: "green onions, chopped" },
      { quantity: "thumb-sized", name: "ginger, julienne" },
      { quantity: "1/2 medium-sized", name: "onion, chopped" },
      { quantity: "3-5 cloves", name: "garlic, minced" },
      { quantity: "1/4 cup", name: "saffron" },
      { quantity: "6 hard-boiled", name: "eggs, peeled" },
      { quantity: "1/2 cup (200 mL)", name: "coconut milk" },
      { quantity: "1/2 kg", name: "chicken drumsticks" },
      { quantity: "1 cup", name: "glutinous rice" },
      { quantity: "5-6 cups", name: "chicken broth or water" },
      { quantity: "1 cube", name: "chicken bouillon cube (optional)" }
    ],
    procedure: [
      { step: "In a large pot over medium heat, add cooking oil." },
      { step: "Saute onion, garlic and garlic to release flavour." },
      {
        step:
          "Then, add chicken drumsticks to the pan and stir-fry until it is no longer pink."
      },
      {
        step:
          "Add fish sauce, ground black pepper and chicken bouillon cube. Give it a stir."
      },
      { step: "Add glutinous rice and stir to incorporate the taste. " },
      { step: "Add chicken broth (or water if not available)" },
      {
        step:
          "Cover and simmer over medium heat for about 30 minutes or until the consistency of light cream soup has been reached."
      },
      {
        step: "Add coconut milk and saffron. Stir occassionally while cooking."
      },
      {
        step: "Finally, add hard-boiled eggs into the mixture."
      },
      {
        step: "Serve while hot and garnish with chopped green onions. Enjoy!"
      }
    ]
  }
];

const _recipes = recipes;
export { _recipes as recipes };
