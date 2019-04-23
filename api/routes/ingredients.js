const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const checkAuth = require("../middleware/check-auth");
const Ingredient = require("../models/ingredient");
const leven = require("leven");

// Get a selection of relevant recipes from a query.
router.get("/", checkAuth, (req, res, next) => {
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

module.exports = router;
