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
    required: true,
    default: true
  },
  mealType: {
    type: String,
    required: true
  },
  prepTime: {
    type: Number,
    required: true
  },
  cookTime: {
    type: Number,
    required: true
  },
  difficulty: {
    type: Number,
    required: true
  },
  servings: {
    type: Number,
    required: true
  },
  ingredients: [
    {
      ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ingredient",
        required: true
      },
      unit: {
        type: String,
        required: true
      },
      amount: {
        type: Number,
        required: true
      }
    }
  ],
  method: [
    {
      type: String,
      required: true
    }
  ],
  author: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
  score: {
    type: Number,
    required: true,
    default: 0
  },
  views: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = mongoose.model("Recipe", RecipeSchema);
