import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../../services/recipe.service";
import { GeneralService } from "../../services/general.service";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-recommended",
  templateUrl: "./recommended.component.html",
  styleUrls: ["./recommended.component.css"]
})
export class RecommendedComponent implements OnInit {
  recipeData: any;
  loading = true;

  constructor(private recipeService: RecipeService, private titleService: Title, private router: Router, private generalService: GeneralService) {}

  ngOnInit() {
    this.titleService.setTitle("Recommended");
    this.recipeService.getRecommended().subscribe((data) => {
      if (data.success) {
        this.recipeData = data.recipes;
        this.loading = false;
      }
    });
  }

  viewItem(item) {
    this.router.navigate(["/recipe", item._id]);
  }
}
