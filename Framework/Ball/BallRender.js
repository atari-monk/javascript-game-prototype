import { Render } from "../Entity/Render.js";

export class BallRender extends Render {

  draw(ctx, ball) {
    this.drawRect(ctx, ball.position.x, ball.position.y, ball.size.x, 'green');
    // this.drawRect(ctx, ball.position.x, ball.position.y, 4, 'red');
  }
}