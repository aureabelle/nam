import { Fragment } from "react";

import { Table, Divider, Icon } from "antd";

const RecipeList = ({ recipes, handleViewProfile, handleEditRecipe }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Cuisine",
      dataIndex: "cuisine"
    },
    {
      title: "",
      dataIndex: "",
      render: record => (
        <span>
          <a onClick={event => handleViewProfile(event, record)}>
            <Icon type="profile" />
          </a>
          <Divider type="vertical" />
          <a onClick={event => handleEditRecipe(event, record)}>
            <Icon type="edit" />
          </a>
        </span>
      )
    }
  ];

  let data = [];
  if (recipes.length !== 0) {
    recipes.map((recipe, index) => {
      let rcp = {};

      rcp.key = index;
      rcp.name = recipe.name;
      rcp.cuisine = recipe.inspiration;
      rcp._id = recipe._id;
      rcp.coverPhoto = recipe.coverPhoto;
      rcp.photos = recipe.photos;
      rcp.videoUrl = recipe.videoUrl;
      rcp.description = recipe.description;
      rcp.ingredients = recipe.ingredients;
      rcp.instructions = recipe.instructions;

      data.push(rcp);
    });
  }

  return (
    <Fragment>
      <div className="recipe-list">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 50 }}
          scroll={{ y: 240 }}
        />
      </div>
      <style jsx>{``}</style>
    </Fragment>
  );
};

export default RecipeList;
