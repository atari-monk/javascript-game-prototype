export class BallRender2 {
    draw(ctx, ball) {
        if (ball.size.x != ball.size.y)
            throw "This collider works only for rectangles!";
        this.#drawBall(ctx, ball);
        this.#drawPossition(ctx, ball);
    }

    #drawBall(ctx, ball) {
        var rectSize = ball.size.x;
        ctx.fillStyle = "green";
        ctx.fillRect(
            ball.position.x - rectSize / 2,
            ball.position.y - rectSize / 2,
            rectSize,
            rectSize
        );
    }

    #drawPossition(ctx, ball) {
        ctx.fillStyle = "red";
        ctx.fillRect(ball.position.x - 5 / 2, ball.position.y - 5 / 2, 5, 5);
    }
}