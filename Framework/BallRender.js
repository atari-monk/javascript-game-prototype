export class BallRender {

    draw(ctx, ball) {
        ctx.fillStyle = 'green';
        ctx.fillRect(
            ball.position.x - ball.size.x / 2,
            ball.position.y - ball.size.y / 2,
            ball.size.x,
            ball.size.y
        );
        // const circle = new Path2D();
        // circle.arc(
        //     ball.position.x,
        //     ball.position.y,
        //     ball.radius,
        //     0,
        //     2 * Math.PI
        // );
        // ctx.fill(circle);
    }
}