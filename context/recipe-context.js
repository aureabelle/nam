import { useState, createContext } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = props => {
  const [cuisine, setCuisine] = useState([
    { name: "Filipino", value: "filipino" },
    { name: "Korean", value: "korean" }
  ]);

  const recipeContext = {
    cuisine,
    setCuisine
  };

  return (
    <RecipeContext.Provider value={recipeContext}>
      {props.children}
    </RecipeContext.Provider>
  );
};
