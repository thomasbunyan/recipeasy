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
  recipes: any[];
  recipesEmpty: boolean;
  userId: any;
  usersRecipes: any;
  user: any;

  constructor(
    private recipeService: RecipeService,
    private userService: UserService,
    private router: Router,
    private title: Title
  ) {}

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem("user")).id;
    this.title.setTitle("Saved recipes");
  }

  viewRecipe(id) {
    this.router.navigate(["recipe", id]);
  }

  removeRecipe(id, index) {
    console.log("remove recipes");
  }
}
