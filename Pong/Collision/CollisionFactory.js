import { CollisionTestFactory } from '../CollisionTest/CollisionTestFactory.js';
import { Vector2 } from "../../Framework/Vector2.js";
import { InputHandlerEmpty } from "../../Framework/InputHandlerEmpty.js";
import { Ball } from "../../Framework/Ball/Ball.js";
import { BallRender } from "../../Framework/Ball/BallRender.js";
import { WallCollision } from "../../Framework/WallCollision/WallCollision.js";
import { Player } from "../../Framework/Player/Player.js";
import { PlayerInputHandler } from "../../Framework/Player/PlayerInputHandler.js";

export class CollisionFactory extends CollisionTestFactory {
    constructor(ctx, size) {
        super(ctx, size);
        this.player = new Player(
            this,
            new Vector2(this.size.x / 2 - 100, this.size.y / 2),
            new Vector2(10, 100),
            new Vector2(0, 0)
            , new PlayerInputHandler(this.input)
        );
        this.ball = new Ball(
            this,
            new Vector2(this.size.x - 45, this.size.y / 2),
            new Vector2(10, 10),
            new Vector2(.05, .05),
            new InputHandlerEmpty()
            , new WallCollision()
            , new BallRender()
        );
    }
}