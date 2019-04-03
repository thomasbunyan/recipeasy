const mongoose = require("mongoose");

// Cookbook schema
const CookbookSchema = mongoose.Schema({
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
    required: false,
    default: ""
  },
  public: {
    type: Boolean,
    required: true
  },
  recipes: [
    {
      recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe",
        required: true
      },
      timestamp: {
        type: Date,
        required: true
      }
    }
  ],
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  views: {
    type: Number,
    required: true,
    default: 0
  },
  followers: {
    type: Number,
    required: true,
    default: 0
  },
  tags: {
    type: Array,
    required: false
  }
});

module.exports = mongoose.model("Cookbook", CookbookSchema);
