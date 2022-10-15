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
        var testMinX = true;
        var testMaxX = false;
        var testMinY = false;
        var testMaxY = false;
        var positionForMinX = new Vector2(60, this.size.y - 60);
        var velocityForMinX = new Vector2(0.01, 0.0);
        var positionForMaxX = new Vector2(this.size.x - 60, 60);
        var velocityForMaxX = new Vector2(-0.01, 0);
        var positionForMinY = new Vector2(this.size.x - 60, 60);
        var velocityForMinY = new Vector2(0, 0.01);
        var positionForMaxY = new Vector2(60, this.size.y - 60);
        var velocityForMaxY = new Vector2(0, -0.01);
        var position = new Vector2(this.size.x / 2, this.size.y / 2);
        var velocity = new Vector2(0, 0);
        if(testMinX)
        {
            position = positionForMinX;
            velocity = velocityForMinX;
        }
        if(testMaxX)
        {
            position = positionForMaxX;
            velocity = velocityForMaxX;
        }
        if(testMinY)
        {
            position = positionForMinY;
            velocity = velocityForMinY;
        }
        if(testMaxY)
        {
            position = positionForMaxY;
            velocity = velocityForMaxY;
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