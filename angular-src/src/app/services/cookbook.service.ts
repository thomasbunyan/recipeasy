import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable()
export class CookbookService {
  constructor(private http: Http) { }

  addCookbook(initialRecipe, author) {
    const newCookbook = {
      name: "Give your cookbook a name",
      description: "Add a description",
      recipes: [initialRecipe],
      author: author,
      date: new Date().getTime(),
      private: true,
      views: 0,
      followers: 0,
      tags: []
    };

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/cookbooks/add", newCookbook, {
        headers: headers
      })
      .map(res => res.json());
  }

  getCookbooks() {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/cookbooks/all", {
        headers: headers
      })
      .map(res => res.json());
  }

  getCookBookById(cookbookId, updateViews) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/cookbooks/cookbook/" + cookbookId, {
        headers: headers,
        params: {
          update: updateViews
        }
      })
      .map(res => res.json());
  }

  getCookbooksFromSelection(selection) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/cookbooks/selection", {
        headers: headers,
        params: {
          selection: selection
        }
      })
      .map(res => res.json());
  }

  updateCookbook(id, update) {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .put("http://localhost:3000/cookbooks/cookbook/" + id + "/update", update, {
        headers: headers
      })
      .map(res => res.json());
  }

  updateCookbookRecipes(id, newRecipes) {
    const update = { recipes: newRecipes };
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .put("http://localhost:3000/cookbooks/cookbook/" + id + "/update", update, {
        headers: headers
      })
      .map(res => res.json());
  }
}
