import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RecipeService } from "../../services/recipe.service";
import { UserService } from "../../services/user.service";
import { CookbookService } from "../../services/cookbook.service";
import { GeneralService } from "../../services/general.service";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { RecipeDialogService } from "../recipe-dialog/recipe-dialog.service";

@Component({
  selector: "app-saved-recipes",
  templateUrl: "./saved-recipes.component.html",
  styleUrls: ["./saved-recipes.component.css"]
})
export class SavedRecipesComponent implements OnInit {
  userId: any;
  recipes: any;
  usersCookbooks = {};
  contextMenuRecipe: any;
  searchFilter: string;
  searchFilter2: string;
  savedFilter = [];
  authorFilter = [];

  @ViewChild("tableWrapper") tableWrapper: ElementRef<any>;
  savedRecipes = true;
  createdRecipes = false;

  constructor(
    private recipeService: RecipeService,
    private userService: UserService,
    private cookbookService: CookbookService,
    private router: Router,
    private title: Title,
    private recipeDialog: RecipeDialogService,
    private generalService: GeneralService
  ) {}

  ngOnInit() {
    this.userId = this.generalService.getUser().id;
    this.title.setTitle("Saved recipes");

    this.userService.getUserData().subscribe((data) => {
      this.recipes = data.recipes;
      this.savedFilter = this.recipes.saved;
      this.authorFilter = this.recipes.author;
      this.usersCookbooks = data.cookbooks;
    });
  }

  viewRecipe(recipe) {
    this.router.navigate(["recipe", recipe.recipe._id]);
  }

  enterKey(type) {
    if (this.searchFilter === undefined && this.searchFilter2 === undefined) {
      return;
    }
    if (type === "saved") {
      this.savedFilter = [];
      this.recipes.saved.forEach((e) => {
        let recipeTitle = e.recipe.title.toLowerCase();
        recipeTitle = recipeTitle.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
        if (recipeTitle.includes(this.searchFilter.toLowerCase())) {
          this.savedFilter.push(e);
        }
      });
    } else {
      this.authorFilter = [];
      this.recipes.author.forEach((e) => {
        let recipeTitle = e.recipe.title.toLowerCase();
        recipeTitle = recipeTitle.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
        if (recipeTitle.includes(this.searchFilter2.toLowerCase())) {
          this.authorFilter.push(e);
        }
      });
    }
  }

  removeSaved(recipe) {
    this.userService.addUserData({ id: this.userId, data: this.recipes }, { data: "recipes", type: "save" }, recipe.recipe._id).subscribe((data) => {
      this.recipes = data.recipes;
    });
  }
  removeCreated(recipe) {
    const remove = confirm("Are you sure you want to delete this recipe? You won't be able to restore it once removed.");
    if (remove) {
      console.log("Remove");
    }
  }

  viewAuthor(recipe) {
    console.log("Author");
  }

  addToCookbook(recipe, cookbook) {
    // recipe = recipe.recipe;
    // console.log(recipe);
    // if (cookbook === "new") {
    //   this.cookbookService.addCookbook(recipe._id).subscribe((a) => {
    //     const user = { id: this.userId, data: this.usersCookbooks };
    //     const update = { data: "cookbooks", type: "author" };
    //     this.userService.addUserData(user, update, a.cookbook._id).subscribe((data) => {});
    //   });
    // } else {
    //   this.cookbookService.updateCookbook(cookbook, { type: "recipes", recipe: recipe }).subscribe((data) => {
    //     console.log(data);
    //   });
    // }
    // const user = { id: this.userId, data: this.usersCookbooks };
    // const update = { data: "cookbooks", type: "author" };
    // this.userService.addUserData(user, update, "a.cookbook._id").subscribe((data) => {});
  }

  openRecipeOptions(recipe) {
    this.recipeDialog.open(recipe).subscribe((data) => {
      // console.log(data);
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

  scroll() {
    if (this.savedRecipes) {
      // Left
      this.tableWrapper.nativeElement.scrollLeft = 0;
    } else {
      // Right
      this.tableWrapper.nativeElement.scrollLeft = this.tableWrapper.nativeElement.scrollWidth;
    }
  }
}
