import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../../../services/recipe.service";
import { UserService } from "../../../services/user.service";
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

  constructor(
    private recipeService: RecipeService,
    private userService: UserService,
    private router: Router,
    private title: Title
  ) {}

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem("user")).id;
    this.title.setTitle("Saved recipes");

    this.userService.getUserData().subscribe(data => {
      this.recipes = data.recipes;
    });
  }

  viewRecipe(recipe) {
    this.router.navigate(["recipe", recipe.recipe._id]);
  }

  removeSaved(recipe) {
    console.log("Remove:", recipe.recipe._id);
    this.userService
      .addUserData(
        { id: this.userId, data: this.recipes },
        { data: "recipes", type: "save" },
        recipe.recipe._id
      )
      .subscribe(data => {
        this.recipes = data.recipes;
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
}
