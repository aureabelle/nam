import { Fragment } from "react";

import { Form, Input, Button, Empty } from "antd";
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

        {instructions.length !== 0 ? (
          <ol className="instructions-list">
            {instructions.map((ins, index) => {
              return (
                <li key={`instruction-${index}`} className="instruction">
                  {ins.step}
                </li>
              );
            })}
          </ol>
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}

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
      <style jsx>{`
        .instructions .instructions-list {
          margin: 0;
          margin-bottom: 13px;
          margin-left: 20px;
          padding: 0;
        }

        .instructions .instructions-list .instruction {
          border-bottom: 1px dotted #e0e0e0;
          padding: 3px 0;
        }
      `}</style>
    </Fragment>
  );
};

export default Instructions;
