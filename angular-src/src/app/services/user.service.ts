import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  // Check if username is unique.
  checkUsername(username) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/users/unique/username", {
        headers: headers,
        params: { value: username }
      })
      .map(res => res.json());
  }

  // Check if email is unique.
  checkEmail(email) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/users/unique/email", {
        headers: headers,
        params: { value: email }
      })
      .map(res => res.json());
  }

  // Check for hash, then activate account.
  validateHash(hash) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/active/validateHash", {
        headers: headers,
        params: {
          hash: hash
        }
      })
      .map(res => res.json());
  }

  // Returns the users recipes.
  getUserRecipes() {
    const user = JSON.parse(localStorage.getItem("user")).id;
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/users/user/" + user, {
        headers: headers,
        params: {
          item: "recipes"
        }
      })
      .map(res => res.json());
  }

  getUserCookbooks() {
    const user = JSON.parse(localStorage.getItem("user")).id;
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/users/user/" + user, {
        headers: headers,
        params: {
          item: "cookbooks"
        }
      })
      .map(res => res.json());
  }

  // Returns the users preferences.
  getUserPreferences() {
    const user = JSON.parse(localStorage.getItem("user")).id;
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/users/user/" + user, {
        headers: headers,
        params: {
          item: "preferences"
        }
      })
      .map(res => res.json());
  }

  // Add data to the users recipe interaction.
  // addRecipeData2(user, recipeId, update, type) {
  //   console.log(user, recipeId, update, type);

  //   const userRecipes = user.recipes;
  //   const index = user.recipes.findIndex(x => x.id === recipeId);
  //   if (index === -1) {
  //     userRecipes.push(this.updateRecipeData(true, recipeId, update, type));
  //   } else {
  //     const recUpdate = this.updateRecipeData(
  //       false,
  //       userRecipes[index],
  //       update,
  //       type
  //     );
  //     if (recUpdate.id === -1) {
  //       userRecipes.splice(index, 1);
  //     } else {
  //       userRecipes[index] = recUpdate;
  //     }
  //   }
  //   const data = { update: userRecipes };
  //   const headers = new Headers();

  //   headers.append("Authorization", localStorage.getItem("id_token"));
  //   headers.append("Content-Type", "application/json");
  //   return this.http
  //     .put("http://localhost:3000/users/user/" + user.id + "/update", data, {
  //       headers: headers,
  //       params: {
  //         item: "recipes"
  //       }
  //     })
  //     .map(res => res.json());
  // }

  addRecipeData(user, update, recipeID) {
    const userRecipes = Object.assign({}, user.recipes);
    if (update.type === "save") {
      const index = userRecipes.saved.findIndex(x => x.recipe === recipeID);
      if (index === -1) {
        userRecipes.saved.push({ recipe: recipeID, time: new Date() });
      } else {
        userRecipes.saved.splice(index, 1);
      }
    } else if (update.type === "vote") {
      const index = userRecipes.voted.findIndex(x => x.recipe === recipeID);
      if (index === -1) {
        userRecipes.voted.push({ recipe: recipeID, vote: update.vote, time: new Date() });
      } else if (update.vote === "none") {
        userRecipes.voted.splice(index, 1);
      } else {
        userRecipes.voted[index].vote = update.vote;
        userRecipes.voted[index].time = new Date();
      }
    } else if (update.type === "author") {
      userRecipes.author.push({ recipe: recipeID, time: new Date() });
    }

    const data = { update: userRecipes };
    const headers = new Headers();

    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .put("http://localhost:3000/users/user/" + user.id + "/update", data, {
        headers: headers,
        params: {
          item: "recipes"
        }
      })
      .map(res => res.json());
  }

  addCookbookData(user, update, cookbookID) {
    const userCookbooks = Object.assign({}, user.cookbooks);
    if (update.type === "save") {
      const index = userCookbooks.saved.findIndex(x => x.cookbook === cookbookID);
      if (index === -1) {
        userCookbooks.saved.push({ cookbook: cookbookID, time: new Date() });
      } else {
        userCookbooks.saved.splice(index, 1);
      }
    } else if (update.type === "author") {
      userCookbooks.author.push({ cookbook: cookbookID, time: new Date() });
    }

    const data = { update: userCookbooks };
    const headers = new Headers();

    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .put("http://localhost:3000/users/user/" + user.id + "/update", data, {
        headers: headers,
        params: {
          item: "cookbooks"
        }
      })
      .map(res => res.json());
  }

  // private updateRecipeData(newEntry, recipe, update, type) {
  //   let rec = { id: recipe, vote: "none", saved: false, owner: false };
  //   if (newEntry) {
  //     rec.id = recipe;
  //   } else {
  //     rec = recipe;
  //   }
  //   if (type === "vote") {
  //     rec.vote = update;
  //   } else if (type === "save") {
  //     rec.saved = !rec.saved;
  //   } else if (type === "owner") {
  //     rec.owner = true;
  //   }
  //   if (rec.vote === "none" && !rec.saved && !rec.owner) {
  //     rec.id = -1;
  //   }
  //   return rec;
  // }

  // addCookbookData(user, cookbookId, type) {
  //   const userCookbooks = user.cookbooks;
  //   let cookbookName = "newCookbook";
  //   const index = user.cookbooks.findIndex(x => x.id === cookbookId);

  //   if (index === -1) {
  //     let nameIndex = 0;
  //     let adder = 1;
  //     while (nameIndex !== -1) {
  //       nameIndex = user.cookbooks.findIndex(x => x.name === cookbookName);
  //       if (nameIndex === -1) {
  //         break;
  //       } else {
  //         cookbookName = "newCookbook" + adder;
  //         adder += 1;
  //       }
  //     }

  //     userCookbooks.push(
  //       this.updateCookbookData(true, cookbookId, cookbookName, type)
  //     );
  //   } else {
  //     const bookUpdate = this.updateCookbookData(
  //       false,
  //       userCookbooks[index],
  //       cookbookName,
  //       type
  //     );
  //     if (bookUpdate.id === -1) {
  //       userCookbooks.splice(index, 1);
  //     } else {
  //       userCookbooks[index] = bookUpdate;
  //     }
  //   }
  //   const data = { update: userCookbooks };
  //   const headers = new Headers();

  //   headers.append("Authorization", localStorage.getItem("id_token"));
  //   headers.append("Content-Type", "application/json");
  //   return this.http
  //     .put("http://localhost:3000/users/user/" + user.id + "/update", data, {
  //       headers: headers,
  //       params: {
  //         item: "cookbooks"
  //       }
  //     })
  //     .map(res => res.json());
  // }

  // private updateCookbookData(newEntry, cookbookId, cookbookName, type) {
  //   let book = {
  //     id: cookbookId,
  //     name: cookbookName,
  //     saved: false,
  //     owner: false
  //   };
  //   if (newEntry) {
  //     book.id = cookbookId;
  //   } else {
  //     book = cookbookId;
  //   }
  //   if (type === "save") {
  //     book.saved = !book.saved;
  //   } else if (type === "owner") {
  //     book.owner = true;
  //   }
  //   if (!book.saved && !book.owner) {
  //     book.id = -1;
  //   }
  //   return book;
  // }
}
