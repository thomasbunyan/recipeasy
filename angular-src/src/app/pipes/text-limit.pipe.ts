import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "textLimit" })
export class TextLimitPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    if (!value) {
      return;
    }
    if (value.length < limit) {
      return value;
    }
    const short = value.slice(0, limit - 3);
    return short + "...";
  }
}

@Pipe({ name: "textCapitalise" })
export class TextCapitalisePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return;
    }
    const first = value.charAt(0);
    value = value.substr(1, value.length);
    return first.toUpperCase + value;
  }
}
