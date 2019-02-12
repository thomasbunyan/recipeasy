import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService, private title: Title, private router: Router) {}

  ngOnInit() {
    this.title.setTitle("Profile");
    this.authService.getProfile().subscribe((data) => {
      if (data.success) {
        this.user = data;
        console.log(data);
      } else {
        console.log(data);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
