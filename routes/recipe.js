const router = require("express").Router();

const Recipe = require("../model/Recipe");

router.post("/recipe", async (req, res) => {
  // const url = req.body.url;

  console.log(req);

  // const recipe = await Recipe.findOne({ url });
  // if (!recipe) return res.status(400).send("Recipe not found");
});

module.exports = router;
