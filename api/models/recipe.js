const mongoose = require("mongoose");

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
    required: true,
    default: 0
  }
});

module.exports = mongoose.model("Recipe", RecipeSchema);
