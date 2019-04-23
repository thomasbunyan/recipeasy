import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "findImage" })
export class FindImagePipe implements PipeTransform {
  transform(value: string, type: string): string {
    if (!value || value === null || !type) {
      return;
    }
    if (type === "recipe") {
      return "uploads/recipes/" + value.split("\\")[1];
    } else if (type === "cookbook") {
      return "uploads/cookbooks/" + value.split("\\")[1];
    }
  }
}
