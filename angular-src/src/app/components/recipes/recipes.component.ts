import { Component, OnInit, HostListener } from "@angular/core";
import { RecipeService } from "../../services/recipe.service";
import { CookbookService } from "../../services/cookbook.service";
import { UserService } from "../../services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { RecipeValidateService } from "../../services/recipe-validate.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  recipes: any;
  userId: any;
  usersRecipes: any;
  usersCookbooks: any = "";
  searchQuery: String;
  filterQuery: String;
  searchList = [];

  filterActive = false;
  timeType: String = "day";
  sortType: String = "hot";

  timeStamp: any;
  cookbookPos = "left";
  scrolledPast = false;

  cookbooks = [];

  voteLock = false;
  saveLock = false;

  openWindow: any;
  copyText: String;

  constructor(
    private recipeService: RecipeService,
    private cookbookService: CookbookService,
    private recipeValidateService: RecipeValidateService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem("user")).id;
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchQuery = params['search_query'];
    });
    if (this.searchQuery) {
      this.titleService.setTitle("" + this.searchQuery);
    } else {
      this.titleService.setTitle("Discover");
    }

    // TODO: If search query exists, apply it to the GET.

    this.recipeService.getRecipe().subscribe(data => {
      if (data.success) {
        this.recipes = data.recipes;
        this.searchList = this.recipes;
      } else {
        console.log("Recipes could not be acquired");
      }
    });
    this.cookbookService.getCookbooks().subscribe(data => {
      if (data.success) {
        this.cookbooks = data.cookbooks;
      } else {
        console.log("Cookbooks could not be acquired");
      }
    });
    this.userService.getUserRecipes().subscribe(data => {
      if (data.success) {
        this.usersRecipes = data.item;
        this.recipes.forEach(x => {
          const index = this.usersRecipes.voted.findIndex(y => y.recipe === x._id);
          if (index !== -1) {
            x.vote = this.usersRecipes.voted[index].vote;
          }
        });

      } else {
        console.log("User recipes could not be acquired");
      }
    });
    this.userService.getUserCookbooks().subscribe(data => {
      if (data.success) {
        if (this.usersCookbooks !== undefined) {
          this.usersCookbooks = data.item;
        } else {
          this.usersCookbooks = [];
        }
      } else {
        console.log("User cookbooks could not be acquired");
      }
    });
    this.timeStamp = new Date().getTime();
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    const element = document.getElementById("bar");
    if (window.pageYOffset > 30) {
      element.classList.add("sticky");
    } else {
      element.classList.remove("sticky");
    }
  }

  viewRecipe(id) {
    if (this.openWindow === undefined) {
      this.router.navigate(["recipe", id]);
    }
  }

  updateSearch() {
    const query = this.filterQuery;
    const newFoods = [];
    this.recipes.forEach(el => {
      if (el.name.toLowerCase().includes(query.toLowerCase())) {
        newFoods.push(el);
      }
    });
    this.searchList = newFoods;
  }

  isSaved(recipeId) {
    if (this.usersRecipes === undefined) {
      return false;
    }
    const saved = this.usersRecipes.saved;
    const index = saved.findIndex(x => x.recipe === recipeId);
    if (index !== -1) {
      return true;
    }
    return false;
  }

  // isVoted(recipeId, voteType) {
  //   if (this.usersRecipes === undefined) {
  //     return false;
  //   }
  //   const index = this.usersRecipes.findIndex(x => x.id === recipeId);
  //   if (index !== -1 && this.usersRecipes[index].vote === voteType) {
  //     return true;
  //   }
  //   return false;
  // }

  toggleSave(id) {
    if (!this.saveLock) {
      this.saveLock = true;
      const userData = { id: this.userId, recipes: this.usersRecipes };
      this.userService
        .addRecipeData(userData, { type: "save" }, id)
        .subscribe(data => {
          if (!data.success) {
            console.log("Failed to toggle save");
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

      const user = { id: this.userId, recipes: this.usersRecipes };
      const result = this.recipeValidateService.castVote(
        vote,
        recipe.vote,
        recipe,
        user,
        () => {
          this.voteLock = false;
        }
      );
      recipe.score = result.newScore;
      recipe.vote = result.newVote;

      this.voteLock = false;
    }
  }

  getVote(recipe) {
    if (this.usersRecipes === undefined) {
      return;
    }
    const index = this.usersRecipes.findIndex(x => x.id === recipe._id);
    if (index !== -1) {
      recipe.vote = this.usersRecipes[index].vote;
    }
  }

  getTimeAgo(timeStamp) {
    let diff = (this.timeStamp - new Date(timeStamp).getTime()) / 60000;
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

      const totHours =
        parseInt(cook[0], 10) + parseInt(prep[0], 10) + additionalHours;
      const totalTime = totHours + ":" + additionalMinsS;

      return totalTime;
    } else {
      return "00:15";
    }
  }

  scrollCookbooks(dir, ref) {
    if (dir === "left") {
      ref.scrollTo({ left: 0, behavior: "smooth" });
      this.cookbookPos = "left";
    } else {
      ref.scrollTo({ left: ref.scrollWidth, behavior: "smooth" });
      this.cookbookPos = "right";
    }
  }

  moreOptions(e, recipe, optionsMenu) {
    if (recipe.showOptions) {
      recipe.showOptions = false;
      this.openWindow = undefined;
    } else {
      if (this.openWindow !== undefined) {
        this.openWindow.showOptions = false;
      }
      optionsMenu.style.top = e.pageY + "px";
      optionsMenu.style.left = e.pageX + "px";
      recipe.showOptions = true;
      this.openWindow = recipe;
    }
  }

  onRightClick(e, recipe, optionsMenu) {
    if (recipe.showOptions) {
      optionsMenu.style.top = e.pageY + "px";
      optionsMenu.style.left = e.pageX + "px";
    } else {
      if (this.openWindow !== undefined) {
        this.openWindow.showOptions = false;
      }
      optionsMenu.style.top = e.pageY + "px";
      optionsMenu.style.left = e.pageX + "px";
      recipe.showOptions = true;
      this.openWindow = recipe;
    }
  }

  addToCookbook(book, recipe) {
    if (book === "new") {
      this.cookbookService
        .addCookbook(recipe._id, this.userId)
        .subscribe(data => {
          if (!data.success) {
            console.log("Could not create cookbook");
          } else {
            const user = { id: this.userId, cookbooks: this.usersCookbooks };
            this.userService
              .addCookbookData(user, { type: "author" }, data.cookbook)
              .subscribe(data => {
                if (!data.success) {
                  console.log("Could not add cookbook");
                }
              });
          }
        });
    } else {
      this.cookbookService.getCookBookById(book.cookbook, false).subscribe(data => {
        if (data.success) {
          const recipes = data.cookbook.recipes.slice(0);
          const index = recipes.findIndex(x => x === recipe._id);
          if (index !== -1) {
            console.log("Duplicate");
            return;
          }
          recipes.push(recipe._id);
          this.cookbookService.updateCookbookRecipes(data.cookbook._id, recipes).subscribe(data => {
            if (!data.success) {
              console.log("Could not add to cookbook");
            }
          });
        }
      });
    }
    this.openWindow.showOptions = false;
    this.openWindow = undefined;
  }

  copyMessage(recipe) {
    const val = "http://localhost:4200/recipe/" + recipe._id;
    const selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);

    this.openWindow.showOptions = false;
    this.openWindow = undefined;
  }

  windowClick(e) {
    if (this.openWindow !== undefined) {
      this.openWindow.showOptions = false;
      this.openWindow = undefined;
    }
  }
}
