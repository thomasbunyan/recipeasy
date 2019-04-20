const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const leven = require("leven");
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
// const upload = multer({ dest: "uploads/" });

const Recipe = require("../models/recipe");
const User = require("../models/user");
const Dash = require("../models/dash");

// Add recipe
router.post("/", checkAuth, (req, res, next) => {
  let recipe = new Recipe({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    public: req.body.public,
    mealType: req.body.mealType,
    cuisine: req.body.cuisine,
    prepTime: req.body.prepTime,
    cookTime: req.body.cookTime,
    difficulty: req.body.difficulty,
    servings: req.body.servings,
    ingredients: req.body.ingredients,
    method: req.body.method,
    author: req.userData.user.username,
    timestamp: new Date().getTime(),
    score: 0,
    views: 0
  });
  recipe
    .save()
    .then((doc) => {
      res.status(201).json({
        success: true,
        message: "Recipe added",
        recipe: doc
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err
      });
    });
});

router.post("/image", upload.single("recipeImage"), (req, res, next) => {
  const path = req.file.path;
  res.status(200).json({
    success: true,
    path: path
  });
});

// Get public recipes.
router.get("/", checkAuth, (req, res, next) => {
  const search_query = req.query.search_query;
  const cuisine = req.query.cuisine;
  const last_seen = req.query.last_seen;
  const regex = new RegExp(formatQuery(search_query), "gi");
  let query = { public: true };
  if (last_seen != undefined && search_query != undefined) {
    query = { $and: [{ public: true }, { title: regex }] };
  } else if (search_query != undefined) {
    query = { $and: [{ public: true }, { title: regex }] };
  } else if (cuisine != undefined) {
    query = { $and: [{ public: true }, { cuisine: cuisine }] };
  }
  Recipe.find(query)
    // .sort({ _id: -1 })
    .limit(6)
    .skip(last_seen * 6)
    .exec()
    .then((recipes) => {
      if (search_query != undefined) {
        Dash.find({})
          .exec()
          .then((d) => {
            let searches = d[0].searches;
            if (searches == null) {
              searches = [];
            }
            searches.push({ query: search_query, timestamp: new Date().getTime() });
            Dash.findOneAndUpdate({}, { searches: searches })
              .exec()
              .then(() => {});
          });
      }
      res.status(200).json({
        success: true,
        recipes: recipes
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
  if (text == undefined) return;
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

// Get all public recipes from a selection.
router.get("/selection", checkAuth, (req, res, next) => {
  const selectedRecipes = req.query.recipes;
  Recipe.find({ $and: [{ _id: { $in: selectedRecipes } }, { public: true }] })
    .exec()
    .then((recipes) => {
      res.status(200).json({
        success: true,
        recipes: recipes
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err
      });
    });
});

router.get("/recommended", (req, res, next) => {
  const query = { username: "Recipeasy" };
  User.findOne(query)
    .populate("recipes.saved.recipe recipes.history.recipe")
    .exec()
    .then((user) => {
      getRecommended(user.recipes.saved, user.recipes.history, (recipes) => {
        return res.status(200).json({
          success: true,
          recipes: recipes
        });
      });
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        error: err
      });
    });
});
function getRecommended(saved, history, cb) {
  const combinedRecipes = [];
  saved.forEach((e) => {
    combinedRecipes.push(e.recipe);
  });
  history.forEach((e) => {
    combinedRecipes.push(e.recipe);
  });
  const savedId = saved.map((e) => {
    return e.recipe._id;
  });
  Recipe.find({ _id: { $nin: savedId } })
    .exec()
    .then((docs) => {
      combinedRecipes.forEach((recipe) => {
        docs.forEach((recipeCompare) => {
          if (recipe._id == recipeCompare._id) return cb("none");
          recipe.tags.forEach((tag) => {
            let score = 0;
            recipeCompare.tags.forEach((tagCompare) => {
              score = score + leven(tag.toUpperCase(), tagCompare.toUpperCase());
            });
            recipeCompare["likenessScore"] = score;
            if (recipe.mealType != recipeCompare.mealType) {
              recipeCompare.likenessScore = recipeCompare.likenessScore + 20;
            }
          });
          docs.sort((a, b) => {
            return a.likenessScore - b.likenessScore;
          });
          return cb(docs.slice(0, 30));
        });
      });
    });
}

// Get the recipe and update the views.
router.get("/:id", checkAuth, (req, res, next) => {
  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(200).json({
      success: false
    });
  }
  const user = req.userData.user.username;
  const query = { $or: [{ $and: [{ _id: req.params.id }, { public: true }] }, { $and: [{ _id: req.params.id }, { author: user }] }] };
  const update = { $inc: { views: 1 } };
  Recipe.findOneAndUpdate(query, update)
    .populate("ingredients.ingredient similar")
    .exec()
    .then((recipe) => {
      // console.log(recipe);
      if (recipe === null) {
        return res.status(403).json({
          success: false,
          message: "Invalid recipe"
        });
      } else {
        res.status(200).json({
          success: true,
          recipe: recipe
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

router.patch("/:id/:vote", checkAuth, (req, res, next) => {
  const query = { _id: req.params.id };
  const vote = parseInt(req.params.vote);
  let update = {};
  if ([2, -2, -1, 1].indexOf(vote) >= 0) {
    update = { $inc: { score: vote } };
  } else {
    return res.status(400).json({
      success: false,
      error: {
        message: "No vote specified"
      }
    });
  }
  Recipe.findOneAndUpdate(query, update)
    .exec()
    .then(() => {
      res.status(200).json({
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
