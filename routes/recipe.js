const router = require("express").Router();

const Recipe = require("../model/Recipe");

router.post("/recipe", async (req, res) => {
  const url = req.body.url;

  // const recipe = await Recipe.findOne({ name: id });
  // if (!recipe) return res.status(400).send("Recipe not found");

  // console.log(recipe);
});

module.exports = router;
