import { Fragment, useEffect, useState, useContext } from "react";

import { Drawer, Button } from "antd";

import { RecipeContext } from "../../context/recipe-context";

import AdminLayout from "../../components/admin/layout";
import RecipeList from "../../components/recipe/recipe-list";
import AddRecipe from "../../components/recipe/add-recipe";
import EditRecipe from "../../components/recipe/edit-recipe";
import ViewRecipe from "../../components/recipe/view-recipe";

const AdminRecipes = ({ addRecipeApi, editRecipeApi, allRecipesApi }) => {
  const recipeContext = useContext(RecipeContext);
  const { recipes, setRecipes } = recipeContext;

  const [isAdding, setIsAdding] = useState(false);
  const [isViewing, setIsViewing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [recipe, setRecipe] = useState({});

  const handleAddRecipe = () => {
    setIsAdding(true);
  };

  const handleCloseAddRecipe = () => {
    setIsAdding(false);
  };

  const handleEditRecipe = (event, record) => {
    event.preventDefault();
    setIsEditing(true);
    setRecipe(record);
    console.log(record);
  };

  const handleCloseEditRecipe = () => {
    setIsEditing(false);
  };

  const handleCloseViewRecipe = () => {
    setIsViewing(false);
  };

  const handleViewProfile = (event, record) => {
    event.preventDefault();
    setIsViewing(true);
    setRecipe(record);
    console.log(record);
  };

  const getAllRecipes = async () => {
    try {
      await fetch(allRecipesApi)
        .then(res => res.json())
        .then(data => {
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
        <div className="admin-recipes">
          <div className="header">
            <h1>Recipes</h1>
            <Button type="primary" onClick={handleAddRecipe}>
              Add Recipe
            </Button>
          </div>

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
            <AddRecipe
              addRecipeApi={addRecipeApi}
              setIsAdding={setIsAdding}
              getAllRecipes={getAllRecipes}
            />
          </Drawer>

          <Drawer
            width={600}
            title="Edit Recipe"
            placement="right"
            closable={false}
            onClose={handleCloseEditRecipe}
            visible={isEditing}
          >
            <EditRecipe
              recipe={recipe}
              setRecipe={setRecipe}
              getAllRecipes={getAllRecipes}
              editRecipeApi={editRecipeApi}
              setIsEditing={setIsEditing}
            />
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
      </AdminLayout>
      <style jsx>{`
        .admin-recipes .header {
          align-items: center;
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
      `}</style>
    </Fragment>
  );
};

AdminRecipes.getInitialProps = async ({ req }) => {
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

  const addRecipeApi = process.browser
    ? `${protocol}://${window.location.host}/api/admin/add-recipe`
    : `${protocol}://${req.headers.host}/api/admin/add-recipe`;

  const editRecipeApi = process.browser
    ? `${protocol}://${window.location.host}/api/admin/edit-recipe`
    : `${protocol}://${req.headers.host}/api/admin/edit-recipe`;

  const allRecipesApi = process.browser
    ? `${protocol}://${window.location.host}/api/admin/recipes`
    : `${protocol}://${req.headers.host}/api/admin/recipes`;

  return {
    addRecipeApi,
    editRecipeApi,
    allRecipesApi
  };
};

export default AdminRecipes;
