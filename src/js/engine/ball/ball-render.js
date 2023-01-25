import { Render } from "../entity/render.js";

export class BallRender extends Render {

  draw(ctx, ball) {
    this.drawRect(ctx, ball.position.x, ball.position.y, ball.size.x, 'red');
    // this.drawRect(ctx, ball.position.x, ball.position.y, 4, 'red');
  }
}