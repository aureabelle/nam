const router = require("express").Router();

const Recipe = require("../model/Recipe");

router.post("/", async (req, res) => {
  console.log(req);

  // const recipe = await Recipe.findOne({ url: req.body.url });
  // if (!recipe) return res.status(400).send("Recipe does not exist");

  // console.log(recipe);

  // Recipe.findOne({ _id: req.params.recipe_id }, (err, recipe) => {

  //   if (err) return res.status(500).json({ error: err });
  //   if (!recipe) return res.status(404).json({ error: "recipe not found" });
  //   res.json(recipe);

  // });
});

module.exports = router;
