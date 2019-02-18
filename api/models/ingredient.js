const mongoose = require("mongoose");

// Ingredient schema.
const IngredientSchema = mongoose.Schema({
  ingredient: {
    type: String,
    required: true
  },
  nutrients: [
    {
      nutrient: {
        type: String,
        required: true
      },
      val: {
        type: Number,
        required: true
      },
      uom: {
        type: String,
        required: true
      }
    }
  ],
  servings: {
    standard: {
      amount: {
        type: Number,
        required: false
      },
      uom: {
        type: String,
        required: false
      }
    },
    house: {
      amount: {
        type: Number,
        required: false
      },
      uom: {
        type: String,
        required: false
      }
    }
  }
});

module.exports = mongoose.model("Ingredient", IngredientSchema);
