const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const checkAuth = require("../middleware/check-auth");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.mail.com",
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const User = require("../models/user");

// Register a new user.
router.post("/", (req, res) => {
  var user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  User.findOne({ $or: [{ username: user.username }, { email: user.email }] })
    .exec()
    .then((existingUser) => {
      if (existingUser) {
        res.status(409).json({
          success: false,
          message: "Username/Email taken"
        });
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
              res.status(500).json({
                success: false,
                error: err
              });
            } else {
              user.password = hash;
              user
                .save()
                .then((doc) => {
                  jwt.sign(
                    {
                      user: doc._id
                    },
                    process.env.EMAIL_SECRET,
                    {
                      expiresIn: "1d"
                    },
                    (err, emailToken) => {
                      if (err) {
                        res.status(500).json({
                          success: false,
                          error: err
                        });
                      } else {
                        res.status(201).json({
                          success: true,
                          message: "User added"
                        });
                        // TODO: Re-add this.
                        // const url = "http://localhost:3000/users/confirmation/" + emailToken;
                        // transporter.sendMail(
                        //   {
                        //     from: "Recipeasy <" + process.env.EMAIL_USER + ">",
                        //     to: doc.email,
                        //     subject: "Confirm email",
                        //     html: "Click to confirm: <a href='" + url + "'>" + url + "</a>"
                        //   },
                        //   (error, info) => {
                        //     if (error) {
                        //       // TODO: Remove the user from the DB.
                        //       res.status(500).json({
                        //         success: false,
                        //         error: error
                        //       });
                        //     } else {
                        //       res.status(201).json({
                        //         success: true,
                        //         message: "User added"
                        //       });
                        //     }
                        //   }
                        // );
                      }
                    }
                  );
                })
                .catch((err) => {
                  res.status(500).json({
                    success: false,
                    error: err
                  });
                });
            }
          });
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        error: err
      });
    });
});

// Authenticate a user.
router.post("/authenticate", (req, res, next) => {
  User.findOne({ username: req.body.username })
    .exec()
    .then((user) => {
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Auth failed"
        });
      } else if (!user.active) {
        res.status(401).json({
          success: false,
          inactive: true,
          message: "Auth failed, account inactive"
        });
      } else {
        bcrypt.compare(req.body.password, user.password, (err, match) => {
          if (err) {
            return res.status(401).json({
              success: false,
              message: "Auth failed"
            });
          }
          if (match) {
            jwt.sign(
              { user },
              process.env.JWT_KEY,
              {
                expiresIn: "1w"
              },
              (err, token) => {
                if (err) {
                  return res.status(401).json({
                    success: false,
                    message: "Auth failed"
                  });
                } else {
                  return res.status(200).json({
                    success: true,
                    jwt: token,
                    user: {
                      id: user._id,
                      username: user.username
                    }
                  });
                }
              }
            );
          } else {
            return res.status(401).json({
              success: false,
              message: "Auth failed"
            });
          }
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err
      });
    });
});

// Activate a user's account
router.get("/confirmation/:token", (req, res, next) => {
  const token = req.params.token;
  try {
    const user = jwt.verify(token, process.env.EMAIL_SECRET).user;

    const query = { $and: [{ _id: user }, { active: false }] };
    const update = { active: true };

    User.findOneAndUpdate(query, update)
      .exec()
      .then((result) => {
        if (!result) {
          res.status(401).json({
            success: false,
            error: "Auth failed"
          });
        } else {
          res.status(200).json({
            success: true
          });
        }
      })
      .catch((err) => {
        res.status(401).json({
          success: false,
          error: "Auth failed"
        });
      });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: "Auth failed"
    });
  }
});

// Get a user's (recipes, cookbooks, history) by their id.
router.get("/:id", checkAuth, (req, res, next) => {
  const userID = req.params.id;
  if (req.userData.user._id !== userID) {
    return res.status(403).json({
      success: false,
      message: "No access"
    });
  }
  User.findById(userID)
    .populate("recipes.saved.recipe recipes.voted.recipe recipes.author.recipe recipes.history.recipe cookbooks.saved.cookbook cookbooks.author.cookbook cookbooks.history.cookbook")
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json({
          success: true,
          recipes: doc.recipes,
          cookbooks: doc.cookbooks,
          history: doc.history
        });
      } else {
        res.status(404).json({
          success: false,
          message: "User not found for provided ID"
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err
      });
    });
});

// Update a user value.
router.patch("/:id", checkAuth, (req, res, next) => {
  const userID = req.params.id;
  if (req.userData.user._id !== userID || !userID.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(403).json({
      success: false,
      message: "No access"
    });
  }
  const query = { _id: userID };
  const update = {};
  for (const ops of req.body) {
    if (["history", "recipes", "cookbooks", "preferences", "email"].indexOf(ops.name) >= 0) {
      update[ops.name] = ops.value;
    } else {
      return res.status(400).json({
        success: false,
        message: "Not a valid field"
      });
    }
  }
  User.findOneAndUpdate(query, update, { new: true })
    .populate("recipes.saved.recipe recipes.voted.recipe recipes.author.recipe recipes.history.recipe cookbooks.saved.cookbook cookbooks.author.cookbook cookbooks.history.cookbook")
    .exec()
    .then((result) => {
      res.status(200).json({
        success: true,
        history: result.history,
        recipes: result.recipes,
        cookbooks: result.cookbooks
      });
    })
    .catch((err) => {
      // console.log("YESSS", query);
      // console.log("YESSS", update);
      res.status(500).json({
        success: false,
        error: err
      });
    });
});

// Delete a user by their id.
router.delete("/:id", checkAuth, (req, res, next) => {
  const userID = req.params.id;
  if (req.userData.user._id !== userID) {
    return res.status(403).json({
      success: false,
      message: "No access"
    });
  }
  User.findByIdAndDelete(userID)
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json({
          success: true,
          message: "User deleted"
        });
      } else {
        res.status(404).json({
          success: false,
          message: "User not found for provided ID"
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err
      });
    });
});

router.get("/unique/:value", (req, res, next) => {
  const value = req.params.value;
  let query = {};
  if (value.indexOf("@") > -1) {
    query = { email: value };
  } else {
    query = { username: value };
  }
  User.findOne(query)
    .exec()
    .then((usr) => {
      if (usr) {
        res.status(200).json({
          success: true,
          unique: false
        });
      } else {
        res.status(200).json({
          success: true,
          unique: true
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err
      });
    });
});

// !Remove this in the future.
// Get all users.
router.get("/", (req, res, next) => {
  User.find()
    .exec()
    .then((users) => {
      res.status(200).json({
        success: true,
        users: users
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err
      });
    });
});

module.exports = router;
