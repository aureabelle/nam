import { Fragment } from "react";

import { Form, Input, Button } from "antd";

const Photos = ({ photos, photo, handlePhotoChange, handleAddPhoto }) => {
  return (
    <Fragment>
      <div className="photos">
        <h6>Photos</h6>

        <ul>
          {photos.map((photo, index) => {
            return <li key={`photo-${index}`}>{photo.url}</li>;
          })}
        </ul>

        <Form.Item>
          <Input
            type="text"
            value={photo}
            placeholder="Enter photo URL"
            onChange={handlePhotoChange}
          />
          <Button onClick={handleAddPhoto} disabled={photo === ""}>
            Add photo
          </Button>
        </Form.Item>
      </div>
    </Fragment>
  );
};

export default Photos;
