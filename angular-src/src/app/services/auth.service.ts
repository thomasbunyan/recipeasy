import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
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
    return this.http
      .post("http://localhost:3000/users/register", user, { headers: headers })
      .map(res => res.json());
  }

  // Authenticate the login for the user.
  authenticateUser(user) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/users/authenticate", user, {
        headers: headers
      })
      .map(res => res.json());
  }

  // Get profile.
  getProfile() {
    const user = JSON.parse(localStorage.getItem("user")).id;
    const headers = new Headers();
    this.loadToken();
    headers.append("Authorization", this.authToken);
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/users/user/" + user, {
        headers: headers,
        params: {
          item: "profile"
        }
      })
      .map(res => res.json());
  }

  // Cache the user login.
  storeUserData(token, user) {
    const storeUser = {
      id: user.id,
      username: user.username
    };
    localStorage.setItem("id_token", token);
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
  }
}
