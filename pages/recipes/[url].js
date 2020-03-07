import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import { RecipeContext } from "../../context/recipe-context";

import Layout from "../../components/pages/layout";

// import { recipes } from "../../data/recipes";

const Recipe = () => {
  const router = useRouter();

  const recipeContext = useContext(RecipeContext);
  const { recipes } = recipeContext;

  console.log(recipes);

  // const [recipe, setRecipe] = useState({});

  // useEffect(() => {
  //   const data = recipes.find(r => r.url === router.query.url);

  //   setRecipe(data);
  // });

  return (
    <Layout>
      <div className="recipe">
        <div>-photos-</div>

        <div className="details">
          {/* <h1>{recipe.name}</h1>
          <p>{recipe.description}</p> */}
        </div>

        <div className="ingredient">-ingredients-</div>
        <div className="procedure">-procedure-</div>
      </div>
    </Layout>
  );
};

export default Recipe;
