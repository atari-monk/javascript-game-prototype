import { Printer } from "../Printer.js";

export class PointCount extends Printer {
    constructor(ctx, size, ball) {
        super(ctx);
        this.size = size;
        this.ball = ball;
        this.inGame = true;
        this.player1Points = 0;
        this.player2Points = 0;
    }

    update() {
        if (this.ball.position.x <= 0 && this.inGame)
        {
            this.inGame = false;
            this.player2Points+=1;
        }
        if (this.ball.position.x >= this.size.x && this.inGame)
        {
            this.inGame = false;
            this.player1Points+=1;
        }
        if (this.inGame === false)
        {
            this.ball.position.x = this.size.x/2;
            this.ball.position.y = this.size.y/2;
            this.ball.speed.x = 0.2;
            this.ball.speed.y = 0.1;
            this.inGame = true;
        }
    }

    draw() {
        this.print(this.#getPlayer1Score(), 5, 90, 'lightgreen');
        this.print(this.#getPlayer2Score(), 390, 90, 'lightblue');
    }

    #getPlayer1Score() {
        let info = 'player1 points = ' + this.player1Points;
        return info;
    }

    #getPlayer2Score() {
        let info = 'player2 points = ' + this.player2Points;
        return info;
    }
}