import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "textLimit" })
export class TextLimitPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    if (value.length < limit) {
      return value;
    }
    const short = value.slice(0, limit - 3);
    return short + "...";
  }
}
