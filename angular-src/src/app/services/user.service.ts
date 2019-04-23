import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { EmptyObservable } from "rxjs/observable/EmptyObservable";
import { GeneralService } from "./general.service";

@Injectable()
export class UserService {
  userData: any;
  constructor(private http: Http, private generalService: GeneralService) {}

  // Returns the users data.
  getUserData() {
    const user = this.generalService.getUser().id;
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/users/" + user, {
        headers: headers
      })
      .map((res) => res.json());
  }

  // Check if username or email is unique.
  checkUnique(query) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/users/unique/" + query, {
        headers: headers
      })
      .map((res) => res.json());
  }

  // data = history array, value = update. If passed a String adds it to the search history, otherwise, removes it.
  updateSearchHistory(data, value) {
    const history = data.slice();
    if (isNaN(value)) {
      const index = history.findIndex((e) => {
        if (e === value) {
          return true;
        }
      });
      if (index === -1 && history.length < 31) {
        history.push(value);
      } else if (index === -1) {
        history.pop();
        history.unshift(value);
      } else {
        return new EmptyObservable();
      }
    } else {
      history.splice(value, 1);
    }

    const update = [{ name: "history", value: history }];
    const headers = new Headers();
    const user = this.generalService.getUser().id;
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .patch("http://localhost:3000/users/" + user, update, {
        headers: headers
      })
      .map((res) => res.json());
  }

  addToHistory(id, type) {
    this.getUserData().subscribe((data: any) => {
      if (type === "recipes") {
        data = data.recipes;
      } else {
        data = data.cookbooks;
      }
      const user = this.generalService.getUser().id;
      this.addUserData({ id: user, data: data }, { data: type, type: "history" }, id).subscribe((data) => {
        // console.log(data);
      });
    });
  }

  addToAuthor(id, type) {
    this.getUserData().subscribe((data: any) => {
      if (type === "recipes") {
        data = data.recipes;
      } else {
        data = data.cookbooks;
      }
      const user = this.generalService.getUser().id;
      this.addUserData({ id: user, data: data }, { data: type, type: "author" }, id).subscribe((data) => {
        // console.log(data);
      });
    });
  }

  toggleCookbookSave(cookbook) {
    this.getUserData().subscribe((data) => {
      const cookbooks = data.cookbooks.saved.slice();
      const index = cookbooks.findIndex((e) => {
        return e.cookbook._id === cookbook._id;
      });
      if (index > -1) {
        cookbooks.splice(index, 1);
      } else {
        cookbooks.push(cookbook._id);
      }
      const user = this.generalService.getUser().id;
      this.addUserData({ id: user, data: data.cookbooks }, { data: "cookbooks", type: "save" }, cookbook._id).subscribe((data) => {});
    });
  }

  // Updates the data for the user.
  // ? user = {id, data(field being updated)}
  // ? update = {data(recipes/cookbooks), type(saved,...), ?vote}
  // ? dataID = 252dfs
  addUserData(user, update, dataID) {
    // console.log(user);
    // console.log(update);
    // console.log(dataID);
    const userData = this.reduceData(Object.assign({}, user.data), update.data);
    const data = [];
    if (update.data === "recipes") {
      if (update.type === "save") {
        const index = userData.saved.findIndex((x) => x.recipe === dataID);
        if (index === -1) {
          userData.saved.push({
            recipe: dataID,
            timestamp: new Date().getTime()
          });
        } else {
          userData.saved.splice(index, 1);
        }
      } else if (update.type === "vote") {
        const index = userData.voted.findIndex((x) => x.recipe === dataID);
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
      } else if (update.type === "history") {
        const index = userData.history.findIndex((e) => {
          if (e.recipe === dataID) {
            return true;
          }
        });
        if (index > -1) {
          userData.history[index].timestamp = new Date().getTime();
        } else {
          userData.history.push({
            recipe: dataID,
            timestamp: new Date().getTime()
          });
        }
      }
      data.push({ name: "recipes", value: userData });
    } else if (update.data === "cookbooks") {
      if (update.type === "save") {
        const index = userData.saved.findIndex((x) => x.cookbook === dataID || x.cookbook._id === dataID);
        if (index === -1) {
          userData.saved.push({
            cookbook: dataID,
            timestamp: new Date().getTime()
          });
        } else {
          userData.saved.splice(index, 1);
        }
      } else if (update.type === "author") {
        // userData.author.push({
        //   cookbook: dataID,
        //   timestamp: new Date().getTime()
        // });
        userData.author = [];
      } else if (update.type === "history") {
        const index = userData.history.findIndex((e) => {
          if (e.cookbook._id === dataID) {
            return true;
          }
        });
        if (index > -1) {
          userData.history[index].timestamp = new Date().getTime();
        } else {
          userData.history.push({
            cookbook: dataID,
            timestamp: new Date().getTime()
          });
        }
      }
      data.push({ name: "cookbooks", value: userData });
    }

    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    // Remove populated fields.
    return this.http
      .patch("http://localhost:3000/users/" + user.id, data, {
        headers: headers
      })
      .map((res) => res.json());
  }

  private reduceData(userData, type) {
    if (type === "recipes") {
      userData.saved.forEach((e) => {
        if (e.recipe._id) {
          e.recipe = e.recipe._id;
        }
      });
      userData.history.forEach((e) => {
        if (e.recipe._id) {
          e.recipe = e.recipe._id;
        }
      });
      userData.author.forEach((e) => {
        if (e.recipe._id) {
          e.recipe = e.recipe._id;
        }
      });
      userData.voted.forEach((e) => {
        if (e.recipe._id) {
          e.recipe = e.recipe._id;
        }
      });
    } else if (type === "cookbooks") {
    }
    return userData;
  }

  // ? Private functions
  // getUserData(): Observable<any> {
  //   return new Observable(observer => {
  //     if (this.userData === undefined) {
  //       console.log("Fetching data...");
  //       this.getData().subscribe(data => {
  //         if (data.success) {
  //           this.updateUserData(data);
  //           observer.next(this.userData);
  //           observer.complete();
  //         } else {
  //           console.log("Error obtaining data");
  //           observer.complete();
  //         }
  //       });
  //     } else {
  //       observer.next(this.userData);
  //       observer.complete();
  //     }
  //   });
  // }
  // private updateUserData(data) {
  //   console.log(data);
  //   this.userData = {
  //     cookbooks: data.cookbooks,
  //     recipes: data.recipes,
  //     timestamp: new Date().getTime()
  //   };
  //   console.log(this.userData);
  // }
}
