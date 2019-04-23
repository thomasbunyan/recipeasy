import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class GeneralService {
  constructor(private http: Http, private cookies: CookieService, private router: Router) {}

  getDash() {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .get("libraries/dash", {
        headers: headers
      })
      .map((res) => res.json());
  }

  // Returns the phrase that is displayed on the dashboard.
  getDashPhrase() {
    const phrase = "Welcome back!";
    return phrase;
  }

  getUser() {
    try {
      const user = JSON.parse(this.cookies.get("user"));
      return user;
    } catch (e) {}
  }

  // Returns the time ago, from a given timestamp.
  getTimeAgo(timeStamp) {
    let diff = (new Date().getTime() - new Date(timeStamp).getTime()) / 60000;
    if (isNaN(diff)) {
      return "not a valid time";
    } else if (diff < 1) {
      return "less than a minute ago";
    } else if (diff < 60) {
      if (Math.round(diff) === 1) {
        return Math.round(diff) + " minute ago";
      }
      return Math.round(diff) + " minutes ago";
    } else if ((diff = diff / 60) < 24) {
      if (Math.round(diff) === 1) {
        return Math.round(diff) + " hour ago";
      }
      return Math.round(diff) + " hours ago";
    } else if ((diff = diff / 24) < 30) {
      if (Math.round(diff) === 1) {
        return Math.round(diff) + " day ago";
      }
      return Math.round(diff) + " days ago";
    } else if ((diff = diff / 30) < 12) {
      if (Math.round(diff) === 1) {
        return Math.round(diff) + " month ago";
      }
      return Math.round(diff) + " months ago";
    } else {
      diff = diff / 12;
      if (Math.round(diff) === 1) {
        return Math.round(diff) + " year ago";
      }
      return Math.round(diff) + " years ago";
    }
  }

  getTotalTime(prep, cook): String {
    try {
      const a = prep + cook;
    } catch (e) {
      console.log(e);
      return;
    }
    const timestamp = prep + cook;
    const minutes = Math.floor(timestamp / 60) % 60;
    const hours = Math.floor(timestamp / 3600);

    let hoursFormatted, minsFormatted;
    if (hours < 10) {
      hoursFormatted = "0" + hours;
    } else {
      hoursFormatted = hours;
    }
    if (minutes < 10) {
      minsFormatted = "0" + minutes;
    } else {
      minsFormatted = minutes;
    }
    return hoursFormatted + ":" + minsFormatted;
  }

  getSeconds(time) {
    const halves = time.split(":");
    let seconds = parseInt(halves[0], 10) * 60 * 60;
    seconds = seconds + parseInt(halves[1], 10) * 60;
    return seconds;
  }

  getTime(timestamp) {
    const minutes = Math.floor(timestamp / 60) % 60;
    const hours = Math.floor(timestamp / 3600);

    let hoursFormatted, minsFormatted;
    if (hours < 10) {
      hoursFormatted = "0" + hours;
    } else {
      hoursFormatted = hours;
    }
    if (minutes < 10) {
      minsFormatted = "0" + minutes;
    } else {
      minsFormatted = minutes;
    }
    return hoursFormatted + ":" + minsFormatted;
  }

  getDifficulty(difficulty) {
    if (difficulty === 0) {
      return "Easy";
    } else if (difficulty === 1) {
      return "Medium";
    } else if (difficulty === 2) {
      return "Hard";
    } else {
      return "Invalid difficulty";
    }
  }

  formatFollowers(followers) {
    return followers.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  }

  formatIngredient(ingredient, servings) {
    if (!ingredient || !servings) {
      return "loading...";
    }
    if (servings < 1) {
      servings = 1;
    } else if (servings > 99) {
      servings = 99;
    }
    let ing = ingredient.ingredient.ingredient;
    if (!ing) {
      ing = ingredient.name;
    }
    if (!ing) {
      ing = ingredient.ingredient;
    }
    let notes = ingredient.notes;
    if (!notes) {
      notes = "";
    } else {
      notes = " (" + notes + ")";
    }
    if (ingredient.unit === "1") {
      return servings * ingredient.amount + " " + ing + notes;
    } else {
      return servings * ingredient.amount + ingredient.unit + " " + ing + notes;
    }
  }

  getImageLink(image) {
    if (!image || image === null) {
      return;
    }
    if (image.includes("http")) {
      return image;
    }
    return "http://www.recipeazy.uk/uploads/" + image.split("\\")[1];
  }
}
