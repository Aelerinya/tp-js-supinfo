import { create } from "./modules/canvas.js";
import { Rectangle } from "./modules/shapes/rectangle.js";
import { Square } from "./modules/shapes/square.js";

const square = new Square(20, 30, 40, "red");
const rectangle = new Rectangle(50, 10, 30, 70, "green");

const body = document.querySelector("body");

const { ctx, id } = create("ctx", body, 300, 200);

square.draw(ctx);
rectangle.draw(ctx);
