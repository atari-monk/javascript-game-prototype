
export class PongCollisionRender {
    draw(ctx, ballPlayerCollision) {
        this.#drawBallX(ctx, ballPlayerCollision);
    }

    #drawBallX(ctx, ballPlayerCollision) {
        ctx.fillStyle = "green";
        ctx.fillRect(
            ballPlayerCollision.ballX,
            ballPlayerCollision.ballY1,
            5,
            5
        );
    }
}