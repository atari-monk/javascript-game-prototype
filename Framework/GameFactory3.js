import { Timer } from "./Timer.js";
import { InputHandler } from "./InputHandler.js";
import { Vector2 } from "./Vector2.js";
import { Player } from "./Player.js";
import { Ball } from "./Ball.js";
import { BallPrinter } from "./BallPrinter.js";
import { PlayerPrinter } from "./PlayerPrinter.js";
import { BallPlayerCollision } from "./BallPlayerCollision.js";
import { BallPlayerCollisionPrinter } from "./BallPlayerCollisionPrinter.js";
import { EmptyInputHandler } from "./EmptyInputHandler.js";
import { BallInputHandler } from "./BallInputHandler.js";
import { WallCollision } from "./WallCollision.js";
import { BallRender } from "./BallRender.js";

export class GameFactory3 {
    constructor(ctx, size) {
        this.ctx = ctx;
        this.size = size;
        this.timer = new Timer();
        this.input = new InputHandler();
        this.player = new Player(
            this,
            new Vector2(10, this.size.y / 2),
            new Vector2(10, 100),
            new Vector2(0, 0)
            , new EmptyInputHandler()
        );
        this.ball = new Ball(
            this,
            new Vector2(45, this.size.y / 2),
            new Vector2(10, 10),
            new Vector2(0, 0),
            new BallInputHandler(this.input)
            , new WallCollision()
            , new BallRender()
        );
        this.ballPrinter = new BallPrinter(this.ctx, this.ball);
        this.playerPrinter = new PlayerPrinter(this.ctx, this.player);
        this.ballPlayerCollision = new BallPlayerCollision(this);
        this.ballPlayerCollisionPrinter = new BallPlayerCollisionPrinter(this.ctx, this.ballPlayerCollision);
    }
}