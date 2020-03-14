import { Fragment, useEffect, useState } from "react";

import { RecipeProvider } from "../context/recipe-context";

const MainApp = ({ Component, pageProps, route }) => {
  return (
    <Fragment>
      <RecipeProvider>
        <Component {...pageProps} key={route} />
      </RecipeProvider>
    </Fragment>
  );
};

MainApp.getInitialProps = async ({ Component, router, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps, route: router.route };
};

export default MainApp;
