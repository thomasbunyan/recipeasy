const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  }
});
const upload = multer({ storage });
require("dotenv").config();

const Cookbook = require("../models/cookbook");
const User = require("../models/user");

// Add cookbook
router.post("/", checkAuth, (req, res, next) => {
  let cookbook = new Cookbook({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    public: true,
    recipes: req.body.recipes,
    author: req.userData.user.username,
    date: req.body.date
  });

  cookbook
    .save()
    .then((cookbook) => {
      User.findByIdAndUpdate(req.userData.user._id, { $push: { "cookbooks.author": { cookbook: cookbook._id, timestamp: new Date() } } }, { new: true })
        .exec()
        .then((user) => {
          res.status(200).json({
            success: true,
            user: user,
            cookbook: cookbook
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

// Get all public cookbooks.
router.get("/", checkAuth, (req, res, next) => {
  const search_query = req.query.search_query;
  let query = { public: true };
  if (search_query != undefined) {
    const regex = new RegExp(formatQuery(search_query), "gi");
    query = { $and: [{ public: true }, { title: regex }] };
  }
  Cookbook.find(query)
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
function formatQuery(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

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

router.post("/image", checkAuth, upload.single("cookbookImage"), (req, res, next) => {
  const path = req.file.path;
  res.status(200).json({
    success: true,
    path: path
  });
});

// Update cookbook.
router.patch("/:id", checkAuth, (req, res, next) => {
  const query = { _id: req.params.id, author: req.userData.user.username };
  let update = {};
  for (const ops of req.body) {
    if (["title", "description", "public", "recipes", "image"].indexOf(ops.name) >= 0) {
      update[ops.name] = ops.value;
    } else if (req.body[0].name == "followers") {
      update = { $inc: { followers: req.body[0].value } };
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
