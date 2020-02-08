import { Fragment } from "react";

import { Form, Input, Icon } from "antd";

const CoverPhoto = ({ coverPhoto, handleCoverPhotoChange }) => {
  return (
    <Fragment>
      <div className="cover-photo">
        <h6>Cover Photo</h6>
        <div className="preview">
          <img src={coverPhoto} />
        </div>
        <Form.Item>
          <Input
            prefix={
              <Icon type="picture" style={{ color: "rgba(0,0,0,.25)" }} />
            }
            type="text"
            placeholder="Cover photo URL"
            value={coverPhoto}
            onChange={handleCoverPhotoChange}
            required
          />
        </Form.Item>
      </div>
      <style jsx>{`
        .cover-photo .preview {
          height: 200px;
        }

        .cover-photo .preview img {
          height: 100%;
        }
      `}</style>
    </Fragment>
  );
};

export default CoverPhoto;
