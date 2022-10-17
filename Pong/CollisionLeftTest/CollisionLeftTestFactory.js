import { Timer } from "../../Framework/Timer.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { InputHandlerEmpty } from "../../Framework/InputHandlerEmpty.js";
import { InputHandler } from "../../Framework/InputHandler.js";
import { Ball } from "../../Framework/Ball/Ball.js";
import { BallPrinter } from "../../Framework/Ball/BallPrinter.js";
import { BallInputHandler } from "../../Framework/Ball/BallInputHandler.js";
import { BallInputHandler2 } from "../../Framework/Ball/BallInputHandler2.js";
import { BallRender2 } from "../../Framework/Ball/BallRender2.js";
import { WallCollision } from "../../Framework/WallCollision/WallCollision.js";
import { Player } from "../../Framework/Player/Player.js";
import { PlayerPrinter } from "../../Framework/Player/PlayerPrinter.js";
import { BallCollisionLeft } from "../../Framework/BallCollision/BallCollisionLeft.js";
import { BallCollisionPrinter } from "../../Framework/BallCollision/BallCollisionPrinter.js";
import { BallCollisionRender } from "../../Framework/BallCollision/BallCollisionRender.js";

export class CollisionLeftTestFactory {
    constructor(ctx, size) {
        this.ctx = ctx;
        this.size = size;
        this.timer = new Timer();
        this.input = new InputHandler();
        this.ball = new Ball(
            this,
            new Vector2(this.size.x / 2 + 70, this.size.y / 2),
            new Vector2(40, 40),
            new Vector2(0, 0),
            new BallInputHandler2(this.input)
            , new WallCollision()
            , new BallRender2()
        );
        this.player1 = new Player(
            this,
            new Vector2(this.size.x / 2, this.size.y / 2),
            new Vector2(40, 200),
            new Vector2(0, 0)
            , new InputHandlerEmpty()
        );
        this.collisionLeft = new BallCollisionLeft();

        this.ballPrinter = new BallPrinter(this.ctx, this.ball);
        this.player1Printer = new PlayerPrinter(this.ctx
            , this.player1);
        this.collisionLeftPrinter = 
            new BallCollisionPrinter(
                this.ctx
                , this.collisionLeft);
        this.collisionLeftRender = 
            new BallCollisionRender(
                this.ctx
                , this.collisionLeft);
    }
}