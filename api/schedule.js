const schedule = {};
const Recipe = require("./models/recipe");
const Dash = require("./models/dash");
const Library = require("./models/library");

schedule.startAnalytics = function() {
  updateDash();
};

function updateDash() {
  Dash.find({})
    .exec()
    .then((dash) => {
      let d = dash[0];
      if (!d) {
        d = new Dash();
        d.save();
      }
      addTop(d, (d) => {
        addLibraries(d, (d) => {
          addRecipes(d, (d) => {
            calcTrending(d, (d) => {
              Dash.findByIdAndUpdate(d._id, d)
                .exec()
                .then((doc) => {});
            });
          });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

function addTop(d, callback) {
  const tsMonth = new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000);
  const tsWeek = new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000);
  const tsDay = new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000);
  const tsHour = new Date(new Date().getTime() - 1 * 60 * 60 * 1000);

  Recipe.find({ timestamp: { $gt: tsMonth } }, (err, doc) => {
    doc.sort((a, b) => {
      return b.views - a.views;
    });
    d.top.month = doc.slice(0, 10).map((e) => {
      return e._id;
    });
    d.top.week = doc
      .filter((e) => {
        return e.timestamp > tsWeek;
      })
      .map((e) => {
        return e._id;
      });
    d.top.day = doc
      .filter((e) => {
        return e.timestamp > tsDay;
      })
      .map((e) => {
        return e._id;
      });
    callback(d);
  });
}

function addLibraries(d, callback) {
  // Add logic for stipulation here.
  const query = {};
  Library.find(query, (err, docs) => {
    d.libraries = docs.map((e) => {
      return e._id;
    });
    callback(d);
  });
}

function addRecipes(d, callback) {
  callback(d);
}

function calcTrending(d, callback) {
  Recipe.find()
    .exec()
    .then((recipes) => {
      const ratings = recipes.map((e) => {
        const start = 1536588468;
        const t = start - e.date;
        const x = e.score;
        let y = 0;
        if (x > 0) y = 1;
        else if (x < 0) y = -1;
        let z = x;
        if (x < 1) z = 1;
        const score = Math.log10(z) + (y * t) / 45000;
        return { id: e._id, score: score };
      });
      ratings
        .sort((a, b) => {
          return a.score - b.score;
        })
        .slice(0, 10);
      // console.log(ratings);
      callback(d);
    })
    .catch((err) => {
      console.log("Error:", err);
    });
}

// Add the ingredients.
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("ingredients.json", "utf8"));
const Ingredient = require("./models/ingredient");

schedule.addIngredient = function() {
  console.log("starting adding");
  let i = 20000;
  for (; i < data.length; i++) {
    const ing = data[i];
    const ingredient = new Ingredient({
      ingredient: ing.ingredient,
      nutrients: ing.nutrients,
      servings: {
        standard: {
          amount: ing.servings[0].standard.amount,
          uom: ing.servings[0].standard.uom
        },
        house: {
          amount: ing.servings[0].house.amount,
          uom: ing.servings[0].house.uom
        }
      }
    });
    ingredient
      .save()
      .then((e) => {
        console.log("a");
      })
      .catch((err) => {
        console.log("*******************Index:", i);
        console.log(err);
      });
  }
};

module.exports = schedule;
