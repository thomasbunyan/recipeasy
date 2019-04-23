const schedule = {};
const leven = require("leven");
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
          console.log("Libraries added");
          addRecipes(d, (d) => {
            console.log("Recipes added");
            calcTrending(d, (d) => {
              console.log("Trending added");
              calcSearches(d, (d) => {
                console.log("Searches added");
                // console.log(d);
                Dash.findByIdAndUpdate(d._id, d)
                  .exec()
                  .then((doc) => {});
              });
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

  Recipe.find({}, (err, doc) => {
    doc.sort((a, b) => {
      return b.views - a.views;
    });
    d.top.all = doc.slice(0, 10).map((e) => {
      return e._id;
    });
    d.top.month = doc
      .filter((e) => {
        return e.timestamp > tsMonth;
      })
      .slice(0, 10)
      .map((e) => {
        return e._id;
      });
    d.top.week = doc
      .filter((e) => {
        return e.timestamp > tsWeek;
      })
      .slice(0, 10)
      .map((e) => {
        return e._id;
      });
    d.top.day = doc
      .filter((e) => {
        return e.timestamp > tsDay;
      })
      .slice(0, 10)
      .map((e) => {
        return e._id;
      });
    // console.log(d.top);
    callback(d);
  });
}

function addLibraries(d, callback) {
  // Add logic for stipulation here.

  const time = new Date().getHours();
  const day = new Date().getDay();

  if (time >= 5 && time < 10) {
    // console.log("Breakfast");
  }
  if (time >= 10 && time < 15) {
    // console.log("Brunch");
  }
  if (time >= 11 && time < 14) {
    // console.log("Lunch");
  }
  if (time >= 15 && time < 16) {
    // console.log("Afternoon tea");
  }
  if (time >= 17 && time < 21) {
    // console.log("Dinner");
  }
  // if (time >= 21 && time < 1) {
  //   console.log("Midnight snack");
  // }
  // if (time >= 1 && time < 5) {
  //   console.log("Sleep eating");
  // }

  if (day == 0 || day == 7) {
    // console.log("Sunday");
  } else if (day == 1) {
    // console.log("Monday");
  } else if (day == 2) {
    // console.log("Tuesday");
  } else if (day == 3) {
    // console.log("Wednesday");
  } else if (day == 4) {
    // console.log("Thursday");
  } else if (day == 5) {
    // console.log("Friday");
  } else if (day == 6) {
    // console.log("Saturday");
  }

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
  Recipe.find({ score: { $gte: 5 } })
    .exec()
    .then((recipes) => {
      console.log(recipes[0]);
      let ratings = recipes.map((e) => {
        const start = 1550448000;
        const t = e.timestamp - start;
        const x = e.score;
        let y = 0;
        if (x > 0) y = 1;
        else if (x < 0) y = -1;
        let z = x;
        if (x < 1) z = 1;
        const score = Math.log10(z) + (y * t) / 45000;
        return { id: e._id, score: score };
      });
      ratings = ratings
        .sort((a, b) => {
          return a.score - b.score;
        })
        .slice(0, 10);
      console.log(ratings);
      d.trending = ratings.map((e) => {
        return e.id;
      });
      callback(d);
    })
    .catch((err) => {
      console.log("Error:", err);
    });
}

function calcSearches(d, callback) {
  const tsDay = new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000);
  const searches = {};
  d.searches.forEach((e) => {
    if (e.timestamp > tsDay) {
      if (searches[e.query]) {
        searches[e.query] = searches[e.query] + 1;
      } else {
        searches[e.query] = 1;
      }
    }
  });
  d.trendingSearches = searches;
  callback(d);
}

schedule.startSimilarityMatching = function() {
  Recipe.find({})
    .populate()
    .exec()
    .then((docs) => {
      docs.forEach((recipe) => {
        const compare = [...docs];
        compare.forEach((recipeCompare) => {
          if (recipe._id == recipeCompare._id) return;
          recipe.tags.forEach((tag) => {
            let score = 0;
            recipeCompare.tags.forEach((tagCompare) => {
              score = score + leven(tag.toUpperCase(), tagCompare.toUpperCase());
            });
            recipeCompare["score"] = score;
            if (recipe.mealType != recipeCompare.mealType) {
              recipeCompare.score = recipeCompare.score + 20;
            }
          });
          compare.sort((a, b) => {
            return a.score - b.score;
          });
          const res = compare.slice(0, 5);
          Recipe.findByIdAndUpdate(recipe._id, { similar: res }).exec();
        });
      });

      // docs.forEach((recipe) => {
      //   console.log(recipe.ingredients.length);
      // });
      // const recipe = docs[0];
      // const ing = recipe.ingredients.map((e) => {
      //   return e.ingredient.ingredient;
      // });
      // // console.log(ing);

      // const ranking = [];
      // docs.forEach((e) => {
      //

      //   const eIng = e.ingredients.map((e) => {
      //     return e.ingredient.ingredient;
      //   });
      //   console.log(eIng);

      //   let eIngSim = 0;
      //   ing.forEach((ingName) => {
      //     let score = 0;
      //     eIng.forEach((i) => {
      //       score = score + leven(i.toUpperCase(), ingName.toUpperCase());
      //     });
      //     eIngSim = eIngSim + score / eIng.length;
      //   });

      //   console.log(eIngSim);

      //   ranking.push({ id: e._id, ingredients: e.ingredients, title: e.title });
      // });
    })
    .catch((err) => {
      console.log(err);
    });
};

// Add the ingredients.
// const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("ingredients.json", "utf8"));
// const Ingredient = require("./models/ingredient");

// schedule.addIngredient = function() {
//   console.log("starting adding");
//   let i = 20000;
//   for (; i < data.length; i++) {
//     const ing = data[i];
//     const ingredient = new Ingredient({
//       ingredient: ing.ingredient,
//       nutrients: ing.nutrients,
//       servings: {
//         standard: {
//           amount: ing.servings[0].standard.amount,
//           uom: ing.servings[0].standard.uom
//         },
//         house: {
//           amount: ing.servings[0].house.amount,
//           uom: ing.servings[0].house.uom
//         }
//       }
//     });
//     ingredient
//       .save()
//       .then((e) => {
//         console.log("a");
//       })
//       .catch((err) => {
//         console.log("*******************Index:", i);
//         console.log(err);
//       });
//   }
// };

// Add the recipes.
// const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("recipes.txt", "utf8"));

schedule.addRecipes = function() {
  return;
  const i = 0;
  for (let i = 0; i < 10000; i++) {
    let recipe = new Recipe({
      title: data[i].title,
      description: "Enjoy one of our own recipes!",
      image: data[i].image,
      public: true,
      mealType: data[i].mealType,
      cuisine: data[i].cuisine,
      prepTime: data[i].prepTime,
      cookTime: data[i].cookTime,
      difficulty: data[i].difficulty,
      servings: data[i].servings,
      original: {
        nutrients: data[i].nutrition,
        ingredients: data[i].ingredients
      },
      author: data[i].author,
      timestamp: randomDate(new Date(2019, 1, 18), new Date()),
      score: data[i].score,
      views: data[i].views
    });
    recipe
      .save()
      .then((e) => {
        // console.log("a");
      })
      .catch((err) => {
        console.log("*******************Index:", i);
        // console.log(err);
      });
  }
};

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).getTime();
}

