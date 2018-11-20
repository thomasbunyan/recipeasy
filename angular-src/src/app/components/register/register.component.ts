import { Component, OnInit } from "@angular/core";
import { UserValidateService } from "../../services/user-validate.service";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  username: String;
  email: String;
  emailConf: String;
  password: String;
  specificError = [, , , , ];
  specificMessage = [, , , , ];

  constructor(
    private validateService: UserValidateService,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}

  onRegisterSubmit() {
    const user = {
      email: this.email,
      emailConf: this.emailConf,
      username: this.username,
      password: this.password
    };

    this.validateService.validateUsername(user.username).then(nameRes => {
      this.validateService.validateEmail(user.email).then(emailRes => {
        // Validate username.
        if (!nameRes.res) {
          this.specificError[0] = true;
          this.specificMessage[0] = nameRes.error;
        }

        // Validate email.
        if (!emailRes.res) {
          this.specificError[1] = true;
          this.specificMessage[1] = emailRes.error;
        }

        // Validate email conf.
        if (user.emailConf === undefined || user.emailConf === "") {
          this.specificError[2] = true;
          this.specificMessage[2] = "Email confirmation required";
        }

        // Validate password.
        const passwordRes = this.validateService.validatePassword(
          user.password
        );
        if (!passwordRes.res) {
          this.specificError[3] = true;
          this.specificMessage[3] = passwordRes.error;
        }

        // Register new user.
        for (let i = 0; i < this.specificError.length; i++) {
          if (this.specificError[i]) {
            return false;
          }
        }
        this.authService.registerUser(user).subscribe(data => {
          if (data.success) {
            this.router.navigate(["/login"]);
          } else {
            console.log("Registration failed");
            this.router.navigate(["/register"]);
          }
        });
      });
    });
  }

  checkField(type) {
    if (type === "username" && this.username !== undefined) {
      this.validateService.validateUsername(this.username).then(nameRes => {
        if (!nameRes.res) {
          this.specificError[0] = true;
          this.specificMessage[0] = nameRes.error;
        } else {
          this.specificError[0] = false;
          this.specificMessage[0] = undefined;
        }
      });
    } else if (type === "email" && this.email !== undefined) {
      this.validateService.validateEmail(this.email).then(emailRes => {
        if (!emailRes.res) {
          this.specificError[1] = true;
          this.specificMessage[1] = emailRes.error;
        } else {
          this.specificError[1] = false;
          this.specificMessage[1] = undefined;
        }
      });
    } else if (type === "emailConf" && this.emailConf !== undefined) {
      const emailConfRes = this.validateService.validateEmailConf(
        this.email,
        this.emailConf
      );
      if (!emailConfRes.res) {
        this.specificError[2] = true;
        this.specificMessage[2] = emailConfRes.error;
      } else {
        this.specificError[2] = false;
        this.specificMessage[2] = undefined;
      }
    } else if (type === "password" && this.password !== undefined) {
      const passwordRes = this.validateService.validatePassword(this.password);
      if (!passwordRes.res) {
        this.specificError[3] = true;
        this.specificMessage[3] = passwordRes.error;
      } else {
        this.specificError[3] = false;
        this.specificMessage[3] = undefined;
      }
    } else {
      // User clicked in and out, without typing anything.
    }
  }
}
