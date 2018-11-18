import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { RecipeService } from "../../../services/recipe.service";
import { RecipeValidateService } from "../../../services/recipe-validate.service";

@Component({
  selector: "app-create-recipe",
  templateUrl: "./create-recipe.component.html",
  styleUrls: ["./create-recipe.component.css"]
})
export class CreateRecipeComponent implements OnInit {
  user: any;

  // Fields for the recipe object.
  title: string;
  description: string;
  public = true;
  mealType: string;
  cookTime = "";
  prepTime = "";
  difficulty: number;
  servings = "";
  ingredients = [];
  method = [];

  // Fields used for recipe form.
  ingredientError = "";
  recipeTypes = ["Meal", "Snack", "Side", "Dessert", "Drink"];
  ingredientDetail: string;
  errors = new Array(9).fill({ err: false });

  constructor(
    private titleService: Title,
    private router: Router,
    private recipeService: RecipeService,
    private recipeValidateService: RecipeValidateService
  ) {}

  ngOnInit() {
    this.titleService.setTitle("Create a recipe");
    this.user = JSON.parse(localStorage.getItem("user")).id;
  }

  addIngredient(food, amount, unit, ingField) {
    const ingredient = {
      food: food,
      amount: amount,
      unit: unit,
      detail: this.ingredientDetail
    };
    this.ingredients.push(ingredient);
    this.ingredientDetail = undefined;
    ingField.focus();
  }
  updateIngredient(ingredient, i, food, amount, unit) {
    if (food.value !== undefined && food.value !== "") {
      ingredient.food = food.value;
    }
    if (amount.value !== undefined && amount.value !== "") {
      ingredient.amount = amount.value;
    }
    if (unit.value !== undefined && unit.value !== "") {
      ingredient.unit = unit.value;
    }
    this.ingredients[i] = ingredient;
    this.ingredientDetail = undefined;
  }
  removeIngredient(i) {
    this.ingredients.splice(i, 1);
  }
  addIngredientDetail(ingredient) {
    let details, message;
    if (this.ingredientDetail === undefined) {
      this.ingredientDetail = "eg. Preferably fresh, can be frozen.";
      message = "eg. Preferably fresh, can be frozen.";
    } else {
      if (ingredient !== undefined) {
        message = ingredient.detail;
      } else {
        message = this.ingredientDetail;
      }
    }
    details = prompt(
      "Add some additional information about this ingredient:",
      message
    );
    if (details === null) {
    } else {
      if (ingredient !== undefined) {
        ingredient.detail = details;
      } else {
        this.ingredientDetail = details;
      }
    }
  }

