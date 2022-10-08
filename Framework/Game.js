import { Timer } from "./Timer.js";
import { InputHandler } from "./InputHandler.js";
import { Vector2 } from "./Vector2.js";
import { Player } from "./Player.js";
import { Ball } from "./Ball.js";

export class Game {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.timer = new Timer();
        this.input = new InputHandler();
        this.player = new Player(
            this,
            new Vector2(10, this.height / 2 - 50),
            new Vector2(10, 100),
            new Vector2(0, 0)
        );
        this.ball = new Ball(
            this,
            new Vector2(width - 10, this.height / 2),
            new Vector2(10, 0)
        );
    }
    update(timestamp) {
        this.timer.set(timestamp);
        //this.timer.log();
        this.player.update(this.timer, this.input);
        this.ball.update(this.timer);
    }
    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.player.draw(this.ctx);
        this.ball.draw(this.ctx);
    }
}
