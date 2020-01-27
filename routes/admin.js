const router = require("express").Router();
const verify = require("./verifyToken");

const Recipe = require("../model/Recipe");

router.get("/", verify, (req, res) => {
  res.send(req.user);
});

router.get("/recipes", async (req, res) => {
  // const recipe = await Recipe.find();
  // if (!recipe) return res.status(400).send("No recipe found");

  // console.log(recipe);

  try {
    let r = Recipe.find();
    r.sort({ createdAt: -1 });

    let recipes = await r.exec();
    res.json(recipes);
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
});

router.post("/add-recipe", async (req, res) => {
  const recipe = new Recipe({
    coverPhoto: req.body.coverPhoto,
    photos: req.body.photos,
    videoUrl: req.body.videoUrl,
    name: req.body.recipeName,
    description: req.body.description,
    inspiration: req.body.inspiration,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions
  });

  try {
    const savedRecipe = await recipe.save();
    res.send({
      recipe_id: recipe._id,
      message: `${recipe.name} has been added successfully.`
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
