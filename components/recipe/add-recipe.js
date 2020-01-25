import { Fragment, useContext, useState } from "react";

import { RecipeContext } from "../../context/recipe-context";

const AddRecipe = () => {
  const recipeContext = useContext(RecipeContext);
  const { cuisine } = recipeContext;

  const [coverPhoto, setCoverPhoto] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [recipeName, setRecipeName] = useState("");
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

  const handleVideoUrl = event => {
    setVideoUrl(event.target.value);
  };

  const handleRecipeNameChange = event => {
    setRecipeName(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  const handleCuisineChange = event => {
    setInspiration(event.target.value);
  };

  const handleQuantityChange = event => {
    setQuantity(event.target.value);
  };

  const handleIngredientChange = event => {
    setIngredient(event.target.value);
  };

  const handleAddIngredient = event => {
    event.preventDefault();

    const ingObj = {
      name: ingredient,
      quantity
    };

    setIngredients([...ingredients, ingObj]);
    setQuantity("");
    setIngredient("");
  };

  const handleInstructionChange = event => {
    setInstruction(event.target.value);
  };

  const handleAddInstruction = event => {
    event.preventDefault();
    setInstructions([...instructions, instruction]);
    setInstruction("");
  };

  const handleSubmit = event => {
    event.preventDefault();

    console.log(coverPhoto);
    console.log(videoUrl);
    console.log(recipeName);
    console.log(description);
    console.log(inspiration);

    console.log(ingredients);

    console.log(instructions);
  };

  return (
    <Fragment>
      <div className="add-recipe">
        <h1>Add a Recipe</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="cover-photo">Cover Photo</label>
          <input
            type="text"
            placeholder="Enter cover photo URL"
            value={coverPhoto}
            onChange={handleCoverPhotoChange}
          />
          <br />

          <label htmlFor="video">Video URL</label>
          <input
            type="text"
            placeholder="Enter video URL"
            id="video"
            value={videoUrl}
            onChange={handleVideoUrl}
          />
          <br />

          <label htmlFor="recipe-name">Recipe Name</label>
          <input
            type="text"
            placeholder="Enter recipe name"
            id="recipe-name"
            value={recipeName}
            onChange={handleRecipeNameChange}
          />
          <br />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
          <br />

          <label htmlFor="cuisine">Cuisine</label>
          <select
            id="cuisine"
            defaultValue={inspiration}
            onChange={handleCuisineChange}
          >
            <option value="">Select Cuisine</option>

            {cuisine.map((item, index) => {
              return (
                <option key={`cuisine-${index}`} value={item.value}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <br />

          <label>Ingredients</label>
          <br />
          <ul>
            {ingredients.map((ing, index) => {
              return (
                <li key={`ingredient-${index}`}>
                  {ing.quantity} -- {ing.name}
                </li>
              );
            })}
          </ul>
          <br />

          <input type="text" value={quantity} onChange={handleQuantityChange} />
          <input
            type="text"
            placeholder="Ingredient"
            value={ingredient}
            onChange={handleIngredientChange}
          />
          <button onClick={handleAddIngredient}>Add ingredient</button>
          <br />

          <label>Instructions</label>
          <br />
          <ol>
            {instructions.map((ins, index) => {
              return <li key={`instruction-${index}`}>{ins}</li>;
            })}
          </ol>
          <br />

          <input
            type="text"
            placeholder="Add instruction"
            value={instruction}
            onChange={handleInstructionChange}
          />
          <button onClick={handleAddInstruction}>Add instruction</button>
          <br />

          <input type="submit" value="Add recipe" />
        </form>
      </div>
    </Fragment>
  );
};

export default AddRecipe;
