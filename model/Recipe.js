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
  step: {
    type: String,
    required: false
  }
});

const photoSchema = new mongoose.Schema({
  url: {
    type: String,
    required: false
  }
});

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  altName: {
    type: String
  },
  url: {
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
  },
  photos: [photoSchema]
});

module.exports = mongoose.model("Recipe", recipeSchema);
