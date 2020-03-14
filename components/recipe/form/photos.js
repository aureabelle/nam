import { Fragment } from "react";

import { Form, Input, Button, Icon } from "antd";

const Photos = ({
  photos,
  photo,
  handlePhotoChange,
  handleAddPhoto,
  handleEditPhoto
}) => {
  return (
    <Fragment>
      <div className="photos">
        <h6>Photos</h6>

        <div className="photo-list">
          {photos.map((photo, index) => {
            return (
              <span className="photo" key={`photo-${index}`}>
                <a onClick={event => handleEditPhoto(event, photo)}>
                  <Icon type="close-circle" />
                </a>
                <img src={photo.url} />
              </span>
            );
          })}
        </div>

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
      <style jsx>{`
        .photos .photo-list {
          align-items: flex-start;
          background-color: #eaeaea;
          display: flex;
          padding: 10px;
        }

        .photos .photo-list .photo {
          align-items: flex-end;
          display: flex;
          flex-direction: column;
          margin: 5px;
          width: 100px;
        }

        .photos .photo-list .photo img {
          width: 100%;
        }
      `}</style>
    </Fragment>
  );
};

export default Photos;
