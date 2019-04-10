import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { SidenavService } from "../sidenav/sidenav.service";
import { CookbookService } from "../../services/cookbook.service";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import { GeneralService } from "../../services/general.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  userId: any;
  cookbooks: any = [];
  userCookbooks: any;
  userRecipes = [];
  dash: any;
  loading = true;
  searchQueries = [];

  constructor(
    private titleService: Title,
    private router: Router,
    private sidenavService: SidenavService,
    private cookbookService: CookbookService,
    private userService: UserService,
    private generalService: GeneralService
  ) {}

  ngOnInit() {
    this.titleService.setTitle("Dashboard");
    this.sidenavService.open();
    this.userId = JSON.parse(localStorage.getItem("user")).id;
    this.generalService.getDash().subscribe((data) => {
      this.dash = data.dash;
      this.dash.top.day = this.dash.top.day.splice(0, 5);
      this.userService.getUserData().subscribe((data) => {
        this.userCookbooks = data.cookbooks;
        this.dash.libraries.forEach((e) => {
          e.cookbooks.forEach((x) => {
            const indexSave = this.userCookbooks.saved.findIndex((y) => y.cookbook._id === x._id);
            if (indexSave !== -1) {
              x.saved = true;
            }
          });
        });
        this.loading = false;
      });
    });
  }

  viewRecipe(recipe) {
    this.router.navigate(["/recipe", recipe._id]);
  }
  viewCookbook(cookbook) {
    this.router.navigate(["/cookbook", cookbook._id]);
  }

  toggleSave(cookbook) {
    this.userService.addUserData({ id: this.userId, data: this.userCookbooks }, { data: "cookbooks", type: "save" }, cookbook._id).subscribe((data) => {
      if (!data.success) {
        console.log("Couldn't add cookbook");
      } else {
        this.userCookbooks = data.cookbooks;
        cookbook.saved = !cookbook.saved;
      }
    });
  }

  searchQuery(query) {
    this.router.navigate(["/results"], {
      queryParams: { search_query: query }
    });
  }
}
