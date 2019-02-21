const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

const Library = require("../models/library");
const Dash = require("../models/dash");

router.post("/", (req, res, next) => {
  const library = new Library({
    title: req.body.title,
    description: req.body.description,
    timestamp: new Date(),
    cookbooks: req.body.cookbooks
  });

  library
    .save()
    .then((lib) => {
      res.status(201).json({
        success: true
      });
    })
    .catch((err) => {
      res.status(400).json({
        success: false
      });
    });
});

router.delete("/:id", (req, res, next) => {
  Library.findOneAndDelete(req.param.id)
    .exec()
    .then((del) => {
      res.status(202).json({
        success: true
      });
    })
    .catch((err) => {
      res.status(400).json({
        success: false
      });
    });
});

router.get("/dash", (req, res, next) => {
  Dash.find({})
    .populate("libraries top.day top.week top.month")
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

router.patch("/dash", (req, res, next) => {
  const recipes = req.body.recipes;
  res.status(200).json({
    success: true,
    dash: dash[0]
  });
});

module.exports = router;
