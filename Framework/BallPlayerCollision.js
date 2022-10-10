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

    calculateCollision() {
        this.#isBallPlayerXCollision();
        this.#isBallPlayerYCollision();
        this.xyCollision = this.xCollision && this.yCollision;
        if (this.xyCollision)
        {
            this.game.ball.reverseXSpeed();
            //this.game.ball.reverseYSpeed();
        }
    }

    #isBallPlayerXCollision() {
        this.ballX = this.game.ball.position.x - this.game.ball.radius;
        this.playerX = this.game.player.position.x; 
        this.xCollision = this.ballX <= this.playerX;
    }

    #isBallPlayerYCollision() {
        this.ballY1 = this.game.ball.position.y - this.game.ball.radius/2;
        this.ballY2 = this.game.ball.position.y + this.game.ball.radius/2;
        this.playerY1 = this.game.player.position.y - (this.game.player.size.y / 2);
        this.playerY2 = this.game.player.position.y + (this.game.player.size.y / 2);
        this.yCollision = ((this.playerY1 <= this.ballY1) || (this.playerY1 <= this.ballY2)) 
            && ((this.playerY2 >= this.ballY2) || (this.playerY2 >= this.ballY1));
    }   
}