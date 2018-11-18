import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { RecipeService } from "../../services/recipe.service";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  searchQuery: String;

  cookbooks = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  cookbookPos = "left";

  recipes = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];


  constructor(private authService: AuthService,
    private titleService: Title,
    private router: Router,
    private recipeService: RecipeService) { }

  ngOnInit() {
    this.titleService.setTitle("Recipeasy");
    this.recipeService.getRecipe().subscribe(data => {
      this.recipes = data.recipes.slice(0, 10)
    });
  }

  enterSearch() {
    if (this.searchQuery === undefined || this.searchQuery === "") {
    } else {
      // Do the search.
      // console.log(this.searchQuery);
      this.router.navigate(['/recipes'], { queryParams: { search_query: this.searchQuery } });
    }
  }

  scrollCookbooks(dir, ref) {
    if (dir === "left") {
      ref.scrollTo({ left: ref.scrollLeft - (ref.offsetWidth * 0.75), behavior: "smooth" });
      if ((ref.scrollLeft - (ref.offsetWidth * 0.75)) <= 0) {
        this.cookbookPos = "left";
      } else {
        this.cookbookPos = "none";
      }
    } else {
      ref.scrollTo({ left: ref.scrollLeft + (ref.offsetWidth * 0.75), behavior: "smooth" });
      if ((ref.scrollLeft + (ref.offsetWidth * 0.75)) >= ref.offsetWidth) {
        this.cookbookPos = "right";
      } else {
        this.cookbookPos = "none";
      }
    }
  }

  viewRecipe(recipe) {
    const id = "5be354e89712648a88d84126";
    this.router.navigate(['/recipe', id]);
  }
  viewCookbook(cookbook) {
    const id = "5bed5c8a36fda544901eaeff";
    this.router.navigate(['/cookbook', id]);
  }
  saveCookbook(cookbook) {
    console.log("save" + cookbook);
  }
}
