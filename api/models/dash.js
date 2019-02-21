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
    ]
  },
  trending: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
      required: true
    }
  ]
});

module.exports = mongoose.model("Dash", DashSchema);
