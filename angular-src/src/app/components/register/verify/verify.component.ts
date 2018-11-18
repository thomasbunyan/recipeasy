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
      this.hash = params["token"];
      if (this.hash == undefined) {
        this.router.navigate(["/"]);
      } else {
        this.userService.validateHash(this.hash).subscribe(data => {
          if (data.success) {
            this.msg = data.msg;
            if (!data.found) {
              // Hash was invalid.
              console.log("Invalid link");
              this.router.navigate(["/"]);
            } else if (!data.valid) {
              // Hash has expired.
              this.expired = true;
              console.log("Link expired");
            } else {
              // Account is now active.
              // Redirect to login.
              this.splashScreen();
              console.log("Account activated");
            }
          } else {
            console.log("Failed to verify");
          }
        });
      }
    });
  }

  splashScreen() {
    this.splash = true;
    const interval = setInterval(() => {
      this.router.navigate(["/login"]);
    }, 6000);
  }
}
