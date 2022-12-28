
export class BallInputHandler3 {
  constructor(input) {
    this.input = input;
  }

  handleInput(ball) {
    const speed = .1;
    if (this.input.keys.indexOf("ArrowLeft") > -1) {
      ball.speed.x = speed;
    }
    else if (this.input.keys.indexOf("ArrowRight") > -1) {
      ball.speed.x = -speed;
    }
    else if (this.input.keys.indexOf("ArrowUp") > -1) {
      ball.speed.y = speed;
    }
    else if (this.input.keys.indexOf("ArrowDown") > -1) {
      ball.speed.y = -speed;
    }
  }
}
