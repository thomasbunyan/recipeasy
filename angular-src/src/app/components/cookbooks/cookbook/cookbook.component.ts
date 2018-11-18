import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { CookbookService } from "../../../services/cookbook.service";
import { RecipeService } from "../../../services/recipe.service";
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material';
import { EditCookbookDialogComponent } from '../cookbook/edit-cookbook-dialog/edit-cookbook-dialog.component';


@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css']
})
export class CookbookComponent implements OnInit {
  cookbookId: String;
  cookbook: any = "";
  cookbookRecipes: any = "";
  userId: any;
  author: String;

  constructor(private route: ActivatedRoute,
    private titleService: Title,
    private cookbookService: CookbookService,
    private recipeService: RecipeService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.author = "admin";
    this.userId = JSON.parse(localStorage.getItem("user")).id;
    this.cookbookId = this.route.snapshot.paramMap.get("id");
    this.cookbookService.getCookBookById(this.cookbookId, true).subscribe(data => {
      if (data.success) {
        this.cookbook = data.cookbook;
        this.recipeService.getRecipesBySelection(this.cookbook.recipes).subscribe(data => {
          if (data.success) {
            this.cookbookRecipes = data.recipes;
          }
        });
        this.titleService.setTitle(this.cookbook.name);
      } else {
        this.router.navigate([""]);
      }
    });
  }

  editCookbook() {
    const editDialog = this.dialog.open(EditCookbookDialogComponent, {
      data: {
        name: this.cookbook.name,
        description: this.cookbook.description,
        private: this.cookbook.private,
      }
    });
    editDialog.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.cookbookService.updateCookbook(this.cookbookId, result).subscribe(data => {
          if (data.success) {
            this.cookbook.name = result.name;
            this.cookbook.description = result.description;
            this.cookbook.private = result.private;
          } else {
            console.log("Recipe not found");
          }
        });
      }
    });
  }

  removeRecipe(index) {
    const newRecipes = this.cookbook.recipes.slice(0);
    newRecipes.splice(index, 1);

    this.cookbookService.updateCookbookRecipes(this.cookbookId, newRecipes).subscribe(data => {
      if (data.success) {
        this.cookbookRecipes.splice(index, 1);
      }
    });
  }
}
