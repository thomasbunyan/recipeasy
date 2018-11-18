import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "../../../services/recipe.service";
import { RecipeValidateService } from "../../../services/recipe-validate.service";
import { UserService } from "../../../services/user.service";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.css"]
})
export class RecipeComponent implements OnInit {
  recipeId: String;
  user: any;
  recipe: any = {};
  usersRecipes: any;

  vote = "none";
  saved = false;
  voteLock = false;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private recipeValidateService: RecipeValidateService,
    private userService: UserService,
    private titleService: Title,
    private router: Router
  ) {}

  ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get("id");
    this.user = JSON.parse(localStorage.getItem("user"));
    this.recipeService.getRecipeById(this.recipeId, true).subscribe(data => {
      if (data.success) {
        this.recipe = data.recipe;
        this.titleService.setTitle(this.recipe.name);
      } else {
        console.log("Could not acquire recipe");
        this.router.navigate(["/recipes"]);
      }
    });
    this.userService.getUserRecipes().subscribe(data => {
      if (data.success) {
        this.usersRecipes = data.item;
        this.setUserData();
      }
    });
  }

  setUserData() {
    let found = false;
    let i = 0;
    for (; i < this.usersRecipes.length; i++) {
      if (this.usersRecipes[i].id === this.recipeId) {
        found = true;
        break;
      }
    }
    if (found) {
      this.vote = this.usersRecipes[i].vote;
      this.saved = this.usersRecipes[i].saved;
    }
  }

  castVote(vote) {
    if (!this.voteLock) {
      this.voteLock = true;
      const userData = { id: this.user.id, recipes: this.usersRecipes };
      const newVote = this.recipeValidateService.castVote(
        vote,
        this.vote,
        this.recipe,
        userData,
        () => {
          this.voteLock = false;
        }
      );
      this.recipe.score = newVote.newScore;
      this.vote = newVote.newVote;
    }
  }

  toggleSave() {
    this.saved = !this.saved;
    const userData = { id: this.user.id, recipes: this.usersRecipes };
    this.recipeValidateService.toggleSave(userData, this.recipe._id);
  }
}
