import { Fragment } from "react";

import { Form, Input } from "antd";

const AltName = ({ altName, handleAltNameChange }) => {
  return (
    <Fragment>
      <div className="alt-name">
        <h6>Alternative Name (English Name)</h6>
        <Form.Item>
          <Input
            type="text"
            placeholder="Enter alternative name (English name)"
            value={altName}
            onChange={handleAltNameChange}
          />
        </Form.Item>
      </div>
    </Fragment>
  );
};

export default AltName;
