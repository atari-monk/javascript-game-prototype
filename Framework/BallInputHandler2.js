
export class BallInputHandler2 {
    constructor(input) {
        this.input = input;
        this.fired = false;
    }

    handleInput(ball) {
        if(this.fired) return;
        var speed = .3;
        var speedM = -.3;
        if (this.input.keys.indexOf("ArrowLeft") > -1) {
            ball.speed.x = speed;
        }
        else if (this.input.keys.indexOf("ArrowRight") > -1) {
            ball.speed.x = speedM;
        }
        else if (this.input.keys.indexOf("ArrowUp") > -1) {
            ball.speed.y = speed;
        }
        else if (this.input.keys.indexOf("ArrowDown") > -1) {
            ball.speed.y = speedM;
        }
        this.fired = true;
    }
}
