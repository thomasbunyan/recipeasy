import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  email: String;
  recovery: String;

  forgot = false;
  error: boolean;
  errorMessage: String;

  returnUrl: String = "/";

  constructor(
    private authService: AuthService,
    private router: Router,
    private titleService: Title,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.authService.loggedIn()) {
      return this.router.navigate(["/"]);
    }
    this.titleService.setTitle("Login");
    this.returnUrl =
      this.route.snapshot.queryParams["returnUrl"] || "/dashboard";
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    console.log("here");
    this.authService.authenticateUser(user).subscribe(data => {
      console.log(data);
      if (data.success) {
        this.authService.storeUserData(data.jwt, data.user);
        this.error = false;
        this.router.navigate([this.returnUrl]);
      } else {
        if (data.inactive) {
          this.error = true;
          this.errorMessage =
            "The account has not yet been authenticated. Please check your email to activate your account.";
        } else {
          this.error = true;
          this.errorMessage = data.msg;
        }
      }
    });
  }

  onRecoverSubmit() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const removeIllegal = this.recovery;
    if (re.test(String(this.recovery).toLowerCase())) {
      // Recover using the email.
    } else if (removeIllegal.replace(/\W/g, "") === this.recovery) {
      // Recover using the username.
    } else {
      // Don't recover.
    }
  }

  forgotPw() {
    this.username = "";
    this.password = "";
    this.error = false;
    this.forgot = !this.forgot;
  }
}
