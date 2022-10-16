import { Timer } from "../../Framework/Timer.js";
import { InputHandler } from "../../Framework/InputHandler.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { Player } from "../../Framework/Player.js";
import { Ball } from "../../Framework/Ball.js";
import { BallPrinter } from "../../Framework/BallPrinter.js";
import { PlayerPrinter } from "../../Framework/PlayerPrinter.js";
import { PongCollision } from "../../Framework/PongCollision.js";
import { PongCollisionPrinter } from "../../Framework/PongCollisionPrinter.js";
import { EmptyInputHandler } from "../../Framework/EmptyInputHandler.js";
import { BallInputHandler } from "../../Framework/BallInputHandler.js";
import { BallInputHandler2 } from "../../Framework/BallInputHandler2.js";
import { WallCollision } from "../../Framework/WallCollision.js";
import { BallRender2 } from "../../Framework/BallRender2.js";
import { PongCollisionRender } from "../../Framework/PongCollisionRender.js";

export class CollisionTestFactory {
    constructor(ctx, size) {
        this.ctx = ctx;
        this.size = size;
        this.timer = new Timer();
        this.input = new InputHandler();
        this.player = new Player(
            this,
            new Vector2(this.size.x / 2, this.size.y / 2),
            new Vector2(40, 200),
            new Vector2(0, 0)
            , new EmptyInputHandler()
        );
        this.ball = new Ball(
            this,
            new Vector2(this.size.x / 2 + 70, this.size.y / 2),
            new Vector2(40, 40),
            new Vector2(0, 0),
            new BallInputHandler2(this.input)
            , new WallCollision()
            , new BallRender2()
        );
        this.ballPrinter = new BallPrinter(this.ctx, this.ball);
        this.playerPrinter = new PlayerPrinter(this.ctx, this.player);
        this.pongCollision1 = new PongCollision();
        this.pongCollisionPrinter1 = new PongCollisionPrinter(this.ctx, this.pongCollision1);
        this.pongCollisionRender1 = new PongCollisionRender(this.ctx, this.pongCollision1);
        this.pongCollision2 = new PongCollision();
    }
}