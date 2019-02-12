const schedule = {};
const Recipe = require("./models/recipe");

schedule.startAnalytics = function() {
  calcTrending();
};

function calcTrending() {
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
      ratings.sort((a, b) => {
        return a.score - b.score;
      });
      console.log("Calculated");
    })
    .catch((err) => {
      console.log("Error:", err);
    });
}

module.exports = schedule;
