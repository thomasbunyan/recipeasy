import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { UserService } from "./user.service";
import { EmptyObservable } from "rxjs/observable/EmptyObservable";
import { Observable } from "rxjs";

@Injectable()
export class CookbookService {
  cookbookLock = false;
  constructor(private http: Http, private userService: UserService) {}

  addCookbook(name, initialRecipe) {
    const cookbook = {
      title: name,
      description: "Add a description",
      public: false,
      recipes: [{ recipe: initialRecipe, timestamp: new Date() }],
      date: new Date()
    };

    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .post("cookbooks", cookbook, {
        headers: headers
      })
      .map((res) => res.json());
  }

  addRecipeToCookbook(cookbook, recipe) {
    const cookbookID = cookbook._id;
    const cookbookRecipes = cookbook.recipes.slice(0);
    const index = cookbookRecipes.findIndex((x) => x.recipe === recipe);

    if (index === -1) {
      cookbookRecipes.push({
        recipe: recipe,
        timestamp: new Date()
      });
    } else {
      return new EmptyObservable();
    }

    const update = [{ name: "recipes", value: cookbookRecipes }];
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .patch("cookbooks/" + cookbookID, update, {
        headers: headers
      })
      .map((res) => res.json());
  }

  addCookbookImage(cookbookImage) {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    return this.http
      .post("cookbooks/image", cookbookImage, {
        headers: headers
      })
      .map((res) => res.json());
  }

  getCookbooks() {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .get("cookbooks/", {
        headers: headers
      })
      .map((res) => res.json());
  }

  getCookbookSearch(query) {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .get("cookbooks", {
        headers: headers,
        params: {
          search_query: query
        }
      })
      .map((res) => res.json());
  }

  getCookBookById(cookbookId) {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .get("cookbooks/" + cookbookId, {
        headers: headers
      })
      .map((res) => res.json());
  }

  getCookbooksFromSelection(selection) {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .get("cookbooks/selection", {
        headers: headers,
        params: {
          selection: selection
        }
      })
      .map((res) => res.json());
  }

  updateCookbook(cookbook, data) {
    let cookbookID = "";
    const update = [];
    if (data.type === "recipes") {
      cookbookID = cookbook.cookbook._id;
      const cookbookRecipes = cookbook.cookbook.recipes.slice(0);
      const index = cookbookRecipes.findIndex((x) => x.recipe === data.recipe._id || x.recipe._id === data.recipe._id);
      if (index === -1) {
        cookbookRecipes.push({
          recipe: data.recipe._id,
          timestamp: new Date()
        });
      }
      update.push({ name: "recipes", value: cookbookRecipes });
    } else if (data.type === "info") {
      cookbookID = cookbook;
      data.data.forEach((e) => {
        update.push(e);
      });
    } else if (data.type === "followers") {
      cookbookID = cookbook._id;
      update.push({
        name: "followers",
        value: data.amount
      });
    }

    console.log(cookbookID);
    console.log(update);

    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .patch("cookbooks/" + cookbookID, update, {
        headers: headers
      })
      .map((res) => res.json());
  }

  saveCookbook(cookbook) {
    if (this.cookbookLock) {
      return new EmptyObservable();
    }
    this.cookbookLock = true;
    this.userService.getUserData().subscribe((data) => {
      const savedCookbooks = data.cookbooks.saved.map((e) => {
        return e.cookbook._id;
      });
      // console.log(savedCookbooks);
      // console.log(cookbook);
      let followerChange = 1;
      if (savedCookbooks.indexOf(cookbook._id) > -1) {
        followerChange = -1;
      }
      this.updateCookbook(cookbook, {
        type: "followers",
        amount: followerChange
      }).subscribe((data) => {
        this.userService.toggleCookbookSave(cookbook);
        this.cookbookLock = false;
      });
    });
  }
}
