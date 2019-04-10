const mongoose = require("mongoose");

// Dash schema.
const DashSchema = mongoose.Schema({
  libraries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Library",
      required: true
    }
  ],
  recipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
      required: true
    }
  ],
  top: {
    day: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe",
        required: true
      }
    ],
    week: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe",
        required: true
      }
    ],
    month: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe",
        required: true
      }
    ],
    all: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe",
        required: true
      }
    ]
  },
  trending: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
      required: true
    }
  ],
  searches: [
    {
      query: {
        type: String,
        required: true
      },
      timestamp: {
        type: Number,
        required: true
      }
    }
  ],
  trendingSearches: {}
});

module.exports = mongoose.model("Dash", DashSchema);
