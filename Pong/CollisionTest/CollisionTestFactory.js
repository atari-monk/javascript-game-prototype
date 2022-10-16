import { Timer } from "../../Framework/Timer.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { EmptyInputHandler } from "../../Framework/EmptyInputHandler.js";
import { InputHandler } from "../../Framework/InputHandler.js";
import { Ball } from "../../Framework/Ball/Ball.js";
import { BallPrinter } from "../../Framework/Ball/BallPrinter.js";
import { BallInputHandler } from "../../Framework/Ball/BallInputHandler.js";
import { BallInputHandler2 } from "../../Framework/Ball/BallInputHandler2.js";
import { BallRender2 } from "../../Framework/Ball/BallRender2.js";
import { WallCollision } from "../../Framework/WallCollision/WallCollision.js";
import { Player } from "../../Framework/Player/Player.js";
import { PlayerPrinter } from "../../Framework/Player/PlayerPrinter.js";
import { PongCollision } from "../../Framework/Collision/PongCollision.js";
import { PongCollisionPrinter } from "../../Framework/Collision/PongCollisionPrinter.js";
import { PongCollisionRender } from "../../Framework/Collision/PongCollisionRender.js";

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