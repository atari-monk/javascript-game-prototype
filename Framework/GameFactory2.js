import { Vector2 } from "./Vector2.js";
import { Ball } from "./Ball.js";
import { WallCollision } from "./WallCollision.js";
import { Timer } from "./Timer.js";
import { InputHandler } from "./InputHandler.js";
import { BallInputHandler2 } from "./BallInputHandler2.js";

export class GameFactory2 {
    constructor(ctx, size) {
        this.ctx = ctx;
        this.size = size;
        this.timer = new Timer();
        this.input = new InputHandler();
        this.ball = new Ball(
            this,
            new Vector2(45, this.size.y / 2),
            new Vector2(10, 10),
            new Vector2(.3, .3),
            new BallInputHandler2(this.input)
            , new WallCollision()
        );
    }
}