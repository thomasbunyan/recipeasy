import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { GeneralService } from "../../services/general.service";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"]
})
export class HistoryComponent implements OnInit {
  userData: any;
  searchQueries = [];
  history: any = [];

  constructor(
    private userService: UserService,
    private titleService: Title,
    private router: Router,
    private generalService: GeneralService
  ) {}

  ngOnInit() {
    this.titleService.setTitle("History");
    this.userService.getUserData().subscribe(data => {
      this.userData = data;
      this.compileData();
    });
  }

  compileData() {
    this.searchQueries = this.userData.history.slice();
    const recipes = this.userData.recipes.history.slice();
    const cookbooks = this.userData.cookbooks.history.slice();
    this.history = recipes.concat(cookbooks).sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
  }

  searchQuery(query) {
    this.router.navigate(["/results"], {
      queryParams: { search_query: query }
    });
  }

  removeQuery(index) {
    this.userService
      .updateSearchHistory(this.searchQueries, index)
      .subscribe(data => {
        if (data.success) {
          this.searchQueries.splice(index, 1);
        } else {
          console.log("Error removing query.");
        }
      });
  }

  viewItem(item) {
    if (item.cookbook === undefined) {
      this.router.navigate(["/recipe", item.recipe._id]);
    } else {
      this.router.navigate(["/cookbook", item.cookbook._id]);
    }
  }
}
