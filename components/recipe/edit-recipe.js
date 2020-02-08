import { Fragment, useState, useEffect, useContext } from "react";
import fetch from "isomorphic-unfetch";

import { RecipeContext } from "../../context/recipe-context";

import RecipeForm from "./form";

const EditRecipe = ({ recipe, editRecipeApi }) => {
  const recipeContext = useContext(RecipeContext);
  const { cuisine } = recipeContext;

  const [coverPhoto, setCoverPhoto] = useState("");

  const [photos, setPhotos] = useState([]);
  const [photo, setPhoto] = useState("");

  const [videoUrl, setVideoUrl] = useState("");

  const [recipeName, setRecipeName] = useState("");
  const [altName, setAltName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [inspiration, setInspiration] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [ingredient, setIngredient] = useState("");

  const [instructions, setInstructions] = useState([]);
  const [instruction, setInstruction] = useState("");

  const handleCoverPhotoChange = event => {
    setCoverPhoto(event.target.value);
  };

  const handlePhotoChange = event => {
    setPhoto(event.target.value);
  };

  const handleAddPhoto = event => {
    event.preventDefault();

    if (photo !== "") {
      const photoObj = {
        url: photo
      };

      setPhotos([...photos, photoObj]);
      setPhoto("");
    }
  };

  const handleEditPhoto = (event, photo) => {
    event.preventDefault();
    const photoList = photos.filter(p => p !== photo);
    setPhotos(photoList);
  };

  const handleVideoUrl = event => {
    setVideoUrl(event.target.value);
  };

  const handleRecipeNameChange = event => {
    setRecipeName(event.target.value);
  };

  const handleAltNameChange = event => {
    setAltName(event.target.value);
  };

  const handleUrlChange = event => {
    setUrl(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  const handleCuisineChange = value => {
    if (value !== "") {
      setInspiration(value);
    }
  };

  const handleQuantityChange = event => {
    setQuantity(event.target.value);
  };

  const handleIngredientChange = event => {
    setIngredient(event.target.value);
  };

  const handleAddIngredient = event => {
    event.preventDefault();

    if (ingredient !== "" && quantity !== "") {
      const ingObj = {
        name: ingredient,
        quantity
      };

      setIngredients([...ingredients, ingObj]);
      setQuantity("");
      setIngredient("");
    }
  };

  const handleEditIngredient = (event, ingredient) => {
    event.preventDefault();

    const ingList = ingredients.filter(i => i !== ingredient);
    setIngredients(ingList);
  };

  const handleInstructionChange = event => {
    setInstruction(event.target.value);
  };

  const handleAddInstruction = event => {
    event.preventDefault();

    if (instruction !== "") {
      const instObj = {
        step: instruction
      };

      setInstructions([...instructions, instObj]);
      setInstruction("");
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await fetch(editRecipeApi, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          coverPhoto,
          photos,
          videoUrl,
          recipeName,
          altName,
          url,
          description,
          inspiration,
          ingredients,
          instructions
        })
      });
    } catch (error) {
      const { response } = error;
      console.log("something went wrong");
      throw new Error(error);
    }
  };

  useEffect(() => {
    if (recipe) {
      setCoverPhoto(recipe.coverPhoto);
      setPhotos(recipe.photos);
      setVideoUrl(recipe.videoUrl);
      setRecipeName(recipe.name);
      setAltName(recipe.altName);
      setUrl(recipe.url);
      setDescription(recipe.description);
      setInspiration(recipe.inspiration);
      setIngredients(recipe.ingredients);
      setInstructions(recipe.instructions);
    }
  }, [recipe, setCoverPhoto]);

  return (
    <Fragment>
      <div className="edit-recipe">
        <RecipeForm
          handleSubmit={handleSubmit}
          coverPhoto={coverPhoto}
          handleCoverPhotoChange={handleCoverPhotoChange}
          photos={photos}
          photo={photo}
          handlePhotoChange={handlePhotoChange}
          handleAddPhoto={handleAddPhoto}
          handleEditPhoto={handleEditPhoto}
          videoUrl={videoUrl}
          handleVideoUrl={handleVideoUrl}
          recipeName={recipeName}
          handleRecipeNameChange={handleRecipeNameChange}
          altName={altName}
          handleAltNameChange={handleAltNameChange}
          url={url}
          handleUrlChange={handleUrlChange}
          description={description}
          handleDescriptionChange={handleDescriptionChange}
          inspiration={inspiration}
          handleCuisineChange={handleCuisineChange}
          cuisine={cuisine}
          ingredients={ingredients}
          quantity={quantity}
          handleQuantityChange={handleQuantityChange}
          ingredient={ingredient}
          handleIngredientChange={handleIngredientChange}
          handleAddIngredient={handleAddIngredient}
          handleEditIngredient={handleEditIngredient}
          instructions={instructions}
          instruction={instruction}
          handleInstructionChange={handleInstructionChange}
          handleAddInstruction={handleAddInstruction}
          submitButtonText="Update recipe"
        />
      </div>
    </Fragment>
  );
};

export default EditRecipe;
