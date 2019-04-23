const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

const Library = require("../models/library");
const Dash = require("../models/dash");

router.get("/", checkAuth, (req, res, next) => {
  Dash.find({})
    .populate("recipes top.day top.week top.month")
    .populate({
      path: "libraries",
      populate: {
        path: "cookbooks",
        model: "Cookbook"
      }
    })
    .exec()
    .then((dash) => {
      res.status(200).json({
        success: true,
        dash: dash[0]
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err
      });
    });
});

router.patch("/", checkAuth, (req, res, next) => {
  const recipes = req.body.recipes;
  const libraries = req.body.libraries;
  let update = {};
  if (recipes && libraries) {
    update = { libraries: libraries, recipes: recipes };
  } else if (recipes) {
    update = { recipes: recipes };
  } else if (libraries) {
    update = { libraries: libraries };
  } else {
    return res.status(200).json({
      success: true
    });
  }

  Dash.findOneAndUpdate({}, update)
    .exec()
    .then((dash) => {
      return res.status(200).json({
        success: true
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
