import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class RecipeService {
  constructor(private http: Http) {}

  addRecipe(recipe) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/recipes/addRecipe", recipe, {
        headers: headers
      })
      .map(res => res.json());
  }

  getRecipe() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/recipes/getRecipes", { headers: headers })
      .map(res => res.json());
  }

  getRecipesBySelection(selection) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/recipes/getRecipesFromSelection", {
        headers: headers,
        params: {
          selection: selection
        }
      })
      .map(res => res.json());
  }

  getRecipeById(id, updateViews) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("id", id);
    return this.http
      .get("http://localhost:3000/recipes/getRecipeById", {
        headers: headers,
        params: { id: id, update: updateViews }
      })
      .map(res => res.json());
  }

  voteRecipe(id, vote) {
    const update = { id: id, voteType: vote };
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/recipes/castVote", update, {
        headers: headers
      })
      .map(res => res.json());
  }
}
