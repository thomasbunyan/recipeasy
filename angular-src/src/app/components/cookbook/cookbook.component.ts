import { Component, OnInit, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { CookbookService } from "../../services/cookbook.service";
import { RecipeService } from "../../services/recipe.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { EditCookbookDialogComponent } from "../cookbook/edit-cookbook-dialog/edit-cookbook-dialog.component";
import { RecipeDialogService } from "../recipe-dialog/recipe-dialog.service";
import { UserService } from "../../services/user.service";
import { GeneralService } from "../../services/general.service";

@Component({
  selector: "app-cookbook",
  templateUrl: "./cookbook.component.html",
  styleUrls: ["./cookbook.component.css"]
})
export class CookbookComponent implements OnInit {
  cookbookId: String;
  cookbook: any = "";
  cookbookRecipes: any = "";
  userId: any;
  owner: boolean;
  saved: boolean;
  saveLock = false;
  usersData: any;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private cookbookService: CookbookService,
    private recipeService: RecipeService,
    private router: Router,
    private dialog: MatDialog,
    private userService: UserService,
    private generalService: GeneralService,
    private recipeDialog: RecipeDialogService
  ) {}

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem("user")).id;
    this.cookbookId = this.route.snapshot.paramMap.get("id");
    this.userService.addToHistory(this.cookbookId, "cookbooks");
    this.cookbookService.getCookBookById(this.cookbookId).subscribe((data) => {
      if (!data.success) {
        this.router.navigate([""]);
      } else {
        this.cookbook = data.cookbook;
        this.titleService.setTitle(this.cookbook.title);
        if (JSON.parse(localStorage.getItem("user")).username === this.cookbook.author) {
          this.owner = true;
        } else {
          this.owner = false;
        }
        this.userService.getUserData().subscribe((data) => {
          this.usersData = data;
          this.usersData.cookbooks.saved.map((e) => {
            if (e.cookbook._id === this.cookbookId) {
              this.saved = true;
            }
          });
          const savedRecipes = this.usersData.recipes.saved.map((e) => {
            return e.recipe._id;
          });
          this.cookbook.recipes.forEach((recipe) => {
            if (savedRecipes.indexOf(recipe.recipe._id) > -1) {
              recipe.recipe.saved = true;
            }
          });
        });
      }
    });
  }

  editCookbook() {
    if (!this.owner) {
      return;
    }
    const editDialog = this.dialog.open(EditCookbookDialogComponent, {
      data: {
        title: this.cookbook.title,
        description: this.cookbook.description,
        public: this.cookbook.public,
        image: this.cookbook.image
      }
    });
    editDialog.afterClosed().subscribe((result) => {
      console.log(result);
      if (result !== undefined) {
        if (result.length < 1) {
          return console.log("No update required");
        }
        this.cookbookService.updateCookbook(this.cookbookId, { type: "info", data: result }).subscribe((data) => {
          if (!data.success) {
            console.log("Could not update cookbook");
          } else {
            this.cookbook.title = data.cookbook.title;
            this.cookbook.description = data.cookbook.description;
            this.cookbook.public = data.cookbook.public;
            this.cookbook.image = data.cookbook.image;
          }
        });
      }
    });
  }

  viewRecipe(cookbook) {
    this.router.navigate(["/recipe/" + cookbook.recipe._id]);
  }

  toggleCookbookSave() {
    if (!this.saveLock) {
      this.saveLock = true;
      const userData = { id: this.userId, data: this.usersData.cookbooks };
      this.userService.addUserData(userData, { data: "cookbooks", type: "save" }, this.cookbook._id).subscribe((data) => {
        if (!data.success) {
          console.log("Failed to toggle save");
        } else {
          this.saved = !this.saved;
        }
        this.saveLock = false;
      });
    }
  }

  toggleSave(recipe) {
    if (!this.saveLock) {
      this.saveLock = true;
      const userData = { id: this.userId, data: this.usersData.recipes };
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

  openMenu(recipe) {
    this.recipeDialog.open(recipe.recipe).subscribe((data) => {});
  }
}
