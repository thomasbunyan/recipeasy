import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { SidenavComponent } from "./sidenav.component";
import { MatSidenav } from "@angular/material";

@Injectable()
export class SidenavService {
  private sidenav: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
    return this.sidenav.open();
  }

  public close() {
    return this.sidenav.close();
  }

  public toggle(): void {
    this.sidenav.toggle();
  }

  public status() {
    return this.sidenav.opened;
  }
}
