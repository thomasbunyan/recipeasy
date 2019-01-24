import { Component, OnInit, HostListener } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";
import { RecipeService } from "../../services/recipe.service";
import { CookbookService } from "../../services/cookbook.service";
import { SidenavService } from "../sidenav/sidenav.service";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  userId: any;

  searchQuery: String;

  recipes = [];
  cookbooks = [];
  cookbookPos = "left";

  userCookbooks: any;
  toggle = false;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private titleService: Title,
    private router: Router,
    private recipeService: RecipeService,
    private cookbookService: CookbookService,
    private sidenavService: SidenavService
  ) {}

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.router.navigate(["/dashboard"]);
    }
    this.titleService.setTitle("Recipeasy");
    this.sidenavService.close();
    if (this.authService.loggedIn()) {
      this.userId = JSON.parse(localStorage.getItem("user")).id;
      this.recipeService.getRecipes().subscribe(data => {
        this.recipes = data.recipes.slice(0, 10);
      });
      this.cookbookService.getCookbooks().subscribe(data => {
        if (data.success) {
          this.cookbooks = data.cookbooks.slice(0, 10);
          this.userService.getUserData().subscribe(data => {
            if (data.success) {
              this.userCookbooks = data.cookbooks;
              this.cookbooks.forEach(x => {
                const indexSave = this.userCookbooks.saved.findIndex(
                  y => y.cookbook._id === x._id
                );
                if (indexSave !== -1) {
                  x.saved = true;
                }
              });
            }
          });
        }
      });
    }
  }

  enterSearch() {
    if (this.searchQuery === undefined || this.searchQuery === "") {
    } else {
      this.router.navigate(["/recipes"], {
        queryParams: { search_query: this.searchQuery }
      });
    }
  }

  scrollCookbooks(dir, ref) {
    if (dir === "left") {
      ref.scrollTo({
        left: ref.scrollLeft - ref.offsetWidth * 0.75,
        behavior: "smooth"
      });
      if (ref.scrollLeft - ref.offsetWidth * 0.75 <= 0) {
        this.cookbookPos = "left";
      } else {
        this.cookbookPos = "none";
      }
    } else {
      ref.scrollTo({
        left: ref.scrollLeft + ref.offsetWidth * 0.75,
        behavior: "smooth"
      });
      if (ref.scrollLeft + ref.offsetWidth * 0.75 >= ref.offsetWidth) {
        this.cookbookPos = "right";
      } else {
        this.cookbookPos = "none";
      }
    }
  }

  viewRecipe(recipe) {
    this.router.navigate(["/recipe", recipe._id]);
  }
  viewCookbook(cookbook) {
    this.router.navigate(["/cookbook", cookbook._id]);
  }
  saveCookbook(cookbook) {
    this.userService
      .addUserData(
        { id: this.userId, data: this.userCookbooks },
        { data: "cookbooks", type: "save" },
        cookbook._id
      )
      .subscribe(data => {
        if (!data.success) {
          console.log("Couldn't add cookbook");
        } else {
          this.userCookbooks = data.cookbooks;
          cookbook.saved = !cookbook.saved;
        }
      });
  }
}
