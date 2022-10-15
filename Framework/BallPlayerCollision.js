export class BallPlayerCollision {
    
    constructor(game) {
        this.game = game;
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

    calculateCollision(player) {
        this.#isBallPlayerXCollision(player);
        this.#isBallPlayerYCollision(player);
        this.xyCollision = this.xCollision && this.yCollision;
        if (this.xyCollision)
        {
            this.game.ball.reverseXSpeed();
        }
    }

    #isBallPlayerXCollision(player) {
        this.ballX = this.game.ball.position.x - this.game.ball.size.x/2;
        this.playerX = player.position.x + 5; 
        this.xCollision = this.ballX <= this.playerX;
    }

    #isBallPlayerYCollision(player) {
        this.ballY1 = this.game.ball.position.y - this.game.ball.size.x/2;
        this.ballY2 = this.game.ball.position.y + this.game.ball.size.x/2;
        this.playerY1 = player.position.y - (player.size.y / 2);
        this.playerY2 = player.position.y + (player.size.y / 2);
        this.yCollision = ((this.playerY1 <= this.ballY1) || (this.playerY1 <= this.ballY2)) 
            && ((this.playerY2 >= this.ballY2) || (this.playerY2 >= this.ballY1));
    }   
}