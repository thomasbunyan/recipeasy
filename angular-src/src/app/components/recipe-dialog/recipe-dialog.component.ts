import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { UserService } from "../../services/user.service";
import { CookbookService } from "../../services/cookbook.service";
import { RecipeValidateService } from "../../services/recipe-validate.service";
import { GeneralService } from "../../services/general.service";

@Component({
  selector: "app-recipe-dialog",
  templateUrl: "./recipe-dialog.component.html",
  styleUrls: ["./recipe-dialog.component.css"]
})
export class RecipeDialogComponent implements OnInit {
  recipe: any;
  userData: any;

  scrollAreaOpen = true;
  cookbookAreaOpen = false;
  cookbookNameOpen = false;

  newCookbookName: string;

  constructor(
    private dialog: MatDialogRef<RecipeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private userService: UserService,
    private cookbookService: CookbookService,
    private recipeValService: RecipeValidateService,
    private generalService: GeneralService
  ) {}

  ngOnInit() {
    this.recipe = this.data.recipe;
    this.userService.getUserData().subscribe((data) => {
      this.userData = { recipes: data.recipes, cookbooks: data.cookbooks };
    });
  }

  saveRecipe() {
    this.recipeValService.toggleSave(this.userData, this.recipe).subscribe((data: any) => {
      if (data.success) {
        this.recipe.saved ? (this.recipe.saved = false) : (this.recipe.saved = true);
      }
    });
  }

  addToCookbook(cookbook) {
    const recipe = this.recipe._id;
    this.cookbookService.addRecipeToCookbook(cookbook.cookbook, recipe).subscribe((data) => {
      if (!data.success) {
        console.log("Error adding recipe to cookbook");
      }
    });
    this.dialog.close();
  }

  addNewCookbook() {
    const name = this.newCookbookName;
    const recipe = this.recipe._id;
    this.cookbookService.addCookbook(name, recipe).subscribe((data) => {
      if (!data.success) {
        console.log("Failed to create cookbook");
      }
    });
    this.dialog.close();
  }

  viewAuthor() {
    console.log("author");
  }

  getLink() {
    console.log("link");
  }

  report() {
    console.log("report");
  }
}
