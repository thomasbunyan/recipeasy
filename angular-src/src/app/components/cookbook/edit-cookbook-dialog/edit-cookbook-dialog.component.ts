import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-edit-cookbook-dialog",
  templateUrl: "./edit-cookbook-dialog.component.html",
  styleUrls: ["./edit-cookbook-dialog.component.css"]
})
export class EditCookbookDialogComponent implements OnInit {
  title: string;
  description: string;
  public = true;

  constructor(private dialog: MatDialogRef<EditCookbookDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit() {
    this.title = this.data.title;
    this.description = this.data.description;
    this.public = this.data.public;
  }

  close() {
    this.dialog.close();
  }

  update() {
    const data = [];
    if (this.title !== this.data.title) {
      data.push({ name: "title", value: this.title });
    }
    if (this.description !== this.data.description) {
      data.push({ name: "description", value: this.description });
    }
    if (this.public !== this.data.public) {
      data.push({ name: "public", value: this.public });
    }
    this.dialog.close(data);
  }
}
