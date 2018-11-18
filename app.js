const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

// Connect to database
mongoose.connect(config.database);

mongoose.connection.on("connected", () => {
  console.log("Connected to database: " + config.database);
});

mongoose.connection.on("error", err => {
  console.log("Database error: " + err);
});

const app = express();

// Routes
const users = require("./routes/users");
const recipes = require("./routes/recipes");
const cookbooks = require("./routes/cookbooks");
const activeUsers = require("./routes/activeUsers");

//Port
const port = 3000;

// CORS
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Body parser
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.use("/users", users);
app.use("/recipes", recipes);
app.use("/cookbooks", cookbooks);
app.use("/active", activeUsers);

// Index route
app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});

// app.get("*", (req, res) => {
//   res.send("Invalid EndpointB");
// });

// Start server
app.listen(port, () => {
  console.log("Server started on port: " + port);
});
