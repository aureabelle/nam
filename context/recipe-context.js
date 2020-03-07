import { useState, createContext } from "react";
import { recipes } from "../data/recipes";

export const RecipeContext = createContext();

export const RecipeProvider = props => {
  const [recipes, setRecipes] = useState(recipes);

  const [cuisine, setCuisine] = useState([
    { name: "Filipino", value: "filipino" },
    { name: "Korean", value: "korean" }
  ]);

  const recipeContext = {
    recipes,
    setRecipes,

    cuisine,
    setCuisine
  };

  return (
    <RecipeContext.Provider value={recipeContext}>
      {props.children}
    </RecipeContext.Provider>
  );
};
