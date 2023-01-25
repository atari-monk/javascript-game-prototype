import { Vector2 } from "../vector-2.js";

export class Bearing {
  #position;
  #angle;
  #radius;
  #direction;

  constructor() {
    this.#position = new Vector2();
    this.#direction = new Vector2();
  }

  /**
   * @param {{ x: number; y: number; }} v
   */
  set position(v) {
    this.#position.x = v.x;
    this.#position.y = v.y;
  }

  /**
   * @param {number} v
   */
  // set angle(v) {
  //   this.#angle = v;
  // }

  /**
   * @param {number} v
   */
  set radius(v) {
    this.#radius = v;
  }

  get #rads() {
    return this.#angle * (Math.PI / 180);
  }

  get direction() {
    return this.#direction;
  }

  get position() {
    return this.#position;
  }

  rotatePolar(angle) {
    this.#angle = angle;
    this.#direction.x = this.#position.x + this.#radius * Math.cos(this.#rads);
    this.#direction.y = this.#position.y + this.#radius * Math.sin(this.#rads);
  }

  rotate(angle) {
    this.#angle = angle;
    const r0 = new Vector2(this.#direction.x - this.#position.x, this.#direction.y - this.#position.y)
    const x1 = r0.x;
    const y1 = r0.y;
    const cos = Math.cos(this.#rads);
    const sin = Math.sin(this.#rads);
    const r = new Vector2(x1 * cos - y1 * sin, x1 * sin + y1 * cos);
    this.#direction.x = r.x + this.#position.x;
    this.#direction.y = r.y + this.#position.y;
  }

  draw(ctx) {
    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(this.#position.x, this.#position.y);
    ctx.lineTo(this.#direction.x, this.#direction.y);
    ctx.stroke();
  }

  #getRightBallDir() {
    this.rotatePolar(0);
    this.#randomInt(0, 1) === 0 ?
      this.rotate(this.#randomInt(-30, -5)) :
      this.rotate(this.#randomInt(5, 30));
  }

  #getLeftBallDir() {
    this.rotatePolar(0);
    this.#randomInt(0, 1) === 0 ?
      this.rotate(this.#randomInt(-150, -175)) :
      this.rotate(this.#randomInt(-185, -210));
  }

  getBallDir() {
    this.#randomInt(0, 1) === 0 ?
      this.#getRightBallDir() :
      this.#getLeftBallDir();
  }

  #randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}