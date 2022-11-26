import { Printer } from "../Printer.js";

export class BallPrinter extends Printer {
    constructor(ctx, ball) {
        super(ctx);
        this.ball = ball;
    }

    printInfo()
    {
        this.print(this.#getLabel(), 5, 20);
        this.print(this.#getPosition(), 40, 20);
        this.print(this.#getSpeed(), 40, 50);
    }

    #getLabel()
    {
        return 'Ball:';
    }

    #getPosition()
    {
        return ' x: ' + this.ball.position.x.toFixed(1)
             + '  y: ' + this.ball.position.y.toFixed(1);
    }

    #getSpeed()
    {
        return ' vx: ' + this.ball.speed.x.toFixed(2)
             + '  vy: ' + this.ball.speed.y.toFixed(2);
    }
}