const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");
const Recipe = require("../models/recipe");

// Add recipe
router.post("/addRecipe", (req, res, next) => {
  let newRecipe = new Recipe({
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
    author: req.body.author,
    timeStamp: req.body.timeStamp,
    date: req.body.date,
    score: req.body.score,
    views: req.body.views
  });
  console.log(newRecipe);
  Recipe.addRecipe(newRecipe, (err, usr) => {
    if (err) {
      console.log(err);
      res.json({ success: false, msg: "Failed to add recipe" });
    } else {
      res.json({ success: true, msg: "Recipe added", id: usr._id });
    }
  });
});

router.get("/getRecipes", (req, res) => {
  Recipe.getRecipes((err, recipes) => {
    if (err) {
      res.json({ success: false, recipes: "failed to get recipes" });
    } else {
      res.json({ success: true, recipes: recipes });
    }
  });
});

router.get("/getRecipesFromSelection", (req, res) => {
  const selectedRecipes = req.query.selection;
  Recipe.getRecipesFromSelection(selectedRecipes, (err, recipes) => {
    if (err) {
      res.json({ success: false, recipes: "failed to get recipes" });
    } else {
      res.json({ success: true, recipes: recipes });
    }
  });
});

router.get("/getRecipeById", (req, res) => {
  let id = req.query.id;
  let update = req.query.update;
  Recipe.getRecipeById(id, update, (err, recipe) => {
    if (err) {
      res.json({ success: false, recipe: "failed to get recipe" });
    } else {
      res.json({ success: true, recipe: recipe });
    }
  });
});

router.post("/castVote", (req, res) => {
  let id = req.body.id;
  let vote = req.body.voteType;
  Recipe.castVote(id, vote, (err, recipe) => {
    if (err) {
      res.json({ success: false, recipe: "failed to cast vote" });
    } else {
      res.json({ success: true, recipe: recipe });
    }
  });
});

module.exports = router;
