import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"]
})
export class HistoryComponent implements OnInit {
  userData: any;

  constructor(private userService: UserService, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle("History");
    this.userService.getUserData().subscribe(data => {
      this.userData = data;
    });
  }

  viewItem(item) {
    console.log("View item");
    // if ((item.type = "recipe")) {
    //   console.log("Recipe");
    // } else {
    //   console.log("Cookbook");
    // }
  }
}
