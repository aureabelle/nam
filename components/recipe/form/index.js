import { Fragment } from "react";

import { Form, Button } from "antd";

import CoverPhoto from "./cover-photo";
import Photos from "./photos";
import VideoLink from "./video-link";
import Name from "./name";
import AltName from "./alt-name";
import Url from "./url";
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
  handleEditPhoto,

  videoUrl,
  handleVideoUrl,

  recipeName,
  handleRecipeNameChange,

  altName,
  handleAltNameChange,

  url,
  handleUrlChange,

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
  handleEditIngredient,

  instructions,
  instruction,
  handleInstructionChange,
  handleAddInstruction,
  handleEditInstruction,

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
            handleEditPhoto={handleEditPhoto}
          />

          <VideoLink videoUrl={videoUrl} handleVideoUrl={handleVideoUrl} />

          <Name
            recipeName={recipeName}
            handleRecipeNameChange={handleRecipeNameChange}
          />

          <AltName
            altName={altName}
            handleAltNameChange={handleAltNameChange}
          />

          <Url url={url} handleUrlChange={handleUrlChange} />

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
            handleEditIngredient={handleEditIngredient}
          />

          <Instructions
            instructions={instructions}
            instruction={instruction}
            handleInstructionChange={handleInstructionChange}
            handleAddInstruction={handleAddInstruction}
            handleEditInstruction={handleEditInstruction}
          />

          <Button type="primary" htmlType="submit">
            {submitButtonText}
          </Button>
        </Form>
      </div>
      <style jsx global>{`
        .recipe-form h6 {
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
        }
      `}</style>
    </Fragment>
  );
};

export default RecipeForm;
