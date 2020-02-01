import { Fragment } from "react";

import { Descriptions, Carousel, List } from "antd";

const ViewRecipe = ({ recipe }) => {
  return (
    <Fragment>
      <div className="view-recipe">
        <Carousel>
          <div>
            <img src={recipe.coverPhoto} />
          </div>

          {recipe.photos.map((photo, index) => {
            return (
              <div key={`photo-${index}`}>
                <img src={photo.url} />
              </div>
            );
          })}
        </Carousel>

        <Descriptions
          size="small"
          bordered
          column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
        >
          <Descriptions.Item label="Name">{recipe.name}</Descriptions.Item>

          <Descriptions.Item label="Video Embed URL">
            {recipe.videoUrl}
          </Descriptions.Item>

          <Descriptions.Item label="Cuisine">
            {recipe.inspiration}
          </Descriptions.Item>

          <Descriptions.Item label="Description">
            {recipe.description}
          </Descriptions.Item>

          <Descriptions.Item label="Ingredients">
            <List
              size="small"
              bordered
              dataSource={recipe.ingredients}
              renderItem={item => (
                <List.Item>
                  {item.quantity} {item.name}
                </List.Item>
              )}
            />
          </Descriptions.Item>

          <Descriptions.Item label="Procedure">
            <List
              size="small"
              bordered
              dataSource={recipe.instructions}
              renderItem={(item, index) => (
                <List.Item>
                  {`${index + 1}.`} {item.step}
                </List.Item>
              )}
            />
          </Descriptions.Item>
        </Descriptions>
      </div>
      <style jsx global>{`
        .view-recipe .ant-carousel .slick-slide {
          text-align: center;
          height: 315px;
          line-height: 160px;
          background: #364d79;
        }

        .view-recipe .ant-carousel .slick-slide img {
          height: auto;
          width: 100%;
        }
      `}</style>
    </Fragment>
  );
};

export default ViewRecipe;
