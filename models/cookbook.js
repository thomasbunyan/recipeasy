const mongoose = require("mongoose");
const config = require("../config/database");

// Cookbook schema
const CookbookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  recipes: {
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
  private: {
    type: Boolean,
    required: true
  },
  views: {
    type: Number,
    required: true
  },
  followers: {
    type: Number,
    required: true
  },
  tags: {
    type: Array,
    required: false
  }
});

const Cookbook = (module.exports = mongoose.model("Cookbook", CookbookSchema));

module.exports.addCookbook = function (newCookbook, callback) {
  newCookbook.save(callback);
};

module.exports.updateCookbookRecipes = function (id, update, callback) {
  Cookbook.findByIdAndUpdate(
    id,
    { recipes: update.recipes },
    callback
  );
};

module.exports.updateCookbookInfo = function (id, update, callback) {
  Cookbook.findByIdAndUpdate(
    id,
    {
      name: update.name,
      description: update.description,
      private: update.private
    },
    callback
  );
};

module.exports.getCookbookById = function (id, update, callback) {
  if (update) {
    Cookbook.findByIdAndUpdate(id, { $inc: { views: 1 } }, callback);
  } else {
    Cookbook.findById(id, callback);
  }
};

module.exports.getCookbooksFromSelection = function (
  selectedCookbooks,
  callback
) {
  Cookbook.find({ _id: { $in: selectedCookbooks } }, callback);
};

module.exports.getCookbooks = function (callback) {
  Cookbook.find({ private: false }, callback);
};
