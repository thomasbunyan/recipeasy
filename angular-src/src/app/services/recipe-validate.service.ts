import { Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { RecipeService } from "./recipe.service";
import { Observable } from "rxjs";
import { Http, Headers } from "@angular/http";

@Injectable()
export class RecipeValidateService {
  saveLock = false;

  constructor(private userService: UserService, private recipeService: RecipeService, private http: Http) {}

  validateIngredient(ingredient) {
    const errors = new Array(4).fill({ err: false });
    if (ingredient.food === "" || ingredient.food === undefined || ingredient.food.length > 15) {
      errors[0] = { err: true, msg: "Food not valid." };
    }
    if (ingredient.detail === undefined) {
    } else if (ingredient.detail === "" || ingredient.detail.length > 15) {
      errors[1] = { err: true, msg: "Notes not valid." };
    }
    if (ingredient.amount === "" || ingredient.amount === undefined || isNaN(ingredient.amount) || ingredient.amount > 10000) {
      errors[2] = { err: true, msg: "Amount not valid." };
    }
    if (ingredient.unit === "" || ingredient.unit === undefined) {
      errors[3] = { err: true, msg: "Unit not valid." };
    }
    return errors;
  }

  validateDetails(details) {
    const errors = new Array(6).fill({ err: false });
    const testRe = /^[A-Za-z0-9,\.\-/()'# ]+$/;
    const timeRe = /^[0-9]{2}:[0-5][0-9]$/;
    if (!testRe.test(details.title) || details.title === "" || details.title === undefined || details.title.length < 6 || details.title.split(" ").length < 1) {
      errors[0] = { err: true, msg: "Title not valid." };
    }
    if (!testRe.test(details.description) || details.description === "" || details.description === undefined || details.title.length < 6 || details.title.split(" ").length < 1) {
      errors[1] = { err: true, msg: "Description not valid." };
    }
    if (!timeRe.test(details.prepTime)) {
      errors[2] = { err: true, msg: "Preparation time not valid." };
    }
    if (!timeRe.test(details.cookTime)) {
      errors[3] = { err: true, msg: "Cooking time not valid." };
    }
    if (details.difficulty === undefined) {
      errors[4] = { err: true, msg: "Select a difficulty." };
    }
    if (details.servings === undefined || details.servings < 1) {
      errors[5] = { err: true, msg: "Number of servings not valid." };
    }
    return errors;
  }

  validateRecipe(recipe) {
    const errors = new Array(9).fill({ err: false });
    const testRe = /^[A-Za-z0-9,\.\-/()'# ]+$/;
    const timeRe = /^[0-9]{2}:[0-5][0-9]$/;
    const intRe = /^[0-9]$/;
    if (!testRe.test(recipe.title) || recipe.title === "" || recipe.title === undefined || recipe.title.length < 6 || recipe.title.split(" ").length < 1) {
      errors[0] = { err: true, msg: "Title not valid." };
    }
    if (!testRe.test(recipe.description) || recipe.description === "" || recipe.description === undefined || recipe.title.length < 6 || recipe.title.split(" ").length < 1) {
      errors[1] = { err: true, msg: "Description not valid." };
    }
    if (recipe.prepTime === undefined || recipe.prepTime < 59) {
      errors[2] = { err: true, msg: "Preparation time not valid." };
    }
    if (recipe.prepTime === undefined) {
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
      author: user
    };

    // TODO: Nutritional info

    return recipe;
  }

  castVote(vote, currentVote, recipe, user, callback) {
    console.log(recipe);
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

    this.recipeService.voteRecipe(recipe._id, amount).subscribe((data) => {
      if (data.success) {
        this.userService.addUserData(user, { data: "recipes", type: "vote", vote: currentVote }, recipe._id).subscribe((data) => {
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

  toggleSave(data, recipe) {
    return new Observable((o) => {
      if (!this.saveLock) {
        this.saveLock = true;
        const userData = { id: JSON.parse(localStorage.getItem("user")).id, data: data.recipes };
        this.userService.addUserData(userData, { data: "recipes", type: "save" }, recipe._id).subscribe((data) => {
          if (!data.success) {
            console.log("Failed to toggle save");
          }
          o.next(data);
          this.saveLock = false;
          o.complete();
        });
      }
    });
  }

  getIngredients(query) {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/ingredients", {
        headers: headers,
        params: {
          search_query: query
        }
      })
      .map((res) => res.json());
  }
}
