import { BallV3 } from "../../Framework/Ball/BallV3.js";
import { Vector2 } from "../Vector2.js";

export class BallV4 extends BallV3 {
  #drawVect;
  
  constructor(
    gameSize,
    position,
    size,
    speed,
    inputHandler,
    renderers,
    printer,
    textPos,
    wallCollision,
    bearing,
    drawVect = false
  ) {
    super(gameSize, position, size, speed, inputHandler, renderers, printer, textPos, wallCollision);
    this.bearing = bearing;
    this.#setBearing();
    this.#drawVect = drawVect;
  }

  #setBearing() {
    this.bearing.position = this.position;
    this.bearing.radius = 300;
    this.bearing.rotatePolar(0);
  }

  draw(ctx) {
    super.draw(ctx);
    if (this.#drawVect === false) return;
    this.bearing?.draw(ctx);
    this.#drawSpeed(ctx);
  }

  setBearingSpeed() {
    const m = .3;
    const dir = new Vector2(this.bearing.direction.x - this.bearing.position.x, this.bearing.direction.y - this.bearing.position.y);
    const ndir = dir.normalize();
    this.speed.x = ndir.x * m;
    this.speed.y = ndir.y * m;
  }

  #drawSpeed(ctx) {
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(this.position.x, this.position.y);
    ctx.lineTo(this.position.x + this.speed.x * 400, this.position.y + this.speed.y * 400);
    ctx.stroke();
  }
}