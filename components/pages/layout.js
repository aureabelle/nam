import { Fragment } from "react";

import Header from "./header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="layout">
        <Header />

        <div className="container">{children}</div>
      </div>
    </Fragment>
  );
};

export default Layout;
