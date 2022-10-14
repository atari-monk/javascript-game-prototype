import { Vector2 } from "./Vector2.js";
import { Ball } from "./Ball.js";
import { WallCollision } from "./WallCollision.js";
import { Timer } from "./Timer.js";
import { InputHandler } from "./InputHandler.js";
import { BallInputHandler2 } from "./BallInputHandler2.js";
import { BallRender } from "./BallRender.js";

export class GameFactory1 {
    constructor(ctx, size) {
        this.ctx = ctx;
        this.size = size;
        this.timer = new Timer();
        this.input = new InputHandler();
        this.ball = new Ball(
            this,
            new Vector2(110, this.size.y / 2),
            new Vector2(100, 100),
            new Vector2(.01, 0.0),
            new BallInputHandler2(this.input)
            , new WallCollision()
            , new BallRender()
        );
    }
}