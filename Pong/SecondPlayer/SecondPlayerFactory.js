import { Timer } from "../../Framework/Timer.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { InputHandlerEmpty } from "../../Framework/InputHandlerEmpty.js";
import { InputHandler } from "../../Framework/InputHandler.js";
import { Ball } from "../../Framework/Ball/Ball.js";
import { BallRender } from "../../Framework/Ball/BallRender.js";
import { WallCollision } from "../../Framework/WallCollision/WallCollision.js";
import { Player } from "../../Framework/Player/Player.js";
import { PlayerInputHandler } from "../../Framework/Player/PlayerInputHandler.js";
import { BallCollisionLeft } from "../../Framework/BallCollision/BallCollisionLeft.js";
import { BallCollisionRight } from "../../Framework/BallCollision/BallCollisionRight.js";
import { BallCollisionRender } from "../../Framework/BallCollision/BallCollisionRender.js";

export class SecondPlayerFactory {
    constructor(ctx, size) {
        this.ctx = ctx;
        this.size = size;
        this.timer = new Timer();
        this.input = new InputHandler();
        this.ball = new Ball(
            this,
            new Vector2(this.size.x - 45, this.size.y / 2),
            new Vector2(10, 10),
            new Vector2(.05, .05),
            new InputHandlerEmpty()
            , new WallCollision()
            , new BallRender()
        );
        this.player1 = new Player(
            this,
            new Vector2(10, this.size.y / 2),
            new Vector2(10, 100),
            new Vector2(0, 0)
            , new PlayerInputHandler(this.input)
        );
        this.player2 = new Player(
            this,
            new Vector2(this.size.x - 10, this.size.y / 2),
            new Vector2(10, 100),
            new Vector2(0, 0)
            , new PlayerInputHandler(this.input)
        );
        this.collisionLeft = new BallCollisionLeft();
        this.collisionRight = new BallCollisionRight();
        this.collisionLeftRender = 
            new BallCollisionRender(
                this.ctx
                , this.collisionLeft);
        this.collisionRightRender = 
            new BallCollisionRender(
                this.ctx
                , this.collisionRight);
    }
}