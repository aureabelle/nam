import { Fragment } from "react";

import Header from "./header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="layout">
        <Header />

        <div className="container">{children}</div>
      </div>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css?family=Delius+Unicase&display=swap");
      `}</style>
    </Fragment>
  );
};

export default Layout;