  addStep(step) {
    if (step === null || step === undefined) {
      return;
    }
    step = step.replace(/\s\s+/g, " ");
    const re = /^[A-Za-z0-9,\.\-/;()'" ]+$/;
    if (step !== null && step !== undefined && re.test(step)) {
      step = step.charAt(0).toUpperCase() + step.slice(1);
      this.method.push({ step: step });
    }
  }
  updateStep(step, index) {
    if (step === null || step === undefined) {
      return;
    }
    step = step.replace(/\s\s+/g, " ");
    const re = /^[A-Za-z0-9,\.\-/;()'" ]+$/;
    if (step !== null && step !== undefined && re.test(step)) {
      step = step.charAt(0).toUpperCase() + step.slice(1);
      this.method[index] = { step: step };
    }
  }
  removeStep(i) {
    this.method.splice(i, 1);
  }

  disableEnter(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  onRecipeSubmit() {
    const recipeData = {
      title: this.title,
      description: this.description,
      public: this.public,
      mealType: this.mealType,
      prepTime: this.prepTime,
      cookTime: this.cookTime,
      difficulty: this.difficulty,
      servings: parseInt(this.servings, 10),
      ingredients: this.ingredients,
      method: this.method
    };
    this.errors = this.recipeValidateService.validateRecipe(recipeData);
    let anyError = false;
    for (let i = 0; i < this.errors.length; i++) {
      if (this.errors[i].err) {
        anyError = true;
        console.log("Validation errors", this.errors[i].msg);
      }
    }
    if (!anyError) {
      const username = JSON.parse(localStorage.getItem("user")).username;
      const recipe = this.recipeValidateService.generateRecipe(
        recipeData,
        username
      );
      this.recipeService.addRecipe(recipe).subscribe(data => {
        console.log(data);
      });
    }
  }

  timeInput(key, time) {
    if (key.key === "Tab") {
      return;
    }
    key.preventDefault();
    const keyPressed = key.key;
    const re = /([0-9]|:)/;
    const re2 = /([0-5]|:)/;
    if (time === "cook") {
      if (re.test(keyPressed) && this.cookTime.length < 5) {
        if (keyPressed === ":") {
          if (this.cookTime.length === 2) {
            this.cookTime += ":";
          } else if (this.cookTime.length === 0) {
            this.cookTime = "00:" + this.cookTime;
          } else if (this.cookTime.length === 1) {
            this.cookTime = "0" + this.cookTime + ":";
          }
        } else if (this.cookTime.length === 2) {
          if (re2.test(keyPressed)) {
            this.cookTime += ":" + keyPressed;
          }
        } else if (this.cookTime.length === 3) {
          if (re2.test(keyPressed)) {
            this.cookTime += keyPressed;
          }
        } else {
          this.cookTime += keyPressed;
        }
      } else if (keyPressed === "Backspace") {
        if (this.cookTime.length === 4) {
          this.cookTime = this.cookTime.substr(0, this.cookTime.length - 2);
        } else {
          this.cookTime = this.cookTime.substr(0, this.cookTime.length - 1);
        }
      }
    } else {
      if (re.test(keyPressed) && this.prepTime.length < 5) {
        if (keyPressed === ":") {
          if (this.prepTime.length === 2) {
            this.prepTime += ":";
          } else if (this.prepTime.length === 0) {
            this.prepTime = "00:" + this.prepTime;
          } else if (this.prepTime.length === 1) {
            this.prepTime = "0" + this.prepTime + ":";
          }
        } else if (this.prepTime.length === 2) {
          if (re2.test(keyPressed)) {
            this.prepTime += ":" + keyPressed;
          }
        } else if (this.prepTime.length === 3) {
          if (re2.test(keyPressed)) {
            this.prepTime += keyPressed;
          }
        } else {
          this.prepTime += keyPressed;
        }
      } else if (keyPressed === "Backspace") {
        if (this.prepTime.length === 4) {
          this.prepTime = this.prepTime.substr(0, this.prepTime.length - 2);
        } else {
          this.prepTime = this.prepTime.substr(0, this.prepTime.length - 1);
        }
      }
    }
  }

  clickOut(type, value) {
    let time = "";
    if (value === "") {
      time = "";
    } else if (!value.includes(":")) {
      if (value < 4 && value.length < 2) {
        time = "0" + value + ":00";
      } else if (value < 10 && value.length < 2) {
        time = "00:0" + value;
      } else {
        time = "00:" + value;
      }
    } else {
      const right = value.substr(value.indexOf(":") + 1);
      if (right.length === 0) {
        time = value + "00";
      } else if (right.length === 1) {
        time = value + "0";
      } else {
        time = value;
      }
    }
    if (type === "cook") {
      this.cookTime = time;
    } else {
      this.prepTime = time;
    }
  }

  enterInt(key) {
    if (key.key === "Tab") {
      return;
    }
    key.preventDefault();
    const keyPressed = key.key;
    const re = /^[0-9]$/;
    if (keyPressed === "Backspace") {
      this.servings = this.servings.substr(0, this.servings.length - 1);
    }
    if (re.test(keyPressed)) {
      this.servings += keyPressed;
    }
  }
}
