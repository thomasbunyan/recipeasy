const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../config/database");

//Recipe schema
const RecipeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  public: {
    type: Boolean,
    required: true
  },
  mealType: {
    type: String,
    required: true
  },
  prepTime: {
    type: String,
    required: true
  },
  cookTime: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  },
  servings: {
    type: String,
    required: true
  },
  ingredients: {
    type: Array,
    required: true
  },
  method: {
    type: Array,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  timeStamp: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  views: {
    type: Number,
    required: true
  }
});

const Recipe = (module.exports = mongoose.model("Recipe", RecipeSchema));

module.exports.getRecipeById = function(id, update, callback) {
  if (update) {
    Recipe.findByIdAndUpdate(id, { $inc: { views: 1 } }, callback);
  } else {
    Recipe.findById(id, callback);
  }
};

module.exports.getRecipes = function(callback) {
  Recipe.find({}, (err, recipes) => {
    callback(err, recipes);
  });
};

module.exports.getRecipesFromSelection = function(selectedRecipes, callback) {
  Recipe.find({ _id: { $in: selectedRecipes } }, callback);
};

module.exports.addRecipe = function(newRecipe, callback) {
  newRecipe.save(callback);
};

module.exports.castVote = function(id, vote, callback) {
  Recipe.findByIdAndUpdate(id, { $inc: { score: vote } }, callback);
};
