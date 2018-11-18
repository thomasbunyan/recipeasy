import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-edit-cookbook-dialog',
  templateUrl: './edit-cookbook-dialog.component.html',
  styleUrls: ['./edit-cookbook-dialog.component.css']
})
export class EditCookbookDialogComponent implements OnInit {
  public = true;
  name: string;
  description: string;

  constructor(private dialog: MatDialogRef<EditCookbookDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.public = !this.data.private;
    this.name = this.data.name;
    this.description = this.data.description;
  }

  close() {
    this.dialog.close();
  }

  update() {
    const data = {
      name: this.name,
      description: this.description,
      private: !this.public
    };
    this.dialog.close(data);
  }

}
