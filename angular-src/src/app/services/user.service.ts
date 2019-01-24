import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  // // Check if username is unique.
  // checkUsername(username) {
  //   const headers = new Headers();
  //   headers.append("Content-Type", "application/json");
  //   return this.http
  //     .get("http://localhost:3000/users/unique/username", {
  //       headers: headers,
  //       params: { value: username }
  //     })
  //     .map(res => res.json());
  // }

  // // Check if email is unique.
  // checkEmail(email) {
  //   const headers = new Headers();
  //   headers.append("Content-Type", "application/json");
  //   return this.http
  //     .get("http://localhost:3000/users/unique/email", {
  //       headers: headers,
  //       params: { value: email }
  //     })
  //     .map(res => res.json());
  // }

  // Check if username or email is unique.
  checkUnique(query) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/users/unique/" + query, {
        headers: headers
      })
      .map(res => res.json());
  }

  // Returns the users data.
  getUserData() {
    const user = JSON.parse(localStorage.getItem("user")).id;
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/users/" + user, {
        headers: headers
      })
      .map(res => res.json());
  }

  // Updates the data for the user.
  // ? user = {id, data(field being updated)}
  // ? update = {data(recipes/cookbooks), type(saved,...), ?vote}
  // ? dataID = 252dfs
  addUserData(user, update, dataID) {
    const userData = Object.assign({}, user.data);
    const data = [];
    if (update.data === "recipes") {
      if (update.type === "save") {
        const index = userData.saved.findIndex(
          x => x.recipe === dataID || x.recipe._id === dataID
        );
        if (index === -1) {
          userData.saved.push({
            recipe: dataID,
            timestamp: new Date().getTime()
          });
        } else {
          userData.saved.splice(index, 1);
        }
      } else if (update.type === "vote") {
        console.log("User data", userData);
        const index = userData.voted.findIndex(
          x => x.recipe === dataID || x.recipe._id === dataID
        );
        if (index === -1) {
          userData.voted.push({
            recipe: dataID,
            vote: update.vote,
            timestamp: new Date().getTime()
          });
        } else if (update.vote === "none") {
          userData.voted.splice(index, 1);
        } else {
          userData.voted[index].vote = update.vote;
          userData.voted[index].timestamp = new Date().getTime();
        }
      } else if (update.type === "author") {
        userData.author.push({
          recipe: dataID,
          timestamp: new Date().getTime()
        });
      }
      data.push({ name: "recipes", value: userData });
    } else if (update.data === "cookbooks") {
      if (update.type === "save") {
        const index = userData.saved.findIndex(
          x => x.cookbook === dataID || x.cookbook._id === dataID
        );
        if (index === -1) {
          userData.saved.push({
            cookbook: dataID,
            timestamp: new Date().getTime()
          });
        } else {
          userData.saved.splice(index, 1);
        }
      } else if (update.type === "author") {
        userData.author.push({
          cookbook: dataID,
          timestamp: new Date().getTime()
        });
      }
      data.push({ name: "cookbooks", value: userData });
    }

    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .patch("http://localhost:3000/users/" + user.id, data, {
        headers: headers
      })
      .map(res => res.json());
  }
}
