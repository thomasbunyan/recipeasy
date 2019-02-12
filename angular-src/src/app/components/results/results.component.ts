import { Component, OnInit, HostListener } from "@angular/core";
import { RecipeService } from "../../services/recipe.service";
import { CookbookService } from "../../services/cookbook.service";
import { UserService } from "../../services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { RecipeValidateService } from "../../services/recipe-validate.service";
import { Title } from "@angular/platform-browser";
import { SidenavService } from "../sidenav/sidenav.service";
import { MatDialog } from "@angular/material";
import { FilterDialogComponent } from "./filter-dialog/filter-dialog.component";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  userId: any;
  cookbooks = [];
  recipes = [];
  usersCookbooks: any = "";
  usersRecipes: any;
  searchQuery: String;
  filterQuery: String;
  searchList = [];

  // Filter
  filterOpen = false;
  ingredients: string;
  servings: number;
  difficulty: number;
  timeMin: string;
  timeMax: string;

  // Sort through these.
  // step = 0;
  lastSeen = undefined;
  endOfPage = false;

  voteLock = false;
  saveLock = false;
  openWindow: any;
  copyText: String;

  constructor(
    private recipeService: RecipeService,
    private cookbookService: CookbookService,
    private recipeValidateService: RecipeValidateService,
    private sidenavService: SidenavService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    console.log("Start load");
    this.sidenavService.close();
    this.userId = JSON.parse(localStorage.getItem("user")).id;
    this.activatedRoute.queryParams.subscribe((params) => {
      this.searchQuery = params["search_query"];
      if (!this.searchQuery) {
        this.router.navigate(["/"]);
      } else {
        this.titleService.setTitle("" + this.searchQuery);
        this.lastSeen = undefined;
        this.endOfPage = false;
        this.getData();
      }
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
            console.log("Finish load");
            this.onScroll();
          } else {
            console.log("User data could not be acquired");
          }
        });
      });
    });
  }

  onScroll() {
    if (this.endOfPage) {
      return;
    }
    this.lastSeen = this.searchList[this.searchList.length - 1]._id;
    this.recipeService.getRecipeSearch(this.searchQuery, this.lastSeen).subscribe((recipeData) => {
      this.recipes = this.recipes.concat(this.applyUserData(recipeData.recipes));
      this.searchList = this.recipes;
      if (this.lastSeen === this.searchList[this.searchList.length - 1]._id) {
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

  viewRecipe(id) {
    if (this.openWindow === undefined) {
      this.router.navigate(["recipe", id]);
    }
  }

  viewCookbook(cookbook) {
    this.router.navigate(["cookbook", cookbook._id]);
  }

  filterSearch(apply) {
    if (apply) {
      const filter = {};
      if (this.ingredients !== undefined) {
        filter["ingredients"] = this.ingredients.split(",").map(function(item) {
          return item.trim();
        });
      }
      if (this.servings !== undefined) {
      }
      if (this.difficulty !== undefined) {
      }
      if (this.timeMin !== undefined) {
      }
      if (this.timeMax !== undefined) {
      }
      this.filterOpen = false;
      console.log(filter);
    } else {
      this.ingredients = this.servings = this.difficulty = this.timeMin = this.timeMax = undefined;
    }
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

  updateSearch() {
    const query = this.filterQuery;
    const newFoods = [];
    this.recipes.forEach((el) => {
      if (el.name.toLowerCase().includes(query.toLowerCase())) {
        newFoods.push(el);
      }
    });
    this.searchList = newFoods;
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
      if (this.openWindow !== undefined) {
        this.openWindow.showOptions = false;
        this.openWindow = undefined;
      }
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

  addToCookbook(cookbook, recipe) {
    if (cookbook === "new") {
      this.cookbookService.addCookbook(recipe._id).subscribe((data) => {
        if (!data.success) {
          console.log("Could not create cookbook");
        } else {
          const user = { id: this.userId, data: this.usersCookbooks };
          const update = { data: "cookbooks", type: "author" };
          this.userService.addUserData(user, update, data.cookbook._id).subscribe((data) => {
            if (!data.success) {
              console.log("Could not update user data");
            } else {
              this.usersCookbooks = data.cookbooks;
            }
          });
        }
      });
    } else {
      this.cookbookService.updateCookbook(cookbook, { type: "recipes", data: recipe }).subscribe((data) => {
        if (!data.success) {
          console.log("Unable to add recipe");
        } else {
          console.log(data.cookbook.recipes);
        }
      });

      // this.cookbookService
      //   .getCookBookById(book.cookbook, false)
      //   .subscribe(data => {
      //     if (data.success) {
      //       const recipes = data.cookbook.recipes.slice(0);
      //       const index = recipes.findIndex(x => x === recipe._id);
      //       if (index !== -1) {
      //         console.log("Duplicate");
      //         return;
      //       }
      //       recipes.push(recipe._id);
      //       this.cookbookService
      //         .updateCookbookRecipes(data.cookbook._id, recipes)
      //         .subscribe(data => {
      //           if (!data.success) {
      //             console.log("Could not add to cookbook");
      //           }
      //         });
      //     }
      //   });
    }
    this.openWindow.showOptions = false;
    this.openWindow = undefined;
  }

  refineSearch() {
    const refineDialog = this.dialog.open(FilterDialogComponent, {
      data: {
        title: "Hello world"
      }
    });
    refineDialog.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  getTimeAgo(timeStamp) {
    let diff = (new Date().getTime() - new Date(timeStamp).getTime()) / 60000;
    if (isNaN(diff)) {
      return "not a valid time";
    } else if (diff < 1) {
      return "less than a minute ago";
    } else if (diff < 60) {
      if (Math.round(diff) === 1) {
        return Math.round(diff) + " minute ago";
      }
      return Math.round(diff) + " minutes ago";
    } else if ((diff = diff / 60) < 24) {
      if (Math.round(diff) === 1) {
        return Math.round(diff) + " hour ago";
      }
      return Math.round(diff) + " hours ago";
    } else if ((diff = diff / 24) < 30) {
      if (Math.round(diff) === 1) {
        return Math.round(diff) + " day ago";
      }
      return Math.round(diff) + " days ago";
    } else if ((diff = diff / 30) < 12) {
      if (Math.round(diff) === 1) {
        return Math.round(diff) + " month ago";
      }
      return Math.round(diff) + " months ago";
    } else {
      diff = diff / 12;
      if (Math.round(diff) === 1) {
        return Math.round(diff) + " year ago";
      }
      return Math.round(diff) + " years ago";
    }
  }

  // TODO: Move this to the adding stage and save to DB.
  getTotalTime(recipe) {
    if (recipe.cookTime !== undefined) {
      const cook = recipe.cookTime.split(":");
      const prep = recipe.prepTime.split(":");

      const totMins = parseInt(cook[1], 10) + parseInt(prep[1], 10);
      const additionalHours = Math.floor(totMins / 60);
      const additionalMins = totMins % 60;

      let additionalMinsS;
      if (additionalMins < 10) {
        additionalMinsS = "0" + additionalMins;
      } else {
        additionalMinsS = additionalMins;
      }

      const totHours = parseInt(cook[0], 10) + parseInt(prep[0], 10) + additionalHours;
      const totalTime = totHours + ":" + additionalMinsS;

      return totalTime;
    } else {
      return "00:15";
    }
  }

  // scrollCookbooks(dir, ref) {
  //   if (dir === "left") {
  //     ref.scrollTo({ left: 0, behavior: "smooth" });
  //     this.cookbookPos = "left";
  //   } else {
  //     ref.scrollTo({ left: ref.scrollWidth, behavior: "smooth" });
  //     this.cookbookPos = "right";
  //   }
  // }
}
