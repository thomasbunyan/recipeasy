const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../config/database");

// Active schema
const ActiveSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  hash: {
    type: String,
    required: true
  },
  timeStamp: {
    type: Date,
    required: true
  }
});

const Active = (module.exports = mongoose.model("Active", ActiveSchema));

module.exports.addHash = function(newHash, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newHash.hash, salt, (err, hash) => {
      if (err) {
        throw err;
      }
      newHash.hash = hash;
      newHash.save(callback);
    });
  });
};

module.exports.removeHash = function(id, callback) {
  const query = { _id: id };
  Active.findOneAndRemove(query, callback);
};

module.exports.validateHash = function(hash, callback) {
  const query = { hash: hash };
  Active.findOne(query, callback);
};
