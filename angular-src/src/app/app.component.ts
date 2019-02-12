import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { SidenavService } from "./components/sidenav/sidenav.service";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { MatSidenav } from "@angular/material";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  big = false;

  constructor(private sidenavService: SidenavService, private authService: AuthService) {}

  // ? Must be after view for the view child to find the element.
  ngAfterViewInit() {
    this.sidenavService.change.subscribe((isOpen) => {
      this.big = !this.big;
    });
  }
}
