
export class BallInputHandler {
    constructor(input) {
        this.input = input;
    }

    handleInput(ball) {
        if (this.input.keys.indexOf("ArrowLeft") > -1) {
            ball.speed.x = .1;
        }
        else if (this.input.keys.indexOf("ArrowRight") > -1) {
            ball.speed.x = -.1;
        }
        else if (this.input.keys.indexOf("ArrowUp") > -1) {
            ball.speed.y = .1;
        }
        else if (this.input.keys.indexOf("ArrowDown") > -1) {
            ball.speed.y = -.1;
        }
        else {
            ball.speed.x = 0;
            ball.speed.y = 0;
        }
    }
}