schedule.applyTags = function() {
  Recipe.find({})
    .exec()
    .then((recipes) => {
      recipes.forEach((e) => {
        const tags = addTags(e);
        Recipe.findByIdAndUpdate(e._id, { tags: tags })
          .exec()
          .then((update) => {});
      });
    })
    .catch((err) => {
      console.log("error");
    });
};

function addTags(recipe) {
  const tags = [];

  // User defined types.
  tags.push(recipe.mealType);
  // tags.push(recipe.cuisine);

  // Time.
  const time = recipe.cookTime + recipe.prepTime;
  if (time < 900) {
    tags.push("quick", "instant", "15 minutes", "15");
  } else if (time < 1800) {
    tags.push("quick", "short", "30 minutes", "30", "half hour");
  } else if (time < 3600) {
    tags.push("average", "60 minutes", "hour");
  } else {
    tags.push("long", "time consuming", "lengthy", "slow cooking", "slow cook");
  }

  // Difficulty.
  switch (recipe.difficulty) {
    case 0:
      tags.push("easy", "simple", "beginner", "novice", "accessible", "straightforward");
      break;
    case 1:
      tags.push("medium", "average", "experienced", "skill", "complicated", "resources");
      break;
    case 2:
      tags.push("difficult", "ambitious", "challenging", "tough", "professional");
      break;
  }

  const ings = recipe.original.ingredients.map((e) => {
    const name = e.ingredient;
    return { ing: name, amount: e.amount };
  });
  ings.sort((a, b) => {
    return b.amount - a.amount;
  });
  for (let i = 0; i < 10 && i < ings.length; i++) {
    const name = ings[i].ing;
    tags.push(name);
  }

  return tags;
}

module.exports = schedule;
