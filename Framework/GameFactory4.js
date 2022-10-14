import { GameFactory3 } from './GameFactory3.js';
import { Vector2 } from "./Vector2.js";
import { Player } from "./Player.js";
import { Ball } from "./Ball.js";
import { PlayerInputHandler } from "./PlayerInputHandler.js";
import { EmptyInputHandler } from "./EmptyInputHandler.js";
import { WallCollision } from "./WallCollision.js";

export class GameFactory4 extends GameFactory3 {
    constructor(ctx, size) {
        super(ctx, size);
        this.player = new Player(
            this,
            new Vector2(10, this.size.y / 2),
            new Vector2(10, 100),
            new Vector2(0, 0)
            , new PlayerInputHandler(this.input)
        );
        this.ball = new Ball(
            this,
            new Vector2(this.size.x - 45, this.size.y / 2),
            new Vector2(10, 10),
            new Vector2(.3, .3),
            new EmptyInputHandler()
            , new WallCollision()
        );
    }
}