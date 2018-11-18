const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../config/database");


// User data schema.
// const UserDataSchema = mongoose.Schema({
//   recipes: {
//     type: Array,
//     required: true
//   },
//   cookbooks: {
//     type: Array,
//     required: true
//   }
// });

// const UserData = (module.exports = mongoose.model("UserData", UserDataSchema));

// User schema
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true,
    required: true
  },
  preferences: {
    type: Array,
    required: true,
    default: []
  },
  recipes: {
    saved: [],
    voted: [],
    author: []
  },
  cookbooks: {
    saved: [],
    author: []
  }
});

const User = (module.exports = mongoose.model("User", UserSchema));

module.exports.addUser = function (newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) {
        throw err;
      }
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.activateUser = function (id, callback) {
  const query = { _id: id };
  const update = { active: true };
  User.findOneAndUpdate(query, update, callback);
};

module.exports.getUserByUsername = function (username, callback) {
  const query = { username: username };
  User.findOne(query, callback);
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) {
      throw err;
    }
    callback(null, isMatch);
  });
};

module.exports.getItem = function (id, item, callback) {
  User.findById(id, (err, result) => {
    if (result === undefined || err) {
      callback(null);
    } else {
      if (item === "profile") {
        callback(result);
      } else if (item === "recipes") {
        callback(result.recipes);
      } else if (item === "cookbooks") {
        callback(result.cookbooks);
      } else if (item === "preferences") {
        callback(result.preferences);
      } else {
        callback(null);
      }
    }
  });
};

module.exports.isUnique = function (type, value, callback) {
  if (type === "email") {
    User.find({ email: value }, (err, results) => {
      callback(results.length == 0);
    });
  } else if (type === "username") {
    User.find({ username: value }, (err, results) => {
      callback(results.length == 0);
    });
  }
};

// Stuff that's not implemented yet or needs to be removed
module.exports.removeUser = function (user, callback) {
  const query = { _id: user._id };
  User.findOneAndDelete(query, callback);
};

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
};

module.exports.updateUserItem = function (id, toUpdate, type, callback) {
  const query = { _id: id };
  let update = {};
  if (type === "recipes") {
    update = { recipes: toUpdate };
  } else if (type === "cookbooks") {
    update = { cookbooks: toUpdate };
  } else if (type === "preferences") {
    update = { preferences: toUpdate };
  } else return;
  User.findOneAndUpdate(query, update, callback);
};
