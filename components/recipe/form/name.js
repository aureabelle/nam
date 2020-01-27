import { Fragment } from "react";

import { Form, Input } from "antd";

const Name = ({ recipeName, handleRecipeNameChange }) => {
  return (
    <Fragment>
      <div className="name">
        <Form.Item>
          <Input
            type="text"
            placeholder="Enter recipe name"
            value={recipeName}
            onChange={handleRecipeNameChange}
          />
        </Form.Item>
      </div>
    </Fragment>
  );
};

export default Name;
