import { Printer } from "./Printer.js";

export class BallPrinter extends Printer {
    constructor(ctx, ball) {
        super(ctx);
        this.ball = ball;
    }

    printBall()
    {
        this.print('test', 10, 10);
    }
}