import { Fragment, useEffect, useState } from "react";

import { Drawer, Button } from "antd";

import { RecipeProvider } from "../../context/recipe-context";

import AdminLayout from "../../components/admin/layout";
import RecipeList from "../../components/recipe/recipe-list";
import AddRecipe from "../../components/recipe/add-recipe";

const AdminRecipes = ({ addRecipeApi, allRecipesApi }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = () => {
    setIsAdding(true);
  };

  const handleCloseAddRecipe = () => {
    setIsAdding(false);
  };

  const getAllRecipes = async () => {
    try {
      await fetch(allRecipesApi)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setRecipes(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <Fragment>
      <AdminLayout>
        <RecipeProvider>
          <div className="admin-recipes">
            <h1>Recipes</h1>
            <Button type="primary" onClick={handleAddRecipe}>
              Add Recipe
            </Button>
            <RecipeList recipes={recipes} />

            <Drawer
              width={520}
              title="Add New Recipe"
              placement="right"
              closable={false}
              onClose={handleCloseAddRecipe}
              visible={isAdding}
            >
              <AddRecipe addRecipeApi={addRecipeApi} />
            </Drawer>
          </div>
        </RecipeProvider>
      </AdminLayout>
    </Fragment>
  );
};

AdminRecipes.getInitialProps = async ({ req }) => {
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

  const addRecipeApi = process.browser
    ? `${protocol}://${window.location.host}/api/admin/add-recipe`
    : `${protocol}://${req.headers.host}/api/admin/add-recipe`;

  const allRecipesApi = process.browser
    ? `${protocol}://${window.location.host}/api/admin/recipes`
    : `${protocol}://${req.headers.host}/api/admin/recipes`;

  // const res = await fetch(allRecipesApi);
  // const data = await res.json();

  // console.log(res);

  // console.log(`Show data fetched. Count: ${data.length}`);

  return {
    // recipes: data.map(entry => entry.recipe),
    addRecipeApi,
    allRecipesApi
  };
};

export default AdminRecipes;
