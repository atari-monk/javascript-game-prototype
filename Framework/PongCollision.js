export class PongCollision {
    
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
    }

    calculateCollision(player, ball) {
        this.#isBallPlayerXCollision(player, ball);
        this.#isBallPlayerYCollision(player, ball);
        this.xyCollision = this.xCollision && this.yCollision;
        if (this.xyCollision)
        {
            ball.reverseXSpeed();
        }
    }

    #isCollisionRegion()
    {
        
    }

    #isBallPlayerXCollision(player, ball) {
        this.ballX = ball.position.x - ball.size.x/2;
        this.playerX = player.position.x + 5; 
        this.xCollision = this.ballX <= this.playerX;
    }

    #isBallPlayerYCollision(player, ball) {
        this.ballY1 = ball.position.y - ball.size.x/2;
        this.ballY2 = ball.position.y + ball.size.x/2;
        this.playerY1 = player.position.y - (player.size.y / 2);
        this.playerY2 = player.position.y + (player.size.y / 2);
        this.yCollision = ((this.playerY1 <= this.ballY1) || (this.playerY1 <= this.ballY2)) 
            && ((this.playerY2 >= this.ballY2) || (this.playerY2 >= this.ballY1));
    }
}