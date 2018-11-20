const jwt = require("jsonwebtoken");
const config = require("../config.json");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, config.env.JWT_KEY);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Auth failed"
    });
  }
};