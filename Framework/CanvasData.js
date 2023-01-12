
export class CanvasData {
  #canvasId;
  #size;
  #canvas;
  #ctx;

  constructor(canvasId, size) {
    this.#canvasId = canvasId;
    this.#size = size;
  }

  get canvasId() {
    return this.#canvasId;
  }

  get size() {
    return this.#size;
  }

  get canvas() {
    return this.#canvas;
  }

  get ctx() {
    return this.#ctx;
  }

  setCanvas() {
    this.#canvas = document.getElementById(this.#canvasId);
    this.#canvas.width = this.#size.x;
    this.#canvas.height = this.#size.y;
    this.#ctx = this.#canvas.getContext('2d');
    //console.log(this.#canvasId, this.#canvas.width, this.#canvas.height);
  }
}