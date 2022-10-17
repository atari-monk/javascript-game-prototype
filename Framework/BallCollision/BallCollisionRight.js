
export class BallCollisionRight {

    constructor() {
        this.ballY1 = 0;
        this.playerY1 = 0;
        this.ballY2 = 0;
        this.playerY2 = 0;
        this.ballX = 0;
        this.playerX = 0;
        this.xCollision = false;
        this.yCollision = false;
        this.xyCollision = false;
        this.regionX = false;
        this.regionY = false;
        this.region = false;
    }

    calculateCollision(player, ball) {
        this.#prepareParams(player, ball);
        this.#isCollisionRegion(ball);
        if (this.region) {
            this.#isBallPlayerXCollision(player, ball);
            this.#isBallPlayerYCollision(player, ball);
            this.xyCollision = this.xCollision && this.yCollision;
            if (this.xyCollision) {
                ball.reverseXSpeed();
            }
        }
    }

    #prepareParams(player, ball) {
        this.ballX = ball.position.x + ball.size.x / 2;
        this.playerX = player.position.x - player.size.x / 2;
        this.ballY1 = ball.position.y - ball.size.x / 2;
        this.ballY2 = ball.position.y + ball.size.x / 2;
        this.playerY1 = player.position.y - (player.size.y / 2);
        this.playerY2 = player.position.y + (player.size.y / 2);
    }

    #isCollisionRegion(ball) {
        this.regionX = this.ballX <= this.playerX + ball.size.x / 2
            && this.ballX >= this.playerX - 2 * ball.size.x;
        this.regionY = (this.ballY1 >= this.playerY1 - ball.size.x
            && this.ballY1 <= this.playerY2 + ball.size.x)
            && (this.ballY2 >= this.playerY1 - ball.size.x
                && this.ballY2 <= this.playerY2 + ball.size.x);
        this.region = this.regionX && this.regionY;
    }

    #isBallPlayerXCollision(player, ball) {
        this.xCollision = this.ballX >= this.playerX;
    }

    #isBallPlayerYCollision(player, ball) {
        this.yCollision = ((this.playerY1 <= this.ballY1) || (this.playerY1 <= this.ballY2))
            && ((this.playerY2 >= this.ballY2) || (this.playerY2 >= this.ballY1));
    }
}