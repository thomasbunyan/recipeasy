import { Injectable, Output, EventEmitter } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { SidenavComponent } from "./sidenav.component";
import { MatSidenav } from "@angular/material";

@Injectable()
export class SidenavService {
  isBig = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  public open() {
    // return this.sidenav.open();
  }

  public close() {
    // return this.sidenav.close();
  }

  public status() {
    return this.isBig;
  }

  public toggle() {
    this.isBig = !this.isBig;
    this.change.emit(this.isBig);
  }
}
