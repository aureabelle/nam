const router = require("express").Router();
const verify = require("./verifyToken");

const Recipe = require("../model/Recipe");

router.get("/", verify, (req, res) => {
  res.send(req.user);
});

router.post("/add-recipe", async (req, res) => {
  const recipe = new Recipe({
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    inspiration: req.body.inspiration,
    description: req.body.description,
    coverPhoto: req.body.coverPhoto,
    videoUrl: req.body.videoUrl
  });

  try {
    const savedRecipe = await recipe.save();
    res.send("Recipe added!");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
