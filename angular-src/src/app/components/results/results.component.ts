import { Component, OnInit, HostListener } from "@angular/core";
import { RecipeService } from "../../services/recipe.service";
import { CookbookService } from "../../services/cookbook.service";
import { UserService } from "../../services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { RecipeValidateService } from "../../services/recipe-validate.service";
import { Title } from "@angular/platform-browser";
import { RecipeDialogService } from "../recipe-dialog/recipe-dialog.service";
import { GeneralService } from "../../services/general.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  // Data
  userId: any;
  cookbooks = [];
  recipes = [];
  usersCookbooks: any = "";
  usersRecipes: any;
  searchQuery: String;
  cuisine: String;
  filterQuery: String;
  searchList = [];

  // Filter
  filterOpen = false;
  filter: any;
  ingredients: string;
  servings: string;
  difficulty: any;
  timeMin: string;
  timeMax: string;

  // General page
  loading = true;
  lastSeen = undefined;
  endOfPage = false;
  page = 1;

  voteLock = false;
  saveLock = false;
  copyText: String;

  constructor(
    private recipeService: RecipeService,
    private cookbookService: CookbookService,
    private recipeValidateService: RecipeValidateService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private recipeDialog: RecipeDialogService,
    private generalService: GeneralService
  ) {}

  ngOnInit() {
    this.userId = this.generalService.getUser().id;
    this.activatedRoute.queryParams.subscribe((params) => {
      this.searchQuery = params["search_query"];
      this.cuisine = params["cuisine"];
      this.page = 1;
      if (!this.searchQuery && !this.cuisine) {
        this.router.navigate(["/"]);
      } else if (this.cuisine) {
        this.titleService.setTitle("" + this.cuisine);
        this.lastSeen = undefined;
        this.endOfPage = false;
        this.getCuisineData();
      } else {
        this.titleService.setTitle("" + this.searchQuery);
        this.lastSeen = undefined;
        this.endOfPage = false;
        this.getData();
      }
      this.onScroll();
    });
  }

  private getData() {
    this.cookbookService.getCookbookSearch(this.searchQuery).subscribe((cookbookData) => {
      if (!cookbookData.success) {
        return console.log("Cookbooks could not be acquired");
      }
      this.recipeService.getRecipeSearch(this.searchQuery).subscribe((recipeData) => {
        if (!recipeData.success) {
          return console.log("Recipes could not be acquired");
        }
        this.recipes = recipeData.recipes;
        this.cookbooks = cookbookData.cookbooks;
        this.searchList = this.recipes;
        this.userService.getUserData().subscribe((data) => {
          if (data.success) {
            this.usersRecipes = data.recipes;
            this.usersCookbooks = data.cookbooks;
            this.recipes = this.applyUserData(recipeData.recipes);
            this.loading = false;
            this.onScroll();
          } else {
            console.log("User data could not be acquired");
          }
        });
      });
    });
  }

  getCuisineData() {
    this.recipeService.getRecipeCuisine(this.cuisine).subscribe((recipeData) => {
      if (!recipeData.success) {
        return console.log("Recipes could not be acquired");
      }
      this.recipes = recipeData.recipes;
      this.searchList = this.recipes;
      this.userService.getUserData().subscribe((data) => {
        if (data.success) {
          this.usersRecipes = data.recipes;
          this.recipes = this.applyUserData(recipeData.recipes);
          this.loading = false;
          this.onScroll();
        } else {
          console.log("User data could not be acquired");
        }
      });
    });
  }

  onScroll() {
    if (this.endOfPage || this.recipes.length === 0) {
      return;
    }
    let terms: String;
    if (this.searchQuery) {
      terms = this.searchQuery;
    } else if (this.cuisine) {
      terms = this.cuisine;
    }
    this.lastSeen = this.recipes[this.recipes.length - 1]._id;
    this.recipeService.getRecipeSearch(terms, this.page).subscribe((recipeData) => {
      this.recipes = this.recipes.concat(this.applyUserData(recipeData.recipes));
      this.applyFilter();
      this.page++;
      if (this.lastSeen === this.recipes[this.recipes.length - 1]._id) {
        this.endOfPage = true;
        return;
      }
    });
  }

  private applyUserData(recipeList) {
    recipeList.forEach((x) => {
      const indexVote = this.usersRecipes.voted.findIndex((y) => y.recipe._id === x._id);
      const indexSave = this.usersRecipes.saved.findIndex((y) => y.recipe._id === x._id);
      if (indexVote !== -1) {
        x.vote = this.usersRecipes.voted[indexVote].vote;
      }
      if (indexSave !== -1) {
        x.saved = true;
      }
    });
    this.cookbooks.forEach((x) => {
      const indexSave = this.usersCookbooks.saved.findIndex((y) => y.cookbook._id === x._id);
      if (indexSave !== -1) {
        x.saved = true;
      }
    });
    return recipeList;
  }

  filterSearch(apply) {
    if (apply) {
      const filter = {};
      if (this.ingredients && !/^\s*$/.test(this.ingredients)) {
        filter["ingredients"] = this.ingredients.split(",").map((item) => {
          return item.trim();
        });
      }
      if (this.servings !== undefined) {
        const regex = /^([0-9][0-9]*-[0-9][0-9]*|[0-9][0-9]*)$/;
        if (regex.test(this.servings)) {
          if (this.servings.indexOf("-") > -1) {
            const numbers = this.servings.split("-");
            if (parseInt(numbers[0], 10) < parseInt(numbers[1], 10)) {
              filter["servings"] = [parseInt(numbers[0], 10), parseInt(numbers[1], 10)];
            } else {
              filter["servings"] = [parseInt(numbers[1], 10), parseInt(numbers[0], 10)];
            }
          } else {
            filter["servings"] = [parseInt(this.servings, 10)];
          }
        } else {
          console.log("bad");
        }
      }
      if (this.difficulty !== undefined) {
        if (!isNaN(this.difficulty) && this.difficulty >= 0 && this.difficulty < 3) {
          filter["difficulty"] = parseInt(this.difficulty, 10);
        }
      }
      const timeRe = /^[0-9]{2}:[0-5][0-9]$/;
      if (this.timeMin !== undefined && timeRe.test(this.timeMin)) {
        filter["timeMin"] = this.generalService.getSeconds(this.timeMin);
      }
      if (this.timeMax !== undefined && timeRe.test(this.timeMax)) {
        filter["timeMax"] = this.generalService.getSeconds(this.timeMax);
      }
      this.filter = filter;
      console.log(filter);
      this.filterOpen = false;
    } else {
      this.ingredients = this.servings = this.difficulty = this.timeMin = this.timeMax = undefined;
      this.filter = {};
    }
    this.applyFilter();
  }

  applyFilter() {
    const list = this.recipes.filter((x) => {
      for (const key in this.filter) {
        if (!this.filter.hasOwnProperty(key)) {
          continue;
        }
        if (key === "ingredients") {
          const ing = x.ingredients.map((ingr) => ingr.food);
          if (!this.filter.ingredients.some((e) => ing.indexOf(e) > -1)) {
            return false;
          }
        } else if (key === "servings") {
          if (this.filter.servings.length === 1) {
            if (this.filter.servings[0] !== parseInt(x.servings, 10)) {
              return false;
            }
          } else {
            if (this.filter.servings[0] > x.servings || this.filter.servings[1] < x.servings) {
              return false;
            }
          }
        } else if (key === "difficulty") {
          if (this.filter.difficulty !== parseInt(x.difficulty, 10)) {
            return false;
          }
        } else if (key === "timeMin") {
          if (this.filter.timeMin < x.prepTime + x.cookTime) {
            return false;
          }
        } else if (key === "timeMax") {
          if (this.filter.timeMax > x.prepTime + x.cookTime) {
            return false;
          }
        }
      }
      return true;
    });
    this.searchList = list;
  }

  openRecipeOptions(recipe) {
    this.recipeDialog.open(recipe).subscribe((data) => {
      // console.log(data);
    });
  }

  viewRecipe(id) {
    this.router.navigate(["recipe", id]);
  }

  viewCookbook(cookbook) {
    this.router.navigate(["cookbook", cookbook._id]);
  }

  toggleCookbookSave(cookbook) {
    this.cookbookService.saveCookbook(cookbook);
    if (cookbook.saved) {
      cookbook.followers--;
    } else {
      cookbook.followers++;
    }
    cookbook.saved = !cookbook.saved;
  }

  toggleSave(recipe) {
    if (!this.saveLock) {
      this.saveLock = true;
      const userData = { id: this.userId, data: this.usersRecipes };
      this.userService.addUserData(userData, { data: "recipes", type: "save" }, recipe._id).subscribe((data) => {
        if (!data.success) {
          console.log("Failed to toggle save");
        } else {
          recipe.saved = !recipe.saved;
        }
        this.saveLock = false;
      });
    }
  }

  castVote(vote, recipe) {
    if (!this.voteLock) {
      this.voteLock = true;
      const user = { id: this.userId, data: this.usersRecipes };
      const result = this.recipeValidateService.castVote(vote, recipe.vote, recipe, user, () => {
        this.voteLock = false;
      });
      recipe.score = result.newScore;
      recipe.vote = result.newVote;
      this.voteLock = false;
    }
  }

  scrollCookbooks(dir, ref) {
    if (dir === "left") {
      ref.scrollTo({ left: 0, behavior: "smooth" });
      // this.cookbookPos = "left";
    } else {
      ref.scrollTo({ left: ref.scrollWidth, behavior: "smooth" });
      // this.cookbookPos = "right";
    }
  }
}
