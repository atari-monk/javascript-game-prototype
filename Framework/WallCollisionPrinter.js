import { Printer } from "./Printer.js";

export class WallCollisionPrinter extends Printer {
    constructor(ctx, ball) {
        super(ctx);
        this.ball = ball;
    }

    printInfo() {
        this.print(this.#getInfo(), 10, 50);
    }

    #getInfo() {
        var info = 'wallCollision->debugCondition:'
            + this.ball.wallCollision.debugCondition;
        return info;
    }
}