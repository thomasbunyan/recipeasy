import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-verify",
  templateUrl: "./verify.component.html",
  styleUrls: ["./verify.component.css"]
})
export class VerifyComponent implements OnInit {
  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) {}

  splash = true;
  title = "Verifying account";
  message = "";
  err: boolean;
  resend = false;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const token = params.token;
      if (this.verifyToken(token)) {
        this.authService.verifyUser(token).subscribe((data) => {
          console.log(data);
          if (data.success) {
            this.err = false;
            this.title = "Account verified!";
            this.message = "You will now be redirected to the next page where you can login.";
            const interval = setInterval(() => {
              this.router.navigate(["/login"]);
            }, 5000);
          } else {
            this.err = true;
            this.title = "Couldn't verify account";
            this.message = "Looks like that token has expired. Click here to receive a new link to activate your account.";
          }
        });
      } else {
        this.router.navigate(["/"]);
      }
    });
  }

  verifyToken(token) {
    if (!token) {
      return false;
    }
    return true;
  }

  resendEmail() {
    if (this.err !== true) {
      return;
    }
    console.log("Resend");
    this.resend = true;
  }
}
