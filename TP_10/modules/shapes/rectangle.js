export class Rectangle {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  reportArea() {
    return this.width * this.height;
  }

  reportPerimeter() {
    return 2 * this.width + 2 * this.height;
  }
}
