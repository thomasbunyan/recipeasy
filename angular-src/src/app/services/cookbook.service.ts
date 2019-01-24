import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable()
export class CookbookService {
  constructor(private http: Http) {}

  addCookbook(initialRecipe) {
    const cookbook = {
      title: "Give your cookbook a name",
      description: "Add a description",
      public: false,
      recipes: [{ recipe: initialRecipe, timestamp: new Date() }],
      date: new Date()
    };

    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/cookbooks", cookbook, {
        headers: headers
      })
      .map(res => res.json());
  }

  getCookbooks() {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/cookbooks/", {
        headers: headers
      })
      .map(res => res.json());
  }

  getCookBookById(cookbookId) {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/cookbooks/" + cookbookId, {
        headers: headers
      })
      .map(res => res.json());
  }

  getCookbooksFromSelection(selection) {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
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

  updateCookbook(cookbook, data) {
    let cookbookID = "";
    const update = [];
    if (data.type === "recipes") {
      cookbookID = cookbook.cookbook._id;
      const cookbookRecipes = cookbook.cookbook.recipes.slice(0);
      const index = cookbookRecipes.findIndex(
        x => x.recipe === data.recipe._id || x.recipe._id === data.recipe._id
      );
      if (index === -1) {
        cookbookRecipes.push({
          recipe: data.recipe._id,
          timestamp: new Date()
        });
      }
      update.push({ name: "recipes", value: cookbookRecipes });
    } else if (data.type === "info") {
      cookbookID = cookbook;
      data.data.forEach(e => {
        update.push(e);
      });
    }

    console.log(update);

    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .patch("http://localhost:3000/cookbooks/" + cookbookID, update, {
        headers: headers
      })
      .map(res => res.json());
  }
}
