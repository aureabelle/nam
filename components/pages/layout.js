import { Fragment } from "react";

import { RecipeProvider } from "../../context/recipe-context";

import Header from "./header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <RecipeProvider>
        <div className="layout">
          <Header />

          <div className="container">{children}</div>
        </div>
      </RecipeProvider>
    </Fragment>
  );
};

export default Layout;
