import { Component, OnInit, ViewChild } from "@angular/core";
import { SidenavService } from "./sidenav.service";
import { MatSidenav } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"]
})
export class SidenavComponent implements OnInit {
  big = false;

  constructor(private sidenav: SidenavService, private router: Router, private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit() {
    this.sidenav.change.subscribe((isOpen) => {
      this.big = !this.big;
    });
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  isActive(page) {
    console.log(this.route.url);
    return false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
