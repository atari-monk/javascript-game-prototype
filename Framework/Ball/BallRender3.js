
export class BallRender3 {

  draw(ctx, ball) {
    const circle = new Path2D();
    circle.arc(
      ball.position.x,
      ball.position.y,
      ball.radius,
      0,
      2 * Math.PI
    );
    ctx.fill(circle);
  }
}
