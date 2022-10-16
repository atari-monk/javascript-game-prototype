import { Vector2 } from "../../Framework/Vector2.js";
import { Ball } from "../../Framework/Ball.js";
import { WallCollision } from "../../Framework/WallCollision.js";
import { Timer } from "../../Framework/Timer.js";
import { InputHandler } from "../../Framework/InputHandler.js";
import { BallInputHandler2 } from "../../Framework/BallInputHandler2.js";
import { BallRender } from "../../Framework/BallRender.js";

export class WallCollisionFactory {
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
            , new BallRender()
        );
    }
}