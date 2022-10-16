
export class PongCollisionRender {

    constructor(ctx, pongCollision) {
        this.ctx = ctx;
        this.pongCollision = pongCollision;
    }

    draw() {
        if (this.pongCollision.region) 
            this.#drawBallX();
    }

    #drawBallX() {
        this.ctx.fillStyle = "red";
        //X,Y1
        this.ctx.fillRect(
            this.pongCollision.ballX - 5/2,
            this.pongCollision.ballY1 - 5/2,
            5,
            5
        );
        //X,Y2
        this.ctx.fillRect(
            this.pongCollision.ballX - 5/2,
            this.pongCollision.ballY2 - 5/2,
            5,
            5
        );
        //playerX,playerY1
        this.ctx.fillRect(
            this.pongCollision.playerX - 5/2,
            this.pongCollision.playerY1 - 5/2,
            5,
            5
        );
        //playerX,playerY2
        this.ctx.fillRect(
            this.pongCollision.playerX - 5/2,
            this.pongCollision.playerY2 - 5/2,
            5,
            5
        );
    }
}