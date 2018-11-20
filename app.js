const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Connect to database
mongoose.connect(
  process.env.DB,
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);
mongoose.connection.on("connected", () => {
  console.log("Connected to database: " + process.env.DB);
});
mongoose.connection.on("error", (err) => {
  console.log("Database error: " + err);
});

// Routes files.
const users = require("./api/routes/users");
const recipes = require("./api/routes/recipes");
const cookbooks = require("./api/routes/cookbooks");

//Port
const port = 3000;

app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow, Methods", "POST, GET, PUT, PATCH, DELETE");
//     return res.status(200).json({});
//   }
//   next();
// });

// Body parser
app.use(bodyParser.json());

// Routes
app.use("/users", users);
app.use("/recipes", recipes);
app.use("/cookbooks", cookbooks);

// Invalid route.
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

// Start server
app.listen(port, () => {
  console.log("Server started on port: " + port);
});
