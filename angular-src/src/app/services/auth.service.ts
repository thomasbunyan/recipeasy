import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { tokenNotExpired } from "angular2-jwt";
import { CookieService } from "ngx-cookie-service";
import { GeneralService } from "./general.service";

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http, private cookies: CookieService, private generalService: GeneralService) {}

  // Register the user.
  registerUser(user) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post("http://localhost:3000/users/", user, { headers: headers }).map((res) => res.json());
  }

  // Verify the user to activate the account
  verifyUser(token) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.patch("http://localhost:3000/users/verify/", { token }, { headers: headers }).map((res) => res.json());
  }

  // Resend the email verification.
  resendVerification(email) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.patch("http://localhost:3000/users/verify/resend", { email }, { headers: headers }).map((res) => res.json());
  }

  // Authenticate the login for the user.
  authenticateUser(user) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/users/authenticate", user, {
        headers: headers
      })
      .map((res) => res.json());
  }

  // Get profile.
  getProfile() {
    const user = this.generalService.getUser().id;
    const headers = new Headers();
    this.loadToken();
    headers.append("Authorization", this.authToken);
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/users/" + user + "/profile", {
        headers: headers,
        params: {
          item: "profile"
        }
      })
      .map((res) => res.json());
  }

  // Cache the user login.
  storeUserData(token, user) {
    const storeUser = {
      id: user.id,
      username: user.username
    };
    this.cookies.set("user", JSON.stringify(storeUser));

    localStorage.setItem("id_token", "bearer " + token);
    // localStorage.setItem("user", JSON.stringify(storeUser));
    this.authToken = token;
    this.user = user;
  }

  // Load token.
  loadToken() {
    const token = localStorage.getItem("id_token");
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired("id_token");
  }

  // Logout
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    sessionStorage.clear();
    this.cookies.deleteAll();
  }
}
