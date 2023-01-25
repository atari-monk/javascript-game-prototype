
export class Vector2 {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize() {
    const mag = this.mag();
    const nv = new Vector2();
    nv.x = this.x / mag;
    nv.y = this.y / mag;
    return nv;
  }

  log() {
    console.log(`(${this.x}, ${this.y})`);
  }
}