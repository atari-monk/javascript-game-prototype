import { BallPrinter } from "../../Framework/Ball/BallPrinter.js";
import { WallCollisionPrinter } from "../../Framework/WallCollision/WallCollisionPrinter.js";

export class WallCollisionTestInfoFactory {
    constructor(ctx, size, game) {
        this.ctx = ctx;
        this.size = size;
        this.ballPrinter = new BallPrinter(this.ctx, game.ball);
        this.wallCollisionPrinter = new WallCollisionPrinter(this.ctx, game.ball);
    }
}
