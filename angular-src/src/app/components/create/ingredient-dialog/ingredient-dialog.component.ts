import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-ingredient-dialog",
  templateUrl: "./ingredient-dialog.component.html",
  styleUrls: ["./ingredient-dialog.component.css"]
})
export class IngredientDialogComponent implements OnInit {
  ingredient: any;

  amount: any;
  unit: any;
  details: any;

  // units = ["mcg", "mg", "g", "kg", "oz", "lb", "mt", "t", "ml", "l", "tsp", "Tbs", "fl-oz", "cup", "pnt", "qt", "gal"];
  units = [
    { unit: "Microgramme", id: "mcg" },
    { unit: "Milligram", id: "mg" },
    { unit: "Gram", id: "g" },
    { unit: "Kilogram", id: "kg" },
    { unit: "Ounce", id: "oz" },
    { unit: "Pound", id: "lb" },
    { unit: "Tonne", id: "mt" },
    { unit: "Ton", id: "t" },
    { unit: "Millilitre ", id: "ml" },
    { unit: "Litre", id: "l" },
    { unit: "Teaspoon", id: "tsp" },
    { unit: "Tablespoon", id: "Tbs" },
    { unit: "Fluid ounce", id: "fl-oz" },
    { unit: "Cup", id: "cup" },
    { unit: "Pint", id: "pnt" },
    { unit: "Quart", id: "qt" },
    { unit: "Gallon", id: "gal" },
    { unit: "Whole", id: "1" }
  ];

  errors: any = [];

  constructor(private dialog: MatDialogRef<IngredientDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit() {
    this.ingredient = this.data.ingredient;
    // if (this.ingredient.servings.house) {
    //   this.units.push(this.ingredient.servings.house.uom.toLowerCase());
    // }
    // console.log(this.ingredient);
  }

  addIngredient() {
    if (this.checkIngredient()) {
      return;
    }
    const ing = {
      amount: this.amount,
      unit: this.unit,
      details: this.details
    };
    this.dialog.close(ing);
  }

  checkIngredient() {
    let errors = false;
    if (this.amount === "" || this.amount === undefined || isNaN(this.amount) || this.amount > 10000) {
      this.errors[0] = { err: true, msg: "Amount not valid." };
      errors = true;
    } else {
      this.errors[0] = undefined;
    }
    const map = this.units.map((x) => {
      return x.id;
    });
    if (this.unit === "" || this.unit === undefined || map.indexOf(this.unit) < 0) {
      this.errors[1] = { err: true, msg: "Unit not valid." };
      errors = true;
    } else {
      this.errors[1] = undefined;
    }
    if (this.details === undefined || this.details === "") {
      this.errors[2] = undefined;
    } else if (this.details.length > 15) {
      this.errors[2] = { err: true, msg: "Notes not valid." };
      errors = true;
    }

    return errors;
  }
}
