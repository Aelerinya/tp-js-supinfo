import { Rectangle } from "./rectangle.js";

export class Square extends Rectangle {
  constructor(x, y, length, color) {
    super(x, y, length, length, color);
  }
}
