import { Fragment } from "react";

import { RecipeProvider } from "../context/recipe-context";

import AddRecipe from "../components/recipe/add-recipe";

const Admin = ({ apiUrl }) => {
  return (
    <Fragment>
      <RecipeProvider>
        <div className="admin">
          <AddRecipe apiUrl={apiUrl} />
        </div>
      </RecipeProvider>
    </Fragment>
  );
};

Admin.getInitialProps = async ({ req }) => {
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

  const apiUrl = process.browser
    ? `${protocol}://${window.location.host}/api/admin/add-recipe`
    : `${protocol}://${req.headers.host}/api/admin/add-recipe`;

  return { apiUrl };
};

export default Admin;
