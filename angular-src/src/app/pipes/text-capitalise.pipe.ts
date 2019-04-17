import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "textCapitalise" })
export class TextCapitalisePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return;
    }
    const first = value.charAt(0);
    value = value.substr(1, value.length);
    return first.toUpperCase() + value;
  }
}
