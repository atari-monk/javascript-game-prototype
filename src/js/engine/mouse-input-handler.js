import { Vector2 } from "./vector-2.js";

export class MouseInputHandler {

  #movingUp;
  #movingDown;
  #still;
  #coords0;
  #coords;
  #printer;
  #print;
  #timer;
  #pos;

  get coords() {
    return this.#coords;
  }

  get movingUp() {
    return this.#movingUp;
  }

  get movingDown() {
    return this.#movingDown;
  }

  get still() {
    return this.#still;
  }

  constructor(printer, print = false, pos = null) {
    this.#print = print;
    this.#printer = printer;
    document.addEventListener("mousemove", this.#mouseMoveHandler.bind(this), false);
    this.#coords0 = new Vector2();
    this.#coords = new Vector2();
    this.#movingUp = false;
    this.#movingDown = false;
    this.#still = true;
    this.#pos = pos;
  }

  #mouseMoveHandler(e) {
    clearTimeout(this.#timer);
    this.#coords.x = e.screenX;
    this.#coords.y = e.screenY;
    if (this.#coords0.y - this.#coords.y >= 1) 
    { 
      this.#movingUp = true; 
      this.#movingDown = false;
      this.#still = false;
    }
    else if (this.#coords0.y - this.#coords.y <= -1) 
    { 
      this.#movingUp = false;
      this.#movingDown = true;
      this.#still = false;
    }
    //console.log(`${this.#coords0.y - this.#coords.y}`);
    this.#coords0.y = this.#coords.y;
    this.#timer = setTimeout(this.#mouseStill.bind(this), 0)
    // console.log(`down ${this.#movingDown}`);
    // console.log(`still ${this.#still}`);
  }

  #mouseStill() {
    this.#movingUp = false;
    this.#movingDown = false;
    this.#still = true;
  }

  draw() {
    if (this.#print === false) return;
    //this.#setFont();
    this.#printMouse();
    //this.#resetFont();
  }

  #setFont() {
    this.#printer.setPrint('left', 'bold 26px Arial');
  }

  #printMouse() {
    this.#printer.print(`Mouse: (${this.#coords.x}, ${this.#coords.y}), (up, down, still) - (${this.#movingUp}, ${this.#movingDown}, ${this.#still})`, this.#pos.x, this.#pos.y, 'white');
  }

  #resetFont() {
    this.#printer.setPrint('left', 'normal 12px Arial');
  }
}
