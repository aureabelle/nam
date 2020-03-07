const router = require("express").Router();

const Recipe = require("../model/Recipe");

router.post("/:recipe_id", async (req, res) => {
  Recipe.findOne({ _id: req.params.recipe_id }, (err, recipe) => {
    if (err) return res.status(500).json({ error: err });
    if (!recipe) return res.status(404).json({ error: "recipe not found" });
    res.json(recipe);
  });
});

module.exports = router;
