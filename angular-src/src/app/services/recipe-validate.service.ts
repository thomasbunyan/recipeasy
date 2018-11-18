import { Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { RecipeService } from "./recipe.service";

@Injectable()
export class RecipeValidateService {
  constructor(
    private userService: UserService,
    private recipeService: RecipeService
  ) { }

  validateIngredient(ingredient) {
    if (ingredient.length > 15) {
      return false;
    } else {
      return true;
    }
  }

  validateRecipe(recipe) {
    const errors = new Array(9).fill({ err: false });
    const testRe = /^[A-Za-z0-9,\.\-/()'# ]+$/;
    const timeRe = /^[0-9]{2}:[0-5][0-9]$/;
    const intRe = /^[0-9]$/;
    if (
      !testRe.test(recipe.title) ||
      recipe.title === "" ||
      recipe.title === undefined ||
      recipe.title.length < 6 ||
      recipe.title.split(" ").length < 1
    ) {
      errors[0] = { err: true, msg: "Title not valid." };
    }
    if (
      !testRe.test(recipe.description) ||
      recipe.description === "" ||
      recipe.description === undefined ||
      recipe.title.length < 6 ||
      recipe.title.split(" ").length < 1
    ) {
      errors[1] = { err: true, msg: "Description not valid." };
    }
    if (!timeRe.test(recipe.prepTime)) {
      errors[2] = { err: true, msg: "Preparation time not valid." };
    }
    if (!timeRe.test(recipe.cookTime)) {
      errors[3] = { err: true, msg: "Cooking time not valid." };
    }
    if (recipe.mealType === undefined) {
      errors[4] = { err: true, msg: "Select a meal type." };
    }
    if (recipe.difficulty === undefined) {
      errors[5] = { err: true, msg: "Select a difficulty." };
    }
    if (recipe.servings === undefined || recipe.servings < 1) {
      errors[6] = { err: true, msg: "Number of servings not valid." };
    }
    if (recipe.ingredients.length < 1) {
      errors[7] = { err: true, msg: "Not enough ingredients" };
    }
    if (recipe.method.length < 1) {
      errors[8] = { err: true, msg: "Not enough steps" };
    }
    return errors;
  }

  generateRecipe(recipeData, user) {
    const date = new Date();
    const recipe = {
      title: recipeData.title,
      description: recipeData.description,
      public: recipeData.public,
      mealType: recipeData.mealType,
      prepTime: recipeData.prepTime,
      cookTime: recipeData.cookTime,
      difficulty: recipeData.difficulty,
      servings: recipeData.servings,
      ingredients: recipeData.ingredients,
      method: recipeData.method,
      author: user,
      timeStamp: date.getTime(),
      date: date,
      score: 0,
      views: 0
    };

    // TODO: Nutritional info

    return recipe;
  }

  castVote(vote, currentVote, recipe, user, callback) {
    let amount = 0;
    if (currentVote === undefined) {
      currentVote = "none";
    }
    if (vote === "up" && currentVote === "up") {
      currentVote = "none";
      amount = -1;
    } else if (vote === "up" && currentVote === "down") {
      currentVote = "up";
      amount = 2;
    } else if (vote === "up" && currentVote === "none") {
      currentVote = "up";
      amount = 1;
    } else if (vote === "down" && currentVote === "up") {
      currentVote = "down";
      amount = -2;
    } else if (vote === "down" && currentVote === "down") {
      currentVote = "none";
      amount = 1;
    } else if (vote === "down" && currentVote === "none") {
      currentVote = "down";
      amount = -1;
    }

    this.recipeService.voteRecipe(recipe._id, amount).subscribe(data => {
      if (data.success) {
        this.userService
          .addRecipeData(user, { type: "vote", vote: currentVote }, recipe._id)
          .subscribe(data => {
            if (!data.success) {
              console.log("Failed to cast vote");
            }
            callback();
          });
      } else {
        console.log("Failed to cast vote");
      }
    });
    return { newScore: recipe.score + amount, newVote: currentVote };
  }

  toggleSave(userData, recipeId) {
    this.userService
      .addRecipeData(userData, { type: "save" }, recipeId)
      .subscribe(data => {
        if (!data.success) {
          console.log("Failed to toggle save");
        }
      });
  }
}
