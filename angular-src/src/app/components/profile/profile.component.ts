import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user: any;
  data: any;
  scores: {};

  constructor(private authService: AuthService, private userService: UserService, private title: Title, private router: Router) {}

  ngOnInit() {
    this.title.setTitle("Profile");
    this.authService.getProfile().subscribe((data) => {
      if (data.success) {
        this.user = data;
        this.userService.getUserData().subscribe((data) => {
          this.data = data;
          this.getStats();
        });
      }
    });
  }

  getStats() {
    let cookbookFollowers = 0;
    let recipeViews = 0;
    let recipeScore = 0;
    this.data.cookbooks.author.forEach((e) => {
      cookbookFollowers = cookbookFollowers + e.cookbook.followers;
    });
    this.data.recipes.author.forEach((e) => {
      recipeViews = recipeViews + e.recipe.views;
      recipeScore = recipeScore + e.recipe.score;
    });
    this.scores = { cbF: cookbookFollowers, rV: recipeViews, rS: recipeScore };
    console.log(this.scores);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
