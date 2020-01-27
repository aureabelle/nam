import { Fragment } from "react";

import { Form, Input, Button } from "antd";
const { TextArea } = Input;

const Instructions = ({
  instructions,
  instruction,
  handleInstructionChange,
  handleAddInstruction
}) => {
  return (
    <Fragment>
      <div className="instructions">
        <h6>Instructions</h6>

        <ol>
          {instructions.map((ins, index) => {
            return <li key={`instruction-${index}`}>{ins.step}</li>;
          })}
        </ol>

        <Form.Item>
          <TextArea
            type="text"
            placeholder="Add instruction"
            value={instruction}
            onChange={handleInstructionChange}
          />
          <Button onClick={handleAddInstruction} disabled={instruction === ""}>
            Add instruction
          </Button>
        </Form.Item>
      </div>
    </Fragment>
  );
};

export default Instructions;
