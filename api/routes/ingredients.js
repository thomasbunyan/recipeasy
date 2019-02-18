const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const checkAuth = require("../middleware/check-auth");
const Ingredient = require("../models/ingredient");

const stringSimilarity = require("string-similarity");
const leven = require("leven");

const ingredients = {};
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("test.json", "utf8"));

// Get a selection of relevant recipes from a query.
router.get("/", (req, res, next) => {
  const search_query = req.query.search_query;
  const regex = new RegExp(formatQuery(search_query), "gi");
  const query = { ingredient: regex };

  Ingredient.find(query)
    .exec()
    .then((ingredients) => {
      ingredients.sort((a, b) => {
        return leven(search_query.toUpperCase(), a.ingredient) - leven(search_query.toUpperCase(), b.ingredient);
      });
      res.status(200).json({
        success: true,
        ingredients: ingredients.slice(0, 10)
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err
      });
    });
});
function formatQuery(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

// Add the ingredients.
ingredients.addIngredient = function() {
  for (let i = 1; i < data.length; i++) {
    const ing = data[i];
    var ingredient = new Ingredient({
      ingredient: ing.ingredient,
      nutrients: ing.nutrients,
      servings: {
        standard: {
          amount: ing.servings[0].standard.amount,
          uom: ing.servings[0].standard.uom
        },
        house: {
          amount: ing.servings[0].house.amount,
          uom: ing.servings[0].house.uom
        }
      }
    });
    ingredient
      .save()
      .then((e) => {})
      .catch((err) => {
        console.log("*******************Index:", i);
        console.log("Line", ing.servings[0].house);
        console.log("Line", ing.servings[0].standard);
        console.log(err);
      });
  }
};

module.exports = router;
