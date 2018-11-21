import { Component, OnInit, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { CookbookService } from "../../../services/cookbook.service";
import { RecipeService } from "../../../services/recipe.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { EditCookbookDialogComponent } from "../cookbook/edit-cookbook-dialog/edit-cookbook-dialog.component";

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

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private cookbookService: CookbookService,
    private recipeService: RecipeService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem("user")).id;
    this.cookbookId = this.route.snapshot.paramMap.get("id");
    this.cookbookService.getCookBookById(this.cookbookId).subscribe(data => {
      if (!data.success) {
        this.router.navigate([""]);
      } else {
        this.cookbook = data.cookbook;
        this.titleService.setTitle(this.cookbook.title);
        if (
          JSON.parse(localStorage.getItem("user")).username ===
          this.cookbook.author
        ) {
          console.log("Author");
          this.owner = true;
        } else {
          console.log("Not author");
          this.owner = false;
        }
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
        public: this.cookbook.public
      }
    });
    editDialog.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (result.length < 1) {
          return console.log("No update required");
        }
        this.cookbookService
          .updateCookbook(this.cookbookId, { type: "info", data: result })
          .subscribe(data => {
            if (!data.success) {
              console.log("Could not update cookbook");
            } else {
              this.cookbook = data.cookbook;
            }
          });
      }
    });
  }

  removeRecipe(index) {
    const newRecipes = this.cookbook.recipes.slice(0);
    newRecipes.splice(index, 1);

    // this.cookbookService.updateCookbookRecipes(this.cookbookId, newRecipes).subscribe(data => {
    //   if (data.success) {
    //     this.cookbookRecipes.splice(index, 1);
    //   }
    // });
  }
}
