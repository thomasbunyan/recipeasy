const mongoose = require("mongoose");

// User schema
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
  password: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false,
    required: true
  },
  date: {
    type: Number,
    required: true,
    default: new Date().getTime()
  },
  preferences: {
    type: Array,
    required: true,
    default: []
  },
  recipes: {
    saved: [
      {
        recipe: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Recipe",
          required: true
        },
        timestamp: {
          type: Number,
          required: true
        }
      }
    ],
    voted: [
      {
        recipe: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Recipe",
          required: true
        },
        vote: {
          type: String,
          required: true
        },
        timestamp: {
          type: Number,
          required: true
        }
      }
    ],
    author: [
      {
        recipe: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Recipe",
          required: true
        },
        timestamp: {
          type: Number,
          required: true
        }
      }
    ]
  },
  cookbooks: {
    saved: [
      {
        cookbook: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Cookbook",
          required: true
        },
        timestamp: {
          type: Number,
          required: true
        }
      }
    ],
    author: [
      {
        cookbook: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Cookbook",
          required: true
        },
        timestamp: {
          type: Number,
          required: true
        }
      }
    ]
  }
});
module.exports = mongoose.model("User", UserSchema);
