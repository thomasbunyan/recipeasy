import { Component, OnInit, ViewChild } from "@angular/core";
import { SidenavService } from "./sidenav.service";
import { MatSidenav } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"]
})
export class SidenavComponent implements OnInit {
  big = false;
  history: any;
  recipes: any;
  cookbooks: any;

  constructor(private sidenav: SidenavService, private router: Router, private route: ActivatedRoute, private authService: AuthService, private userService: UserService) {}

  ngOnInit() {
    this.sidenav.change.subscribe((isOpen) => {
      this.big = !this.big;
    });
    this.updateSideData();
  }

  updateSideData() {
    this.userService.getUserData().subscribe((data) => {
      this.history = data.recipes.history.slice(0, 5);
      this.recipes = data.recipes.author.slice(0, 5);
      this.cookbooks = data.cookbooks.author.slice(0, 5);
    });
  }

  toggleSidenav() {
    this.sidenav.toggle();
    this.updateSideData();
  }

  viewRecipe(id) {
    this.router.navigate(["/recipe/" + id]);
  }

  viewCookbook(id) {
    this.router.navigate(["/cookbook/" + id]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
