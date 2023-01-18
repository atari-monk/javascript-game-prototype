
export class RectCollisionRender {

    constructor(ctx, pongCollision) {
        this.ctx = ctx;
        this.pongCollision = pongCollision;
    }

    draw() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(
            this.pongCollision.playerLeftTop.x - 5/2,
            this.pongCollision.playerLeftTop.y - 5/2,
            5,
            5
        );
        this.ctx.fillRect(
            this.pongCollision.ballLeftTop.x - 5/2,
            this.pongCollision.ballLeftTop.y - 5/2,
            5,
            5
        );
    }
}
