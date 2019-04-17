import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { RecipeService } from "../../services/recipe.service";
import { RecipeValidateService } from "../../services/recipe-validate.service";
import { UserService } from "../../services/user.service";
import { MatTableDataSource, MatDialog } from "@angular/material";
import { IngredientDialogComponent } from "./ingredient-dialog/ingredient-dialog.component";
import { GeneralService } from "../../services/general.service";
import * as convert from "convert-units";

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
  units = ["mcg", "mg", "g", "kg", "oz", "lb", "mt", "t", "ml", "l", "tsp", "Tbs", "fl-oz", "cup", "pnt", "qt", "gal"];

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

  constructor(
    private titleService: Title,
    private router: Router,
    private recipeService: RecipeService,
    private recipeValidateService: RecipeValidateService,
    private userService: UserService,
    private dialog: MatDialog,
    private generalService: GeneralService
  ) {}

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

  addStep(step) {
    if (step === null || step === undefined) {
      return;
    }
    step = step.replace(/\s\s+/g, " ");
    const re = /^[A-Za-z0-9,\.\-/;()'" ]+$/;
    if (step !== null && step !== undefined && re.test(step)) {
      step = step.charAt(0).toUpperCase() + step.slice(1);
      this.method.push(step);
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
  }

  onRecipeSubmit() {
    const ing = this.ingredients.map((e) => {
      if (e.unit === "1") {
        // console.log(e);
        e.amount = e.amount * e.i.servings.standard.amount;
        e.unit = "g";
      } else {
        try {
          e.amount = convert(e.amount)
            .from(e.unit)
            .to("g");
          e.unit = "g";
        } catch (e) {
          console.log("Can't convert");
        }
      }
      return e;
    });

    const recipeData = {
      title: this.title,
      description: this.description,
      image: "",
      public: this.public,
      mealType: this.mealType,
      prepTime: this.generalService.getSeconds(this.prepTime),
      cookTime: this.generalService.getSeconds(this.cookTime),
      difficulty: this.difficulty,
      servings: parseInt(this.servings, 10),
      ingredients: ing,
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
      recipeData["tags"] = this.addTags(recipeData);
      if (this.recipeImage) {
        const fd = new FormData();
        fd.append("recipeImage", this.recipeImage, this.recipeImage.name);
        this.recipeService.addRecipeImage(fd).subscribe((data) => {
          recipeData.image = data.path;
          const username = JSON.parse(localStorage.getItem("user")).username;
          const recipe = this.recipeValidateService.generateRecipe(recipeData, username);
          this.recipeService.addRecipe(recipe).subscribe((data) => {
            if (data.success) {
              this.userService.addToAuthor(data.recipe._id, "recipes");
              this.router.navigate(["/recipe" + data.recipe._id]);
            }
          });
        });
      } else {
        const username = JSON.parse(localStorage.getItem("user")).username;
        const recipe = this.recipeValidateService.generateRecipe(recipeData, username);
        this.recipeService.addRecipe(recipe).subscribe((data) => {
          if (data.success) {
            this.router.navigate(["/recipe" + data.recipe._id]);
          }
        });
      }
    }
    return;
  }

  addTags(recipe) {
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

    const ings = recipe.ingredients.map((e) => {
      const name = e.name;
      // delete e.name;
      delete e.i;
      return { ing: name, amount: e.amount };
    });
    ings.sort((a, b) => {
      return b.amount - a.amount;
    });
    for (let i = 0; i < 5 && i < ings.length; i++) {
      const name = ings[i].ing;
      tags.push(name);
    }

    return tags;
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
    // console.log(ingredient);
    const ingredientDialog = this.dialog.open(IngredientDialogComponent, {
      data: {
        ingredient: ingredient
      }
    });
    ingredientDialog.afterClosed().subscribe((data) => {
      if (data !== undefined) {
        data["ingredient"] = ingredient._id;
        data["name"] = ingredient.ingredient;
        data["i"] = ingredient;
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
    }, 200);
  }
}
