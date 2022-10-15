import { Timer } from "./Timer.js";
import { InputHandler } from "./InputHandler.js";
import { Vector2 } from "./Vector2.js";
import { Player } from "./Player.js";
import { Ball } from "./Ball.js";
import { BallPrinter } from "./BallPrinter.js";
import { PlayerPrinter } from "./PlayerPrinter.js";
import { PongCollision } from "./PongCollision.js";
import { PongCollisionPrinter } from "./PongCollisionPrinter.js";
import { EmptyInputHandler } from "./EmptyInputHandler.js";
import { BallInputHandler } from "./BallInputHandler.js";
import { WallCollision } from "./WallCollision.js";
import { BallRender2 } from "./BallRender2.js";
import { PongCollisionRender } from "./PongCollisionRender.js";

export class GameFactory3 {
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
            new BallInputHandler(this.input)
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