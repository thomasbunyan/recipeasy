import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { RecipeService } from "../../services/recipe.service";
import { RecipeValidateService } from "../../services/recipe-validate.service";
import { MatTableDataSource, MatDialog } from "@angular/material";
import { IngredientDialogComponent } from "./ingredient-dialog/ingredient-dialog.component";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  user: any;

  // Fields for the recipe object.
  mealType: string;
  recipeTypes = ["Meal", "Snack", "Side", "Dessert", "Drink"];

  title: string;
  description: string;
  difficulty: number;
  servings = "";
  cookTime = "";
  prepTime = "";
  public = true;

  food: string;
  ingredient: any;
  detail: string;
  amount = "";
  unit: string;
  ingredients = [];
  ingredientsList = [];
  dropdownOpen = false;
  units = ["kg", "g", "lbs", "ml", "oz", "floz"];

  method = [];
  recipeImage: File = null;

  dataSource;
  dataSource2;
  timeout: any;

  mealError = false;
  errors = new Array(6).fill({ err: false });
  ingErrors = new Array(5).fill({ err: false });
  methErrors = new Array(4).fill({ err: false });
  canContinue = false;

  constructor(private titleService: Title, private router: Router, private recipeService: RecipeService, private recipeValidateService: RecipeValidateService, private dialog: MatDialog) {}

  ngOnInit() {
    this.titleService.setTitle("Create a recipe");
    this.user = JSON.parse(localStorage.getItem("user")).id;
    this.dataSource = new MatTableDataSource(this.ingredients);
    this.dataSource2 = new MatTableDataSource(this.method);
  }

  nextPage(stepper) {
    if (this.checkErrors(stepper, "all")) {
      stepper.next();
      this.canContinue = false;
    } else {
      console.log("Errors");
    }
  }

  prevPage(stepper) {
    stepper.previous();
    if (this.checkErrors(stepper, "all")) {
      this.canContinue = true;
    } else {
      this.canContinue = false;
    }
  }

  checkErrors(stepper, index) {
    this.canContinue = false;
    const page = stepper.selectedIndex;
    if (page === 0) {
      if (this.mealType !== undefined) {
        this.errors[0] = false;
        return true;
      } else {
        this.errors[0] = true;
      }
    } else if (page === 1) {
      const details = {
        title: this.title,
        description: this.description,
        prepTime: this.prepTime,
        cookTime: this.cookTime,
        difficulty: this.difficulty,
        servings: this.servings
      };
      const allErrs = this.recipeValidateService.validateDetails(details);
      if (index !== "all") {
        this.errors[index] = allErrs[index];
      } else {
        this.errors = allErrs;
      }
      const errs = allErrs.filter((e) => {
        return e.err;
      });
      if (errs.length === 0) {
        this.canContinue = true;
        return true;
      }
    } else if (page === 2) {
      const ingredient = {
        food: this.food,
        amount: this.amount,
        unit: this.unit,
        detail: this.detail
      };
      const allErrs = this.recipeValidateService.validateIngredient(ingredient);
      if (index !== "all") {
        this.ingErrors[index] = allErrs[index];
      } else {
        if (this.ingredients.length > 0) {
          return true;
        }
        this.ingErrors[4] = { err: true };
      }
      const errs = allErrs.filter((e) => {
        return e.err;
      });
    } else if (page === 3) {
      if (this.method.length === 0) {
        this.methErrors[0] = { err: true, msg: "Please add some instructions for the recipe." };
      } else {
        return true;
      }
    }
    return false;
  }

  // addIngredient(ingField) {
  //   const ingredient = {
  //     food: this.food,
  //     amount: this.amount,
  //     unit: this.unit,
  //     detail: this.detail
  //   };
  //   this.ingErrors = this.recipeValidateService.validateIngredient(ingredient);
  //   const errs = this.ingErrors.filter((e) => {
  //     return e.err;
  //   });
  //   if (errs.length === 0) {
  //     this.ingredients.push(ingredient);
  //     this.dataSource._updateChangeSubscription();
  //     this.food = "";
  //     this.amount = "";
  //     this.unit = "";
  //     ingField.focus();
  //     if (this.ingredients.length > 0) {
  //       this.canContinue = true;
  //     }
  //   }
  // }

  addStep(step) {
    if (step === null || step === undefined) {
      return;
    }
    step = step.replace(/\s\s+/g, " ");
    const re = /^[A-Za-z0-9,\.\-/;()'" ]+$/;
    if (step !== null && step !== undefined && re.test(step)) {
      step = step.charAt(0).toUpperCase() + step.slice(1);
      this.method.push({ step: step });
      this.dataSource2._updateChangeSubscription();
      this.canContinue = true;
      this.methErrors[0].err = false;
    }
  }
  removeStep(i) {
    this.method.splice(i, 1);
    this.dataSource2._updateChangeSubscription();
    if (this.method.length === 0) {
      this.canContinue = false;
    }
  }

  // updateIngredient(ingredient, i, food, amount, unit) {
  //   if (food.value !== undefined && food.value !== "") {
  //     ingredient.food = food.value;
  //   }
  //   if (amount.value !== undefined && amount.value !== "") {
  //     ingredient.amount = amount.value;
  //   }
  //   if (unit.value !== undefined && unit.value !== "") {
  //     ingredient.unit = unit.value;
  //   }
  //   this.ingredients[i] = ingredient;
  //   this.ingredientDetail = undefined;
  // }
  // addIngredientDetail(ingredient) {
  //   let details, message;
  //   if (this.ingredientDetail === undefined) {
  //     this.ingredientDetail = "eg. Preferably fresh, can be frozen.";
  //     message = "eg. Preferably fresh, can be frozen.";
  //   } else {
  //     if (ingredient !== undefined) {
  //       message = ingredient.detail;
  //     } else {
  //       message = this.ingredientDetail;
  //     }
  //   }
  //   details = prompt(
  //     "Add some additional information about this ingredient:",
  //     message
  //   );
  //   if (details === null) {
  //   } else {
  //     if (ingredient !== undefined) {
  //       ingredient.detail = details;
  //     } else {
  //       this.ingredientDetail = details;
  //     }
  //   }
  // }

  updateStep(step, index) {
    if (step === null || step === undefined) {
      return;
    }
    step = step.replace(/\s\s+/g, " ");
    const re = /^[A-Za-z0-9,\.\-/;()'" ]+$/;
    if (step !== null && step !== undefined && re.test(step)) {
      step = step.charAt(0).toUpperCase() + step.slice(1);
      this.method[index] = { step: step };
      this.dataSource2._updateChangeSubscription();
    }
  }

  disableEnter(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  uploadImage(e, image) {
    if (e.target.files && e.target.files[0]) {
      this.recipeImage = <File>e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        image.src = e.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    // console.log(e);
  }

  onRecipeSubmit() {
    const fd = new FormData();
    console.log(this.recipeImage);
    fd.append("image", this.recipeImage, this.recipeImage.name);
    this.recipeService.addRecipeImage(fd).subscribe((data) => {
      console.log(data);
    });
    return;

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
      const recipe = this.recipeValidateService.generateRecipe(recipeData, username);

      this.recipeService.addRecipe(recipe).subscribe((data) => {
        console.log(data);
      });
    }
  }

  // Formatting for the time inputs.
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
  clickOut(type, value, stepper) {
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
    let num = 3;
    if (type === "prep") {
      this.prepTime = time;
      num = 2;
    } else {
      this.cookTime = time;
      this.errors[num] = { err: false };
    }
    if (time !== "") {
      this.checkErrors(stepper, num);
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

  addIngredient(ingredient) {
    const ingredientDialog = this.dialog.open(IngredientDialogComponent, {
      data: {
        ingredient: ingredient
      }
    });
    ingredientDialog.afterClosed().subscribe((data) => {
      if (data !== undefined) {
        data["ingredient"] = ingredient._id;
        data["name"] = ingredient.ingredient;
        this.dropdownOpen = false;
        this.food = undefined;
        this.ingredients.push(data);
        this.dataSource._updateChangeSubscription();
      }
    });
  }
  removeIngredient(i) {
    this.ingredients.splice(i, 1);
    this.dataSource._updateChangeSubscription();
  }

  getAmount(amount, unit) {
    if (isNaN(unit)) {
      return amount + unit;
    } else {
      return amount;
    }
  }

  getIngredients() {
    const query = this.food;
    if (query === "" || query === undefined) {
      return false;
    }
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    this.timeout = setTimeout(() => {
      this.recipeValidateService.getIngredients(query).subscribe((data) => {
        this.ingredientsList = data.ingredients;
      });
    }, 1000);
  }
}
