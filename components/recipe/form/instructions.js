import { Fragment } from "react";

import { Form, Input, Button, Icon, Empty } from "antd";
const { TextArea } = Input;

const Instructions = ({
  instructions,

  instruction,
  handleInstructionChange,

  handleAddInstruction,
  handleEditInstruction
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
                  <span>{ins.step}</span>
                  <a onClick={event => handleEditInstruction(event, ins)}>
                    <Icon type="delete" />
                  </a>
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
          counter-reset: section;
          list-style-type: none;
          margin: 0;
          margin-bottom: 13px;
          padding: 0;
        }

        .instructions .instructions-list .instruction {
          align-items: center;
          border-bottom: 1px dotted #e0e0e0;
          display: flex;
          justify-content: space-between;
          padding: 3px 0;
        }

        .instructions .instructions-list .instruction span {
          flex: 1 0 auto;
        }

        .instructions .instructions-list .instruction::before {
          counter-increment: section;
          content: counter(section) ". ";
          margin-right: 5px;
        }
      `}</style>
    </Fragment>
  );
};

export default Instructions;
