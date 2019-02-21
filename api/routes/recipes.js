const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + file.originalname);
  }
});
const upload = multer({ storage });
// const upload = multer({ dest: "uploads/" });

const Recipe = require("../models/recipe");
const User = require("../models/user");

// Add recipe
router.post("/", checkAuth, (req, res, next) => {
  let recipe = new Recipe({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    public: req.body.public,
    mealType: req.body.mealType,
    prepTime: req.body.prepTime,
    cookTime: req.body.cookTime,
    difficulty: req.body.difficulty,
    servings: req.body.servings,
    ingredients: req.body.ingredients,
    method: req.body.method,
    author: req.userData.user.username,
    timestamp: new Date(),
    score: 0,
    views: 0
  });
  recipe
    .save()
    .then((doc) => {
      console.log(doc.image);
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
  const last_seen = req.query.last_seen;
  const regex = new RegExp(formatQuery(search_query), "gi");
  let query = { public: true };
  if (last_seen != undefined && search_query != undefined) {
    query = { $and: [{ _id: { $lt: last_seen } }, { public: true }, { title: regex }] };
  } else if (search_query != undefined) {
    query = { $and: [{ public: true }, { title: regex }] };
  }
  Recipe.find(query)
    .sort({ _id: -1 })
    .limit(6)
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
function formatQuery(text) {
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
  const query = { username: "tom" };
  User.findOne(query)
    .populate("recipes.saved.recipe recipes.history.recipe")
    .exec()
    .then((user) => {
      getRecommended(user.recipes.saved, user.recipes.history, (recipes) => {
        res.status(200).json({
          success: true,
          recipes: recipes
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
function getRecommended(saved, history, cb) {
  let ingredients = getIngredients(saved);
  ingredients = ingredients.concat(getIngredients(history));
  const savedId = saved.map((e) => {
    return e.recipe._id;
  });
  Recipe.find({ $and: [{ "ingredients.ingredient": { $in: ingredients } }, { _id: { $nin: savedId } }] })
    .exec()
    .then((recipes) => {
      recipes.sort((a, b) => {
        return matches(ingredients, a) - matches(ingredients, b);
      });
      cb(recipes);
    });
}
function matches(list, recipe) {
  let counter = 0;
  recipe.ingredients.forEach((e) => {
    if (list.indexOf(e.ingredient) > -1) {
      counter++;
    }
  });
  return counter;
}
function getIngredients(recipes) {
  const ingredients = {};
  recipes.forEach((recipe) => {
    recipe.recipe.ingredients.forEach((ingredient) => {
      const key = ingredient.ingredient;
      if (ingredients[key]) {
        ingredients[key] = ingredients[key] + 1;
      } else {
        ingredients[key] = 1;
      }
    });
  });

  let ingredientCount = [];
  for (var key in ingredients) {
    ingredientCount.push({ ingredient: key, count: ingredients[key] });
  }
  ingredientCount = ingredientCount
    .sort((a, b) => {
      return b.count - a.count;
    })
    .slice(0, 10);
  const ingredientsList = ingredientCount.map((e) => {
    return e.ingredient;
  });
  return ingredientsList;
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
    .populate("ingredients.ingredient")
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
