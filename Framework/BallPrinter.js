import { Printer } from "./Printer.js";

export class BallPrinter extends Printer {
    constructor(ctx, ball) {
        super(ctx);
        this.ball = ball;
    }

    printBall()
    {
        this.print('ball ', 10, 20);
        this.print('radius:' + this.ball.radius.toFixed(1), 50, 20);
        this.print('x:' + this.ball.position.x.toFixed(1), 155, 20);
        this.print('y:' + this.ball.position.y.toFixed(1), 225, 20);
    }
}