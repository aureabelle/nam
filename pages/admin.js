import { Fragment } from "react";

import { RecipeProvider } from "../context/recipe-context";

import AddRecipe from "../components/recipe/add-recipe";

const Admin = () => {
  return (
    <Fragment>
      <RecipeProvider>
        <div className="admin">
          <AddRecipe />
        </div>
      </RecipeProvider>
    </Fragment>
  );
};

export default Admin;
