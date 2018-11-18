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
  cookbooks: any;

  constructor(
    private userService: UserService,
    private cookbookService: CookbookService,
    private titleService: Title,
    private router: Router
  ) { }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem("user")).id;
    this.userService.getUserCookbooks().subscribe(data => {
      if (data.err) {
        console.log("Could not get cookbooks");
      } else {
        const usersCookbooks = data.item.author.map(x => x.cookbook);
        this.cookbookService
          .getCookbooksFromSelection(usersCookbooks)
          .subscribe(data => {
            if (!data.success) {
              console.log("ERROR2: Could not get cookbooks");
            } else {
              this.cookbooks = data.cookbooks;
            }
          });
      }
    });
    this.titleService.setTitle("Your cookbooks");
  }

  viewCookbook(cookbook) {
    this.router.navigate(["/cookbook", cookbook._id]);
  }
}
