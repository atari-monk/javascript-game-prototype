import { Vector2 } from "./Vector2.js";
import { Ball } from "./Ball.js";
import { WallCollision } from "./WallCollision.js";
import { Timer } from "./Timer.js";
import { InputHandler } from "./InputHandler.js";
import { BallInputHandler2 } from "./BallInputHandler2.js";
import { BallRender2 } from "./BallRender2.js";
import { BallPrinter } from "./BallPrinter.js";
import { WallCollisionPrinter } from "./WallCollisionPrinter.js";

export class GameFactory1 {
    constructor(ctx, size) {
        this.ctx = ctx;
        this.size = size;
        this.timer = new Timer();
        this.input = new InputHandler();
        var testX = false;
        var testY = true;
        var positionForX = new Vector2(60, this.size.y - 60);
        var velocityForX = new Vector2(0.01, 0.0);
        var positionForY = new Vector2(60, this.size.y - 60);
        var velocityForY = new Vector2(0, -0.01);
        var position = new Vector2(this.size.x / 2, this.size.y / 2);
        var velocity = new Vector2(0, 0);
        if(testX)
        {
            position = positionForX;
            velocity = velocityForX;
        }
        if(testY)
        {
            position = positionForY;
            velocity = velocityForY;
        }
        this.ball = new Ball(
            this,
            position,
            new Vector2(100, 100),
            velocity,
            new BallInputHandler2(this.input)
            , new WallCollision()
            , new BallRender2()
        );
        this.ballPrinter = new BallPrinter(this.ctx, this.ball);
        this.wallCollisionPrinter = new WallCollisionPrinter(this.ctx, this.ball);
    }
}