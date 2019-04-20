import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { tokenNotExpired } from "angular2-jwt";

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) {}

  // Register the user.
  registerUser(user) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post("/users/", user, { headers: headers }).map((res) => res.json());
  }

  // Verify the user to activate the account
  verifyUser(token) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.patch("/users/verify/", { token }, { headers: headers }).map((res) => res.json());
  }

  // Resend the email verification.
  resendVerification(email) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.patch("/users/verify/resend", { email }, { headers: headers }).map((res) => res.json());
  }

  // Authenticate the login for the user.
  authenticateUser(user) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("/users/authenticate", user, {
        headers: headers
      })
      .map((res) => res.json());
  }

  // Get profile.
  getProfile() {
    const user = JSON.parse(localStorage.getItem("user")).id;
    const headers = new Headers();
    this.loadToken();
    headers.append("Authorization", this.authToken);
    headers.append("Content-Type", "application/json");
    return this.http
      .get("/users/" + user + "/profile", {
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
    localStorage.setItem("id_token", "bearer " + token);
    localStorage.setItem("user", JSON.stringify(storeUser));
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
  }
}
