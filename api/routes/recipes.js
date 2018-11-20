const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

const Recipe = require("../models/recipe");

// Add recipe
router.post("/", checkAuth, (req, res, next) => {
  let recipe = new Recipe({
    title: req.body.title,
    description: req.body.description,
    public: req.body.public,
    mealType: req.body.mealType,
    prepTime: req.body.prepTime,
    cookTime: req.body.cookTime,
    difficulty: req.body.difficulty,
    servings: req.body.servings,
    ingredients: req.body.ingredients,
    method: req.body.method,
    author: req.userData.user.username,
    date: new Date(),
    score: 0,
    views: 0
  });
  recipe
    .save()
    .then((doc) => {
      res.status(201).json({
        success: true,
        message: "Recipe added",
        recipe: doc
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err
      });
    });
});

// Get all public recipes.
router.get("/", checkAuth, (req, res, next) => {
  Recipe.find({ public: true })
    .exec()
    .then((recipes) => {
      res.status(200).json({
        success: true,
        recipes: recipes
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err
      });
    });
});

// Get all public recipes from a selection.
router.get("/selection", checkAuth, (req, res, next) => {
  const selectedRecipes = req.query.recipes;
  Recipe.find({ $and: [{ _id: { $in: selectedRecipes } }, { public: true }] })
    .exec()
    .then((recipes) => {
      res.status(200).json({
        success: true,
        recipes: recipes
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err
      });
    });
});

// Get the recipe and update the views.
router.get("/:id", checkAuth, (req, res, next) => {
  const user = req.userData.user.username;
  const query = { _id: req.params.id };
  const update = { $inc: { views: 1 } };
  Recipe.findOneAndUpdate(query, update)
    .exec()
    .then((recipe) => {
      if (recipe.public === false) {
        if (recipe.author !== user) {
          return res.status(403).json({
            success: false,
            message: "Private recipe"
          });
        }
      }
      res.status(200).json({
        success: true,
        recipe: recipe
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err
      });
    });
});

router.patch("/:id/:vote", checkAuth, (req, res, next) => {
  const query = { _id: req.params.id };
  const vote = parseInt(req.params.vote);
  let update = {};
  if ([2, -2, -1, 1].indexOf(vote) >= 0) {
    update = { $inc: { score: vote } };
  } else {
    return res.status(400).json({
      success: false,
      error: {
        message: "No vote specified"
      }
    });
  }
  Recipe.findOneAndUpdate(query, update)
    .exec()
    .then(() => {
      res.status(200).json({
        success: true
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err
      });
    });
});

module.exports = router;
