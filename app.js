const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const schedule = require("node-schedule");
const path = require("path");
const scheduleFunctions = require("./api/schedule");
require("dotenv").config();

// Connect to database
mongoose.connect(process.env.MLAB_DB, {
  useCreateIndex: true,
  useNewUrlParser: true
});
mongoose.connection.on("connected", () => {
  console.log("Connected to database: " + process.env.MLAB_DB);
});
mongoose.connection.on("error", (err) => {
  console.log("Database error: " + err);
});

// Routes files.
const users = require("./api/routes/users");
const recipes = require("./api/routes/recipes");
const cookbooks = require("./api/routes/cookbooks");
const ingredients = require("./api/routes/ingredients");
const libraries = require("./api/routes/libraries");
const dashes = require("./api/routes/dashes");

//Port
const port = process.env.POST || 8080;

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

// Uploaded images.
app.use("/uploads", express.static("uploads"));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/users", users);
app.use("/recipes", recipes);
app.use("/cookbooks", cookbooks);
app.use("/ingredients", ingredients);
app.use("/libraries", libraries);
app.use("/dashes", dashes);

// Invalid route.
// Invalid route.
app.get("/", (req, res) => {
  res.send("invaild endpoint");
});
// app.use((req, res, next) => {
//   const error = new Error("Not found");
//   error.status = 404;
//   next(error);
// });
// app.use((error, req, res, next) => {
//   res.status(error.status || 500);
//   res.json({
//     error: {
//       message: error.message
//     }
//   });
// });

// scheduleFunctions.startAnalytics();
// scheduleFunctions.startSimilarityMatching();
schedule.scheduleJob("*/25 * * * *", () => {
  // scheduleFunctions.startAnalytics();
});
schedule.scheduleJob("*/5 * * * *", () => {
  // scheduleFunctions.startSimilarityMatching();
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Start server
app.listen(port, () => {
  console.log("Server started on port: " + port);
});
