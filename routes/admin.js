const router = require("express").Router();
const verify = require("./verifyToken");

const Recipe = require("../model/Recipe");

router.get("/", verify, (req, res) => {
  res.send(req.user);
});

router.get("/recipes", async (req, res) => {
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
    altName: req.body.altName,
    url: req.body.url,
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

router.post("/edit-recipe", async (req, res) => {
  const recipe = await Recipe.findOne({ _id: req.body._id });
  if (!recipe) {
    return res.status(400).send("Recipe not found");
  } else {
    if (req.body.coverPhoto) recipe.coverPhoto = req.body.coverPhoto;
    if (req.body.photos) recipe.photos = req.body.photos;
    if (req.body.videoUrl) recipe.videoUrl = req.body.videoUrl;
    if (req.body.name) recipe.name = req.body.name;
    if (req.body.altName) recipe.altName = req.body.altName;
    if (req.body.url) recipe.url = req.body.url;
    if (req.body.description) recipe.description = req.body.description;
    if (req.body.inspiration) recipe.inspiration = req.body.inspiration;
    if (req.body.ingredients) recipe.ingredients = req.body.ingredients;
    if (req.body.instructions) recipe.instructions = req.body.instructions;

    recipe.save(err => {
      if (err) res.status(500).json({ error: "Recipe failed to update" });
      res.send({ message: "Recipe updated!" });
    });
  }

  //
  // const savedRecipe = await recipe.save();

  // res.send({ message: "Recipe updated!" });
  // const recipe = new Recipe({
  //   coverPhoto: req.body.coverPhoto,
  //   photos: req.body.photos,
  //   videoUrl: req.body.videoUrl,
  //   name: req.body.recipeName,
  //   altName: req.body.altName,
  //   url: req.body.url,
  //   description: req.body.description,
  //   inspiration: req.body.inspiration,
  //   ingredients: req.body.ingredients,
  //   instructions: req.body.instructions
  // });

  // try {

  // } catch (error) {
  //   console.log(error);
  //   res.status(400).send(error);
  // }

  // const _id = req.body._id;

  // Recipe.findById(req.body._id, (error, recipe) => {
  //   if (err) return res.status(500).json({ error: "database failure" });
  //   if (!recipe) return res.status(404).json({ error: "book not found" });

  //   if (req.body.altName) recipe.altName = req.body.altName;

  //   recipe.save(err => {
  //     if (err) res.status(500).json({ error: "failed to update" });
  //     res.json({ message: "Recipe updated" });
  //   });
  // });

  // Check if the recipe exists in the database
  // const recipe = await Recipe.findById(_id);
  // if (!recipe) return res.status(400).send("Recipe not found");
  // console.log(recipe);
  // const recipe = new Recipe({
  //   coverPhoto: req.body.coverPhoto,
  //   photos: req.body.photos,
  //   videoUrl: req.body.videoUrl,
  //   name: req.body.recipeName,
  //   altName: req.body.altName,
  //   url: req.body.url,
  //   description: req.body.description,
  //   inspiration: req.body.inspiration,
  //   ingredients: req.body.ingredients,
  //   instructions: req.body.instructions
  // });

  // try {
  //   const savedRecipe = await recipe.save();
  //   res.send({ message: "Recipe updated!" });
  // } catch (error) {
  //   console.log(error);
  //   res.status(400).send(error);
  // }
});

module.exports = router;
