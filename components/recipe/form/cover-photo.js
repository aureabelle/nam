import { Fragment } from "react";

import { Form, Input, Icon } from "antd";

const CoverPhoto = ({ coverPhoto, handleCoverPhotoChange }) => {
  return (
    <Fragment>
      <div className="cover-photo">
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
    </Fragment>
  );
};

export default CoverPhoto;
