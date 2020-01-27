import { Fragment } from "react";

import { Form, Input, Button } from "antd";

const Ingredients = ({
  ingredients,

  quantity,
  handleQuantityChange,

  ingredient,
  handleIngredientChange,

  handleAddIngredient
}) => {
  return (
    <Fragment>
      <div className="ingredients">
        <h6>Ingredients</h6>
        <ul>
          {ingredients.map((ing, index) => {
            return (
              <li key={`ingredient-${index}`}>
                {ing.quantity} -- {ing.name}
              </li>
            );
          })}
        </ul>

        <Form.Item>
          <Input
            type="text"
            value={quantity}
            placeholder="Amount"
            onChange={handleQuantityChange}
          />
          <Input
            type="text"
            placeholder="Ingredient"
            value={ingredient}
            onChange={handleIngredientChange}
          />
          <Button
            onClick={handleAddIngredient}
            disabled={quantity === "" || ingredient === ""}
          >
            Add ingredient
          </Button>
        </Form.Item>
      </div>
    </Fragment>
  );
};

export default Ingredients;
