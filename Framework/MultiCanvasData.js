
export class MultiCanvasData {
  #key;
  #data;

  constructor() {
    this.#data = new Map();
  }

  add(id, canvasData) {
    this.#data.set(id, canvasData);
  }

  get(name) {
    return this.#data.get(`${this.#key}-${name}`);
  }

  get key() {
    return this.#key;
  }

  set key(k) {
    this.#key = k;
  }
}