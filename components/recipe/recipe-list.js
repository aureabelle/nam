import { Fragment, useState, useEffect } from "react";

import { Table, Divider, Icon } from "antd";

const RecipeList = ({ recipes, handleViewProfile, handleEditRecipe }) => {
  let data = [];
  if (recipes.length !== 0) {
    recipes.map((recipe, index) => {
      let rcp = {};

      rcp.key = index;
      rcp.coverPhoto = recipe.coverPhoto;
      rcp.photos = recipe.photos;
      rcp.videoUrl = recipe.videoUrl;
      rcp.name = recipe.name;
      rcp.altName = recipe.altName;
      rcp.url = recipe.url;
      rcp.description = recipe.description;
      rcp.inspiration = recipe.inspiration;
      rcp.ingredients = recipe.ingredients;
      rcp.instructions = recipe.instructions;
      rcp._id = recipe._id;

      data.push(rcp);
    });
  }

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
      render: record => {
        return (
          <span>
            <a onClick={event => handleViewProfile(event, record)}>
              <Icon type="profile" />
            </a>
            <Divider type="vertical" />
            <a onClick={event => handleEditRecipe(event, record)}>
              <Icon type="edit" />
            </a>
          </span>
        );
      }
    }
  ];

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
