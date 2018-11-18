const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");
const Active = require("../models/active");
const User = require("../models/user");

// Add hash. UNUSED
// router.post("/addHash", (req, res, next) => {
//   let newHash = new Active({
//     userId: req.body.id,
//     hash: req.body.username
//   });
//   Active.addHash(newHash, (err, usr) => {
//     if (err) {
//       res.json({ success: false, msg: "Failed to add hash" });
//     } else {
//       res.json({ success: true, msg: "Hash added" });
//     }
//   });
// });

router.get("/validateHash", (req, res) => {
  Active.validateHash(req.query.hash, (err, hashInfo) => {
    const timeDiff = 86400000; // 24 hours
    if (err) {
      res.json({ success: false, msg: "Failed to validate hash" });
    } else {
      if (hashInfo == null) {
        res.json({
          success: true,
          found: false,
          msg: "Hash not found"
        });
      } else if ((new Date().getTime() - hashInfo.timeStamp) / timeDiff > 1) {
        res.json({
          success: true,
          found: true,
          valid: false,
          msg: "Hash expired"
        });
      } else {
        // Hash found and valid, now remove from db and change user attribute.
        User.activateUser(hashInfo.userId, err => {
          if (err) {
            console.log("Failed to activate user.");
            res.json({
              success: false,
              msg: "Failed to activate user"
            });
          } else {
            Active.removeHash(hashInfo._id, err => {
              if (err) {
                console.log("Failed to remove hash.");
                res.json({
                  success: false,
                  msg: "Failed to remove hash"
                });
              } else {
                res.json({
                  success: true,
                  found: true,
                  valid: true,
                  msg: "Account activated"
                });
              }
            });
          }
        });
      }
    }
  });
});

module.exports = router;
