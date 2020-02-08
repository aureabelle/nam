import { Fragment } from "react";

import { Form, Select } from "antd";
const { Option } = Select;

const Cuisine = ({ inspiration, handleCuisineChange, cuisine }) => {
  return (
    <Fragment>
      <div className="cuisine">
        <h6>Cuisine</h6>
        <Form.Item>
          <Select
            showSearch
            placeholder="Select cuisine"
            optionFilterProp="children"
            defaultValue={inspiration}
            onChange={handleCuisineChange}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="">Select a cuisine</Option>
            {cuisine.map((item, index) => {
              return (
                <Option key={`cuisine-${index}`} value={item.value}>
                  {item.name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
      </div>
    </Fragment>
  );
};

export default Cuisine;
