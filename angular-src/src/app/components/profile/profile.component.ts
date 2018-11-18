import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user: Object;

  constructor(private authService: AuthService, private title: Title) {}

  ngOnInit() {
    this.title.setTitle("Profile");
    this.authService.getProfile().subscribe(data => {
      if (data.success) {
        this.user = data.item;
        console.log(this.user);
      } else {
        console.log(data.msg);
        return false;
      }
    });
  }

  // getV
}
