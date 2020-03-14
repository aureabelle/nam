import { Fragment } from "react";

import { Form, Input } from "antd";

const VideoLink = ({ videoUrl, handleVideoUrl }) => {
  return (
    <Fragment>
      <div className="video-link">
        <h6>Video Link</h6>
        <Form.Item>
          <Input
            type="text"
            placeholder="Enter video embed URL"
            value={videoUrl}
            onChange={handleVideoUrl}
          />
        </Form.Item>
      </div>
    </Fragment>
  );
};

export default VideoLink;
