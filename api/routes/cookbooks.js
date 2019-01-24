const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
require("dotenv").config();

const Cookbook = require("../models/cookbook");

// Add cookbook
router.post("/", checkAuth, (req, res, next) => {
  let cookbook = new Cookbook({
    title: req.body.title,
    description: req.body.description,
    // public: req.body.public,
    public: true,
    recipes: req.body.recipes,
    author: req.userData.user.username,
    date: req.body.date
  });
  cookbook
    .save()
    .then((cookbook) => {
      res.status(201).json({
        success: true,
        cookbook: cookbook
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err
      });
    });
});

// Get all public cookbooks.
router.get("/", checkAuth, (req, res, next) => {
  Cookbook.find({ public: true })
    .populate("recipes.recipe")
    .exec()
    .then((cookbooks) => {
      res.status(200).json({
        success: true,
        cookbooks: cookbooks
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err
      });
    });
});

// Get cookbooks from a selection.
router.get("/selection", checkAuth, (req, res, next) => {
  const user = "admin";
  const selectedCookbooks = req.query.selection;
  Cookbook.find({ _id: { $in: selectedCookbooks }, $or: [{ public: true }, { author: user }] }, { new: true })
    .populate("recipes.recipe")
    .exec()
    .then((cookbooks) => {
      console.log(cookbooks);
      res.status(200).json({
        success: true,
        cookbooks: cookbooks
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        error: error
      });
    });
});

// Get cookbook by ID and update its views, providing it is public.
router.get("/:id", checkAuth, (req, res, next) => {
  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(200).json({
      success: false
    });
  }
  const user = req.userData.user.username;
  const query = { _id: req.params.id };
  const update = { $inc: { views: 1 } };

  Cookbook.findOne(query)
    .exec()
    .then((cookbook) => {
      if (!cookbook) {
        return res.status(200).json({
          success: false
        });
      } else if (!cookbook.public) {
        if (user !== cookbook.author) {
          //? Private cookbook, user is NOT author.
          return res.status(403).json({
            success: false,
            message: "Not a valid cookbook"
          });
        }
      }
      Cookbook.findOneAndUpdate(query, update, { new: true })
        .populate("recipes.recipe")
        .exec()
        .then((cookbook) => {
          res.status(200).json({
            success: true,
            cookbook: cookbook
          });
        })
        .catch((err) => {
          res.status(500).json({
            success: false,
            error: err
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err
      });
    });
});

// Update cookbook.
router.patch("/:id", checkAuth, (req, res, next) => {
  const query = { _id: req.params.id, author: req.userData.user.username };
  const update = {};
  for (const ops of req.body) {
    if (["title", "description", "public", "recipes"].indexOf(ops.name) >= 0) {
      update[ops.name] = ops.value;
    } else {
      return res.status(400).json({
        success: false,
        message: "Not a valid field"
      });
    }
  }
  Cookbook.findOneAndUpdate(query, update, { new: true })
    .populate("recipes.recipe")
    .exec()
    .then((cookbook) => {
      if (!cookbook) {
        res.status(400).json({
          success: false,
          message: "Not a valid cookbook"
        });
      } else {
        res.status(200).json({
          success: true,
          cookbook: cookbook
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

module.exports = router;
