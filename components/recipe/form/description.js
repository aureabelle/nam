import { Fragment } from "react";

import { Form, Input } from "antd";
const { TextArea } = Input;

const Description = ({ description, handleDescriptionChange }) => {
  return (
    <Fragment>
      <div className="description">
        <Form.Item>
          <TextArea
            placeholder="Enter description"
            value={description}
            onChange={handleDescriptionChange}
            required
            rows={4}
          />
        </Form.Item>
      </div>
    </Fragment>
  );
};

export default Description;
