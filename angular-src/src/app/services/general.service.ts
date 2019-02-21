import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class GeneralService {
  constructor(private http: Http) {}

  getDash() {
    const headers = new Headers();
    headers.append("Authorization", localStorage.getItem("id_token"));
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/libraries/dash", {
        headers: headers
      })
      .map((res) => res.json());
  }

  // Returns the phrase that is displayed on the dashboard.
  getDashPhrase() {
    const phrase = "Welcome back Thomas";
    return phrase;
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
    if (isNaN(prep)) {
      return cook;
    }

    const timestamp = prep + cook;
    let minutes = Math.floor(timestamp / 60);
    const hours = minutes % 60;
    minutes = minutes - hours * 60;

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

  formatIngredient(ingredient) {
    let ing = ingredient.ingredient.ingredient;
    if (!ingredient.ingredient.ingredient) {
      ing = ingredient.name;
    }
    if (ingredient.unit === "1") {
      return ingredient.amount + " " + ing;
    } else {
      return ingredient.amount + ingredient.unit + " " + ing;
    }
  }

  getImageLink(image) {
    if (!image) {
      return;
    }
    return "http://localhost:3000/uploads/" + image.split("\\")[1];
  }
}
