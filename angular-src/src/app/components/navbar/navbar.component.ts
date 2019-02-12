import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { SidenavService } from "../sidenav/sidenav.service";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  user: string;
  searchQuery: string;
  sidenavOpen = false;
  lastSearch = "";
  userData: any;
  big = false;

  constructor(private authService: AuthService, private router: Router, private sidenav: SidenavService, private userService: UserService) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user")).username;
    this.userService.getUserData().subscribe((data) => {
      this.userData = data;
    });
    this.sidenav.change.subscribe((change) => {
      this.big = change;
    });
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(["/"]);
    return false;
  }

  enterSearch() {
    if (this.searchQuery === undefined || this.searchQuery === "" || this.searchQuery === this.lastSearch) {
    } else {
      this.router.navigate(["/results"], {
        queryParams: { search_query: this.searchQuery }
      });
      this.lastSearch = this.searchQuery;
      this.userService.updateSearchHistory(this.userData.history, this.searchQuery).subscribe((data) => {
        this.userData = data;
      });
    }
  }
}
