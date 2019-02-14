import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../../services/recipe.service";
import { UserService } from "../../services/user.service";
import { CookbookService } from "../../services/cookbook.service";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-saved-recipes",
  templateUrl: "./saved-recipes.component.html",
  styleUrls: ["./saved-recipes.component.css"]
})
export class SavedRecipesComponent implements OnInit {
  userId: any;
  recipes = { saved: [] };
  usersCookbooks = {};
  contextMenuRecipe: any;

  constructor(private recipeService: RecipeService, private userService: UserService, private cookbookService: CookbookService, private router: Router, private title: Title) {}

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem("user")).id;
    this.title.setTitle("Saved recipes");

    this.userService.getUserData().subscribe((data) => {
      this.recipes = data.recipes;
      this.usersCookbooks = data.cookbooks;
    });
  }

  viewRecipe(recipe) {
    this.router.navigate(["recipe", recipe.recipe._id]);
  }

  removeSaved(recipe) {
    this.userService.addUserData({ id: this.userId, data: this.recipes }, { data: "recipes", type: "save" }, recipe.recipe._id).subscribe((data) => {
      this.recipes = data.recipes;
    });
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

  openMenu(e, contextMenu, recipe) {
    this.contextMenuRecipe = recipe;
    contextMenu.children[0].children[3].style.visibility = "";
    if (contextMenu.style.visibility === "visible") {
      contextMenu.style.visibility = "hidden";
    } else {
      contextMenu.style.top = e.clientY - 60 + "px";
      contextMenu.style.left = e.clientX + "px";
      contextMenu.style.visibility = "visible";
    }
  }
  windowClick(e, contextMenu) {
    // if (e.path.indexOf(contextMenu) > 1) {
    // } else {
    //   contextMenu.style.visibility = "hidden";
    // }
    contextMenu.style.visibility = "hidden";
    contextMenu.children[0].children[3].style.visibility = "hidden";
    this.contextMenuRecipe = undefined;
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
}
