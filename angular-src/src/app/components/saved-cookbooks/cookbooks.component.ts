import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { CookbookService } from "../../services/cookbook.service";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-cookbooks",
  templateUrl: "./cookbooks.component.html",
  styleUrls: ["./cookbooks.component.css"]
})
export class CookbooksComponent implements OnInit {
  userId: any;
  cookbooks = { saved: [] };
  savedCookbooks = [];
  userCookbooks: any;

  constructor(
    private userService: UserService,
    private cookbookService: CookbookService,
    private titleService: Title,
    private router: Router
  ) {}

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem("user")).id;
    this.titleService.setTitle("Your cookbooks");
    this.userService.getUserData().subscribe(data => {
      if (!data.success) {
        console.log("Could not get cookbooks");
      } else {
        this.cookbooks = data.cookbooks;
        this.userCookbooks = this.cookbooks.saved.map(x => {
          return x.cookbook._id;
        });
      }
    });
  }

  viewCookbook(cookbook) {
    this.router.navigate(["/cookbook", cookbook._id]);
  }

  toggleSave(cookbook) {
    this.userService
      .addUserData(
        { id: this.userId, data: this.cookbooks },
        { data: "cookbooks", type: "save" },
        cookbook.cookbook._id
      )
      .subscribe(data => {
        if (!data.success) {
          console.log("Couldn't add cookbook");
        } else {
          this.userCookbooks = data.cookbooks;
        }
      });
  }
}
