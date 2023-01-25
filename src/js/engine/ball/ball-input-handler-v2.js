
export class BallInputHandler2 {
  constructor(input) {
    this.input = input;
  }

  handleInput(ball) {
    if (ball.speed.x > 0 && this.#checkKey("ArrowLeft")) {
      this.#revSpeedX(ball);
    }
    else if (ball.speed.x < 0 && this.#checkKey("ArrowRight")) {
      this.#revSpeedX(ball);
    }
    else if (ball.speed.y > 0 && this.#checkKey("ArrowUp")) {
      this.#revSpeedY(ball);
    }
    else if (ball.speed.y < 0 && this.#checkKey("ArrowDown")) {
      this.#revSpeedY(ball);
    }
  }

  #checkKey(keyName) {
    return this.input.keys.indexOf(keyName) > -1;
  }

  #revSpeedY(ball) {
    ball.speed.y = -ball.speed.y;
  }

  #revSpeedX(ball) {
    ball.speed.x = -ball.speed.x;
  }
}