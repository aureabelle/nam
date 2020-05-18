import { Fragment } from "react";

import Navigation from "./navigation";
import Credits from "./credits";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="layout">
        <Navigation />

        <div className="container">{children}</div>

        <Credits />
      </div>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css?family=Delius+Unicase&display=swap");

        .layout {
          padding-bottom: 70px;
        }

        @media screen and (min-width: 640px) {
          .layout {
            padding-bottom: 0;
            padding-top: 85px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Layout;
