import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-verify",
  templateUrl: "./verify.component.html",
  styleUrls: ["./verify.component.css"]
})
export class VerifyComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  msg: String;
  hash: String;
  splash = false;
  expired = false;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
    });
  }

  splashScreen() {
    this.splash = true;
    const interval = setInterval(() => {
      this.router.navigate(["/login"]);
    }, 6000);
  }
}
