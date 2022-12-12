import { Printer } from "../Printer.js";

export class WallCollisionPrinter extends Printer {
  constructor(ctx, ball) {
    super(ctx);
    this.ball = ball;
  }

  printInfo() {
    this.print(this.#getInfo(), 5, 80, 'red');
  }

  #getInfo() {
    var info = 'WallCollision->debugCondition:'
      + this.ball.wallCollision.debugCondition;
    return info;
  }
}