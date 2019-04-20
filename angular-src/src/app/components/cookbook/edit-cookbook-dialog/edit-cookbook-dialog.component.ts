import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { CookbookService } from "../../../services/cookbook.service";
import { GeneralService } from "../../../services/general.service";
import { RecipeValidateService } from "../../../services/recipe-validate.service";

@Component({
  selector: "app-edit-cookbook-dialog",
  templateUrl: "./edit-cookbook-dialog.component.html",
  styleUrls: ["./edit-cookbook-dialog.component.css"]
})
export class EditCookbookDialogComponent implements OnInit {
  title: string;
  description: string;
  public = true;
  cookbookImage: any;

  constructor(
    private dialog: MatDialogRef<EditCookbookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private cookbookService: CookbookService,
    private generalService: GeneralService,
    private recipeService: RecipeValidateService
  ) {}

  ngOnInit() {
    this.title = this.data.title;
    this.description = this.data.description;
    this.public = this.data.public;
    if (this.data.image) {
      this.cookbookImage = this.generalService.getImageLink(this.data.image);
    }
  }

  close() {
    this.dialog.close();
  }

  uploadImage(e, image) {
    if (e.target.files && e.target.files[0]) {
      this.cookbookImage = <File>e.target.files[0];
      if (this.cookbookImage.type.split("/")[0] !== "image") {
        if (this.data.image) {
          this.cookbookImage = this.generalService.getImageLink(this.data.image);
        } else {
          this.cookbookImage = undefined;
        }
        return;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        image.src = e.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  update() {
    const data = [];
    if (this.cookbookImage) {
      this.updateImage(data);
    } else {
      this.addData(data);
    }
  }

  addData(data) {
    if (this.title !== this.data.title && !this.recipeService.validateTitle(this.title).err) {
      data.push({ name: "title", value: this.title });
    }
    if (this.description !== this.data.description && !this.recipeService.validateTitle(this.description).err) {
      data.push({ name: "description", value: this.description });
    }
    if (this.public !== this.data.public) {
      data.push({ name: "public", value: this.public });
    }
    this.dialog.close(data);
  }

  updateImage(dataA) {
    const fd = new FormData();
    fd.append("cookbookImage", this.cookbookImage, this.cookbookImage.name);
    this.cookbookService.addCookbookImage(fd).subscribe((data) => {
      dataA.push({ name: "image", value: data.path });
      this.addData(dataA);
    });
  }
}
