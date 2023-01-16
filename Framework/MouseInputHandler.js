import { Vector2 } from "./Vector2.js";

export class MouseInputHandler {
  
  #coords;
  #printer;
  #print;

  constructor(printer, print = false) {
    this.#print = print;
    this.#printer = printer;
    document.addEventListener("mousemove", this.#mouseMoveHandler.bind(this), false);
    this.#coords = new Vector2();
  }

  #mouseMoveHandler(e) {
    this.#coords.x = e.screenX;
    this.#coords.y = e.screenY;
    //console.log(this.#coords);
  }

  draw() {
    if (this.#print === false) return;
    this.#setFont();
    this.#printCoords();
    this.#resetFont();
  }

  #setFont() {
    this.#printer.setPrint('left', 'bold 46px Arial');
  }

  #printCoords() {
    this.#printer.print(`Mouse (${this.#coords.x}, ${this.#coords.y})`, 15, 55, 'green');
  }

  #resetFont() {
    this.#printer.setPrint('left', 'normal 12px Arial');
  }
}
