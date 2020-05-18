import { Fragment } from "react";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loader = ({ tipText }) => {
  const spinner = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <Fragment>
      <div className="loader">
        <Spin indicator={spinner} tip={tipText} />
      </div>
      <style jsx>{`
        .loader {
          align-items: center;
          display: flex;
          height: 100vh;
          justify-content: center;
          width: 100%;
        }
      `}</style>
    </Fragment>
  );
};

export default Loader;
