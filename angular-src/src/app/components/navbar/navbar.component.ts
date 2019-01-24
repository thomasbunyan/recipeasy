import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { SidenavService } from "../sidenav/sidenav.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  user: String;
  searchQuery: String;
  sidenavOpen: Boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private sidenav: SidenavService
  ) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user")).username;
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(["/"]);
    return false;
  }

  sideToggle() {
    this.sidenav.toggle();
    if (this.sidenav.status()) {
      console.log("Opened");
      this.sidenavOpen = true;
    } else {
      console.log("Closed");
      this.sidenavOpen = false;
    }
  }

  enterSearch() {
    if (this.searchQuery === undefined || this.searchQuery === "") {
    } else {
      this.router.navigate(["/results"], {
        queryParams: { search_query: this.searchQuery }
      });
    }
  }
}
