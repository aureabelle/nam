import { Fragment } from "react";

import { Form, Button } from "antd";

import CoverPhoto from "./cover-photo";
import Photos from "./photos";
import VideoLink from "./video-link";
import Name from "./name";
import Description from "./description";
import Cuisine from "./cuisine";
import Ingredients from "./ingredients";
import Instructions from "./instructions";

const RecipeForm = ({
  handleSubmit,
  coverPhoto,
  handleCoverPhotoChange,

  photos,
  photo,
  handlePhotoChange,
  handleAddPhoto,

  videoUrl,
  handleVideoUrl,

  recipeName,
  handleRecipeNameChange,

  description,
  handleDescriptionChange,

  inspiration,
  handleCuisineChange,
  cuisine,

  ingredients,
  quantity,
  handleQuantityChange,
  ingredient,
  handleIngredientChange,
  handleAddIngredient,

  instructions,
  instruction,
  handleInstructionChange,
  handleAddInstruction,

  submitButtonText
}) => {
  return (
    <Fragment>
      <div className="recipe-form">
        <Form onSubmit={handleSubmit}>
          <CoverPhoto
            coverPhoto={coverPhoto}
            handleCoverPhotoChange={handleCoverPhotoChange}
          />

          <Photos
            photos={photos}
            photo={photo}
            handlePhotoChange={handlePhotoChange}
            handleAddPhoto={handleAddPhoto}
          />

          <VideoLink videoUrl={videoUrl} handleVideoUrl={handleVideoUrl} />

          <Name
            recipeName={recipeName}
            handleRecipeNameChange={handleRecipeNameChange}
          />

          <Description
            description={description}
            handleDescriptionChange={handleDescriptionChange}
          />

          <Cuisine
            inspiration={inspiration}
            handleCuisineChange={handleCuisineChange}
            cuisine={cuisine}
          />

          <Ingredients
            ingredients={ingredients}
            quantity={quantity}
            handleQuantityChange={handleQuantityChange}
            ingredient={ingredient}
            handleIngredientChange={handleIngredientChange}
            handleAddIngredient={handleAddIngredient}
          />

          <Instructions
            instructions={instructions}
            instruction={instruction}
            handleInstructionChange={handleInstructionChange}
            handleAddInstruction={handleAddInstruction}
          />

          <Button type="primary" htmlType="submit">
            {submitButtonText}
          </Button>
        </Form>
      </div>
    </Fragment>
  );
};

export default RecipeForm;
