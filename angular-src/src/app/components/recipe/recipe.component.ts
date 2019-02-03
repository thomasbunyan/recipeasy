import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "../../services/recipe.service";
import { RecipeValidateService } from "../../services/recipe-validate.service";
import { UserService } from "../../services/user.service";
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

  voteLock = false;
  saveLock = false;

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
    this.recipeService.getRecipe(this.recipeId).subscribe(data => {
      if (!data.success) {
        this.router.navigate(["/recipes"]);
      } else {
        this.recipe = data.recipe;
        this.titleService.setTitle(this.recipe.title);
        this.userService.getUserData().subscribe(data => {
          if (data.success) {
            this.usersRecipes = data.recipes;
            this.userService.addToHistory(this.recipeId, "recipes");
            const indexVote = this.usersRecipes.voted.findIndex(
              y => y.recipe._id === this.recipe._id
            );
            const indexSave = this.usersRecipes.saved.findIndex(
              y => y.recipe._id === this.recipe._id
            );
            if (indexVote !== -1) {
              this.recipe.vote = this.usersRecipes.voted[indexVote].vote;
            }
            if (indexSave !== -1) {
              this.recipe.saved = true;
            }
          }
        });
      }
    });
  }

  castVote(vote) {
    if (!this.voteLock) {
      this.voteLock = true;
      const userData = { id: this.user.id, data: this.usersRecipes };
      const newVote = this.recipeValidateService.castVote(
        vote,
        this.recipe.vote,
        this.recipe,
        userData,
        () => {
          this.voteLock = false;
        }
      );
      this.recipe.score = newVote.newScore;
      this.recipe.vote = newVote.newVote;
    }
  }

  toggleSave() {
    if (!this.saveLock) {
      this.saveLock = true;
      const userData = { id: this.user.id, data: this.usersRecipes };
      this.userService
        .addUserData(userData, { data: "recipes", type: "save" }, this.recipeId)
        .subscribe(data => {
          if (!data.success) {
            console.log("Failed to toggle save");
          } else {
            this.recipe.saved = !this.recipe.saved;
          }
          this.saveLock = false;
        });
    }
  }
}
