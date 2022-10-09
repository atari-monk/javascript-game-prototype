import { Timer } from "./Timer.js";
import { InputHandler } from "./InputHandler.js";
import { Vector2 } from "./Vector2.js";
import { Player } from "./Player.js";
import { Ball } from "./Ball.js";
import { BallPrinter } from "./BallPrinter.js";
import { PlayerPrinter } from "./PlayerPrinter.js";

export class Game {
    constructor(ctx, size) {
        this.ctx = ctx;
        this.size = size;
        this.timer = new Timer();
        this.input = new InputHandler();
        this.player = new Player(
            this,
            new Vector2(10, (this.size.y / 2) - 50),
            new Vector2(10, 100),
            new Vector2(0, 0)
        );
        this.ball = new Ball(
            this,
            new Vector2(this.size.x - 15, 
                this.size.y / 2),
            10,
            new Vector2(0, 0)
        );
        this.ballPrinter = new BallPrinter(this.ctx, this.ball);
        this.playerPrinter = new PlayerPrinter(this.ctx, this.player);
    }
    update(timestamp) {
        this.timer.set(timestamp);
        //this.timer.log();
        this.player.update(this.timer, this.input);
        this.ball.update(this.timer, this.input);
    }
    draw() {
        this.ctx.clearRect(0, 0, 
            this.size.x, this.size.y);
        this.player.draw(this.ctx);
        this.ball.draw(this.ctx);
        this.ballPrinter.printInfo();
        this.playerPrinter.printInfo();
    }
}