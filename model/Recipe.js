const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  }
});

const instructionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ingredients: [ingredientSchema],
  instructions: [instructionSchema],
  description: {
    type: String,
    required: true
  },
  inspiration: {
    type: String
  },
  coverPhoto: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("Recipe", recipeSchema);
