import { GameFactory } from './GameFactory.js';
import { Vector2 } from "./Vector2.js";
import { Ball } from "./Ball.js";

export class GameFactory2 extends GameFactory {
    constructor(ctx, size) {
        super(ctx, size);
        this.ball = new Ball(
            this,
            new Vector2(this.size.x - 45, this.size.y / 2),
            10,
            new Vector2(0, 0)
        );
    }
}