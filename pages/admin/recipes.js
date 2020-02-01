import { Fragment, useEffect, useState } from "react";

import { Drawer, Button } from "antd";

import { RecipeProvider } from "../../context/recipe-context";

import AdminLayout from "../../components/admin/layout";
import RecipeList from "../../components/recipe/recipe-list";
import AddRecipe from "../../components/recipe/add-recipe";
import EditRecipe from "../../components/recipe/edit-recipe";
import ViewRecipe from "../../components/recipe/view-recipe";

const AdminRecipes = ({ addRecipeApi, allRecipesApi }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isViewing, setIsViewing] = useState(false);

  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState({});

  const handleAddRecipe = () => {
    setIsAdding(true);
  };

  const handleCloseAddRecipe = () => {
    setIsAdding(false);
  };

  const handleEditRecipe = (event, recipe) => {
    event.preventDefault();
    setIsEditing(true);
    setRecipe(recipe);
  };

  const handleCloseEditRecipe = () => {
    setIsEditing(false);
  };

  const handleCloseViewRecipe = () => {
    setIsViewing(false);
  };

  const handleViewProfile = (event, recipe) => {
    event.preventDefault();
    setIsViewing(true);
    setRecipe(recipe);
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
            <RecipeList
              recipes={recipes}
              handleEditRecipe={handleEditRecipe}
              handleViewProfile={handleViewProfile}
            />

            <Drawer
              width={600}
              title="Add New Recipe"
              placement="right"
              closable={false}
              onClose={handleCloseAddRecipe}
              visible={isAdding}
            >
              <AddRecipe addRecipeApi={addRecipeApi} />
            </Drawer>

            <Drawer
              width={600}
              title="Edit Recipe"
              placement="right"
              closable={false}
              onClose={handleCloseEditRecipe}
              visible={isEditing}
            >
              <EditRecipe recipe={recipe} />
            </Drawer>

            <Drawer
              width={600}
              title="View Recipe"
              placement="right"
              closable={false}
              onClose={handleCloseViewRecipe}
              visible={isViewing}
            >
              <ViewRecipe recipe={recipe} />
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
    : `${protocol}://${req.headers.host}/api/admin/add`;

  const allRecipesApi = process.browser
    ? `${protocol}://${window.location.host}/api/admin/recipes`
    : `${protocol}://${req.headers.host}/api/admin/recipes`;

  return {
    addRecipeApi,
    allRecipesApi
  };
};

export default AdminRecipes;
