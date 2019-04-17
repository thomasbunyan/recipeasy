import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class RecipeService {
  constructor(private http: Http) {}

  addRecipe(recipe) {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/recipes/", recipe, {
        headers: headers
      })
      .map((res) => res.json());
  }

  addRecipeImage(recipeImage) {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    // headers.append("Content-Type", "multipart/form-data");
    return this.http
      .post("http://localhost:3000/recipes/image", recipeImage, {
        headers: headers
      })
      .map((res) => res.json());
  }

  getRecipes() {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http.get("http://localhost:3000/recipes", { headers: headers }).map((res) => res.json());
  }

  getRecipeSearch(query, last?: number) {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/recipes", {
        headers: headers,
        params: {
          search_query: query,
          last_seen: last
        }
      })
      .map((res) => res.json());
  }

  getRecipeCuisine(cuisine, last?: number) {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/recipes", {
        headers: headers,
        params: {
          cuisine: cuisine,
          last_seen: last
        }
      })
      .map((res) => res.json());
  }

  getRecipesBySelection(selection) {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/recipes/selection", {
        headers: headers,
        params: {
          selection: selection
        }
      })
      .map((res) => res.json());
  }

  getRecipe(id) {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/recipes/" + id, {
        headers: headers
      })
      .map((res) => res.json());
  }

  voteRecipe(id, vote) {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .patch(
        "http://localhost:3000/recipes/" + id + "/" + vote,
        {},
        {
          headers: headers
        }
      )
      .map((res) => res.json());
  }

  getNutrition(recipe) {
    const nutrition = {};
    const nutritionArray = [];
    const regex = /\,.*$/;
    const ingredient = recipe.ingredients.map((e) => {
      return e.ingredient;
    });
    ingredient.forEach((eIng) => {
      eIng.nutrients.forEach((e) => {
        const nutName = e.nutrient.replace(regex, "");
        if (nutrition[nutName]) {
          nutrition[nutName][0] = nutrition[nutName][0] + e.val;
        } else {
          nutrition[nutName] = [e.val, e.uom];
        }
      });
    });
    for (const key in nutrition) {
      if (nutrition[key] !== 0) {
        nutritionArray.push({ nutrient: key, val: nutrition[key][0].toFixed(1), uom: nutrition[key][1] });
      }
    }
    return nutritionArray;
  }

  getSimilarRecipes(id) {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/recipes/" + id + "/similar", {
        headers: headers
      })
      .map((res) => res.json());
  }
}
