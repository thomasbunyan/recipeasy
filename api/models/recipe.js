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
  image: {
    type: String,
    required: true,
    default: ""
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
  cuisine: {
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
        ref: "Ingredient"
      },
      unit: {
        type: String
      },
      amount: {
        type: Number
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
    type: Number,
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
  },
  original: {
    ingredients: {
      type: Array,
      required: false
    },
    nutrients: {
      type: Array,
      required: false
    }
  },
  tags: [
    {
      type: String
    }
  ],
  similar: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe"
    }
  ]
});

module.exports = mongoose.model("Recipe", RecipeSchema);
