const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../config/database");
const cors = require("cors");
const passport = require("passport");
app = express();

const User = require("../models/user");

corsConfig = {
  origin: "http://localhost:4200"
};

// Register a new user.
app.post("/register", cors(corsConfig), (req, res) => {
  var newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    recipes: {
      saved: [],
      vote: [],
      author: []
    },
    cookbooks: {
      saved: [],
      author: []
    }
  });
  var err = newUser.validateSync();

  if (err === undefined) {
    User.addUser(newUser);
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
});

// Authenticate a user.
app.post("/authenticate", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      res.json({
        success: false,
        notActive: false,
        msg: "User not found"
      });
    } else {
      User.comparePassword(password, user.password, (err, isCorrect) => {
        if (err) throw err;
        else if (!user.active) {
          res.json({
            success: false,
            notActive: true
          });
        } else if (isCorrect) {
          jwt.sign(
            { user },
            config.secret,
            {
              expiresIn: 10000 // 1 week
            },
            (err, token) => {
              res.json({
                success: true,
                token: token,
                user: {
                  id: user._id,
                  username: user.username
                }
              });
            }
          );
        } else {
          res.json({ success: false, msg: "Wrong password" });
        }
      });
    }
  });
});

// Get a specific user item. recipes, cookbooks, profile, preferences.
app.get("/user/:id/", verifyToken, (req, res) => {
  jwt.verify(req.token, config.secret, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const id = req.params.id;
      const item = req.query.item;
      User.getItem(id, item, item => {
        if (item !== null) {
          res.json({ success: true, item: item });
        } else {
          res.json({ success: false, msg: "Not valid profile or item" });
        }
      });
    }
  });
});

app.put("/user/:id/update/", verifyToken, (req, res) => {
  jwt.verify(req.token, config.secret, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      User.updateUserItem(
        req.params.id,
        req.body.update,
        req.query.item,
        err => {
          if (err) {
            console.log("Error updating item");
            res.json({ success: false });
          } else {
            res.json({ success: true });
          }
        }
      );
    }
  });
});

// Return true or false if a field is unique.
app.get("/unique/:type", (req, res) => {
  const type = req.params.type;
  const value = req.query.value;
  if (type === "username" || type === "email") {
    User.isUnique(type, value, unique => {
      res.json({ success: true, unique: unique });
    });
  } else {
    res.json({ success: false });
  }
});

// Methods
function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (token !== undefined) {
    req.token = token;
    next();
  } else {
    res.sendStatus(403);
  }
}

module.exports = app;
