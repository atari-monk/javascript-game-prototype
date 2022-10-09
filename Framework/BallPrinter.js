import { Printer } from "./Printer.js";

export class BallPrinter extends Printer {
    constructor(ctx, ball) {
        super(ctx);
        this.ball = ball;
    }

    printInfo()
    {
        this.print(this.#getInfo(), 10, 20);
    }

    #getInfo()
    {
        var info = 'ball->radius:'
            + this.ball.radius.toFixed(1)
            + ' x: ' + this.ball.position.x.toFixed(1)
            + ' y: ' + this.ball.position.y.toFixed(1)
            + ' vx: ' + this.ball.speed.x.toFixed(1)
            + ' vy: ' + this.ball.speed.y.toFixed(1);
        return info;
    }
}