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
  cuisineType: string;
  recipeTypes = ["main", "salad", "side", "dessert", "soup", "appetizer", "bread", "lunch", "breakfast", "beverage", "cocktail", "tea"];
  cuisineTypes = ["american", "british", "caribbean", "chinese", "french", "greek", "indian", "italian", "japanese", "mediterranean", "mexican", "moroccan", "spanish", "thai", "turkish", "vietnamese"];

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
  loading = false;

  dataSource;
  dataSource2;
  timeout: any;

  page = 0;

  mealError = false;
  newErrors = new Array(9).fill({ err: false });
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
    this.user = this.generalService.getUser().id;
    this.dataSource = new MatTableDataSource(this.ingredients);
    this.dataSource2 = new MatTableDataSource(this.method);
  }

  nextPage(stepper) {
    if (!this.checkErrors2()) {
      const amount = stepper.scrollLeft + stepper.offsetWidth + 40;
      if (amount + stepper.offsetWidth + 40 <= stepper.scrollWidth && stepper.scrollLeft % (stepper.offsetWidth + 40) === 0) {
        this.page++;
        this.canContinue = false;
        stepper.scrollLeft = amount;
      }
    }
  }

  prevPage(stepper) {
    const amount = stepper.scrollLeft - (stepper.offsetWidth + 40);
    if (amount >= 0 && stepper.scrollLeft % (stepper.offsetWidth + 40) === 0) {
      this.page--;
      stepper.scrollLeft = amount;
    }
  }

  checkErrors2() {
    let err: any;
    switch (this.page) {
      case 0:
        err = this.recipeValidateService.validateTitle(this.title);
        this.newErrors[0] = err;
        if (!err.err) {
          this.canContinue = true;
        }
        return err.err;
      case 1:
        err = this.recipeValidateService.validateDescription(this.description);
        this.newErrors[1] = err;
        if (!err.err) {
          this.canContinue = true;
        }
        return err.err;
      case 2:
        if (!this.mealType) {
          this.newErrors[2] = true;
          return true;
        } else {
          this.newErrors[2] = false;
          this.canContinue = true;
          return false;
        }
      case 3:
        if (!this.cuisineType) {
          this.newErrors[3] = true;
          return true;
        } else {
          this.newErrors[3] = false;
          this.canContinue = true;
          return false;
        }
      case 4:
        err = this.recipeValidateService.validateTime({ prepTime: this.prepTime, cookTime: this.cookTime });
        this.newErrors[4] = err;
        if (!err.err) {
          this.canContinue = true;
        }
        return err.err;
      case 5:
        err = this.recipeValidateService.validateServings(this.servings);
        this.newErrors[5] = err;
        if (!err.err) {
          this.canContinue = true;
        }
        return err.err;
      case 6:
        err = this.recipeValidateService.validateDifficulty(this.difficulty);
        this.newErrors[6] = err;
        if (!err.err) {
          this.canContinue = true;
        }
        return err.err;
      case 7:
        if (this.ingredients.length === 0) {
          this.newErrors[7] = { err: true, msg: "Please add some ingredients to your recipe." };
          this.canContinue = false;
        } else {
          this.newErrors[7] = { err: false };
          this.canContinue = true;
        }
        return this.newErrors[7].err;
      case 8:
        if (this.method.length === 0) {
          this.newErrors[8] = { err: true, msg: "Please add some instructions for your recipe." };
          this.canContinue = false;
        } else {
          this.newErrors[8] = { err: false };
          this.canContinue = true;
        }
        return this.newErrors[8].err;
      default:
        console.log("Error page");
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
      if (this.recipeImage.type.split("/")[0] !== "image") {
        this.recipeImage = undefined;
        this.newErrors[9] = { err: true, msg: "Bad file type, make sure it's an image" };
        return;
      }
      this.newErrors[9] = { err: false };
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
          // console.log("Can't convert");
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
      cuisine: this.cuisineType,
      prepTime: this.generalService.getSeconds(this.prepTime),
      cookTime: this.generalService.getSeconds(this.cookTime),
      difficulty: this.difficulty,
      servings: parseInt(this.servings, 10),
      ingredients: ing,
      method: this.method,
      author: this.generalService.getUser().username
    };
    recipeData["tags"] = this.addTags(recipeData);

    // this.errors = this.recipeValidateService.validateRecipe(recipeData);
    // let anyError = false;
    // for (let i = 0; i < this.errors.length; i++) {
    //   if (this.errors[i].err) {
    //     anyError = true;
    //     console.log("Validation errors", this.errors[i].msg);
    //   }
    // }

    if (this.recipeImage) {
      this.newErrors[9] = { err: false };
      const fd = new FormData();
      fd.append("recipeImage", this.recipeImage, this.recipeImage.name);
      this.recipeService.addRecipeImage(fd).subscribe((data) => {
        recipeData.image = data.path;
        this.recipeService.addRecipe(recipeData).subscribe((data) => {
          if (data.success) {
            this.userService.addToAuthor(data.recipe._id, "recipes");
            this.router.navigate(["/recipe" + data.recipe._id]);
          }
        });
      });
    } else {
      this.newErrors[9] = { err: true, msg: "Please upload an image for your recipe" };
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
    if (type === "prep") {
      this.prepTime = time;
    } else {
      this.cookTime = time;
      this.newErrors[this.page] = { err: false };
    }
    if (time !== "") {
      this.checkErrors2();
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
        this.checkErrors2();
      }
    });
  }
  removeIngredient(i) {
    this.checkErrors2();
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
    this.loading = true;
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
        this.loading = false;
      });
    }, 200);
  }
}
