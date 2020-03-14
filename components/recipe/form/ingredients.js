import { Fragment } from "react";

import { Form, Input, Button, Icon, Empty } from "antd";

const Ingredients = ({
  ingredients,

  quantity,
  handleQuantityChange,

  ingredient,
  handleIngredientChange,

  handleAddIngredient,
  handleEditIngredient
}) => {
  return (
    <Fragment>
      <div className="ingredients">
        <h6>Ingredients</h6>
        {ingredients.length !== 0 ? (
          <ul className="ingredients-list">
            {ingredients.map((ing, index) => {
              return (
                <li key={`ingredient-${index}`} className="ingredient">
                  <span>
                    {ing.quantity} {ing.name}
                  </span>
                  <a onClick={event => handleEditIngredient(event, ing)}>
                    <Icon type="delete" />
                  </a>
                </li>
              );
            })}
          </ul>
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}

        <Form.Item>
          <div className="fields">
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
          </div>
        </Form.Item>
      </div>
      <style jsx global>{`
        .ingredients .ingredients-list {
          list-style-type: none;
          margin: 0;
          margin-bottom: 13px;
          padding: 0;
        }

        .ingredients .ingredients-list .ingredient {
          align-items: center;
          border-bottom: 1px dotted #e0e0e0;
          display: flex;
          justify-content: space-between;
          padding: 3px;
        }

        .ingredients .fields {
          align-items: center;
          display: flex;
          justify-content: space-between;
        }

        .ingredients .fields input {
          margin-right: 10px;
        }
      `}</style>
    </Fragment>
  );
};

export default Ingredients;
