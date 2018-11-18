const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("../config/database");
const Cookbook = require("../models/cookbook");

// Add cookbook
router.post("/add", (req, res, next) => {
  let newCookbook = new Cookbook({
    name: req.body.name,
    description: req.body.description,
    recipes: req.body.recipes,
    author: req.body.author,
    date: req.body.date,
    private: req.body.private,
    views: req.body.views,
    followers: req.body.followers,
    tags: req.body.tags
  });
  Cookbook.addCookbook(newCookbook, (err, cookbook) => {
    if (err) {
      res.json({ success: false });
    } else {
      res.json({ success: true, cookbook: cookbook._id });
    }
  });
});

// Get cookbook by id.
router.get("/cookbook/:id", (req, res) => {
  let id = req.params.id;
  let update = req.query.update;
  Cookbook.getCookbookById(id, update, (err, cookbook) => {
    if (err) {
      res.json({ success: false });
    } else {
      res.json({ success: true, cookbook: cookbook });
    }
  });
});

// Get cookbooks from a selection.
router.get("/selection", (req, res) => {
  const selectedCookbooks = req.query.selection;
  Cookbook.getCookbooksFromSelection(selectedCookbooks, (err, cookbooks) => {
    if (err) {
      res.json({ success: false });
    } else {
      res.json({ success: true, cookbooks: cookbooks });
    }
  });
});

// Get all public cookbooks.
router.get("/all", verifyToken, (req, res) => {
  jwt.verify(req.token, config.secret, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      Cookbook.getCookbooks((err, cookbooks) => {
        if (err) {
          res.json({ success: false });
        } else {
          res.json({ success: true, cookbooks: cookbooks });
        }
      });
    }
  });
});

// Update cookbook.
router.put("/cookbook/:id/update", verifyToken, (req, res) => {
  jwt.verify(req.token, config.secret, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const id = req.params.id;
      const update = req.body;
      if (update.recipes !== undefined) {
        Cookbook.updateCookbookRecipes(id, update, (err) => {
          if (err) res.json({ success: false });
          else res.json({ success: true });
        });
      } else {
        Cookbook.updateCookbookInfo(id, update, (err) => {
          if (err) res.json({ success: false });
          else res.json({ success: true });
        });
      }
    }
  });
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

module.exports = router;
