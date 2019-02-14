import { Injectable, Output, EventEmitter } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { MatDialog } from "@angular/material";
import { RecipeDialogComponent } from "../recipe-dialog/recipe-dialog.component";

@Injectable()
export class RecipeDialogService {
  constructor(private http: Http, private dialog: MatDialog) {}

  open(recipe) {
    const recipeDialog = this.dialog.open(RecipeDialogComponent, {
      data: {
        recipe: recipe
      }
    });
    return recipeDialog.afterClosed();
  }
}
