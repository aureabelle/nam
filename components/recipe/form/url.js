import { Fragment } from "react";

import { Form, Input } from "antd";

const Url = ({ url, handleUrlChange }) => {
  return (
    <Fragment>
      <div className="url">
        <Form.Item>
          <Input
            type="text"
            placeholder="Enter clean URL (Ex. sample-dish-name)"
            value={url}
            onChange={handleUrlChange}
          />
        </Form.Item>
      </div>
    </Fragment>
  );
};

export default Url;
