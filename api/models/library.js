const mongoose = require("mongoose");

// Dash schema.
const LibrarySchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
  cookbooks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cookbook",
      required: true
    }
  ]
});

module.exports = mongoose.model("Library", LibrarySchema);
